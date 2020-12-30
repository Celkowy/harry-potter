const h1 = document.querySelector('h1')
const wrapper = document.querySelector('.wrapper')

loadCharacters()

async function loadCharacters() {
  const res = await fetch('https://hp-api.herokuapp.com/api/characters')
  const data = await res.json()

  for (const charData of data) {
    createCharacter(charData)
  }
}

function createCharacter(data) {
  const a = document.createElement('div')
  a.setAttribute('class', 'single-character')
  a.innerHTML = `
  <div class="flex">
    <div class="name">${data.name}</div>
    <div class="house">house: ${data.house}</div>
  </div>

  <div class="photo">
    <img src="${data.image}" alt="">
  </div>
  
  <div class="additional-info">
    <div class="left">
      <div class="hover-name">
        <h2>${data.name}</h2>
        <div class="ancestry"><p>ancestry: </p>${data.ancestry}</div>
        <div class="date-of-birth"><p>date of birth: </p>${data.dateOfBirth}</div>
        <div class="patronus"><p>patronus: </p>${data.patronus}</div>
      </div>
    </div>

    <div class="right">
      <div class="wand">
        <h2>wand:</h2>
        <div class="wood"><p>wood: </p>${data.wand.wood}</div>
        <div class="core"><p>core: </p>${data.wand.core}</div>
        <div class="length"><p>length: </p>${data.wand.length}</div>
      </div>
    </div>
  </div>
  `
  wrapper.appendChild(a)
}
