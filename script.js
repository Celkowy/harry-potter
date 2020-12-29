const h1 = document.querySelector('h1')
const wrapper = document.querySelector('.wrapper')

loadCharacters()

async function loadCharacters() {
  const res = await fetch('http://hp-api.herokuapp.com/api/characters')
  const data = await res.json()

  console.log(data)
  for (let index = 0; index < Object.keys(data).length; index++) {
    createCharacter(data)
  }
}

let i = 0
function createCharacter(data) {
  const a = document.createElement('div')
  a.setAttribute('class', 'single-character')
  a.innerHTML = `
  <div class="flex">
    <div class="name">${data[i].name}</div>
    <div class="house">house: ${data[i].house}</div>
  </div>

  <div class="photo">
    <img src="${data[i].image}" alt="">
  </div>
  

  <div class="additional-info">
    <div class="left">
      <div class="ancestry">ancestry: ${data[i].ancestry}</div>
      <div class="date-of-birth">date of birth: ${data[i].dateOfBirth}</div>
      <div class="eye-colour">eye colour: ${data[i].eyeColour}</div>
      <div class="hair-colour">hair colour: ${data[i].hairColour}</div>
      <div class="patronus">patronus: ${data[i].patronus}</div>
    </div>

    <div class="right">
      <div class="wand">
        wand:
        <div class="wood">wood: ${data[i].wand.wood}</div>
        <div class="core">core: ${data[i].wand.core}</div>
        <div class="length">length: ${data[i].wand.length}</div>
      </div>
    </div>
  </div>

  `
  wrapper.appendChild(a)
  i++
}
