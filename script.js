const h1 = document.querySelector('h1')
const wrapper = document.querySelector('.wrapper')

loadCharacters()

async function loadCharacters() {
  const res = await fetch('https://hp-api.herokuapp.com/api/characters')
  const data = await res.json()

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
      <div class="hover-name">
        <h2>${data[i].name}</h2>
        <div class="ancestry"><p>ancestry: </p>${data[i].ancestry}</div>
        <div class="date-of-birth"><p>date of birth: </p>${data[i].dateOfBirth}</div>
        <div class="patronus"><p>patronus: </p>${data[i].patronus}</div>
      </div>
    </div>

    <div class="right">
      <div class="wand">
        <h2>wand:</h2>
        <div class="wood"><p>wood: </p>${data[i].wand.wood}</div>
        <div class="core"><p>core: </p>${data[i].wand.core}</div>
        <div class="length"><p>length: </p>${data[i].wand.length}</div>
      </div>
    </div>
  </div>
  `
  wrapper.appendChild(a)
  i++
}
