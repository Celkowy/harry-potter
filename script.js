const h1 = document.querySelector('h1')
const charactersWrap = document.querySelector('.characters-wrap')
const search = document.getElementById('search')
const cross = document.querySelector('.cross')
let characters = []

search.addEventListener('input', e => {
  const searchString = e.target.value.toLowerCase()
  const filteredCharacters = characters.filter(character => {
    return (
      character.name.toLowerCase().includes(searchString) ||
      character.house.toLowerCase().includes(searchString) ||
      character.ancestry.toLowerCase().includes(searchString)
    )
  })
  displayCharacters(filteredCharacters)
})

cross.addEventListener('click', () => {
  if (search.value != '') {
    search.value = ''
    displayCharacters(characters)
  }
})

async function loadCharacters() {
  const res = await fetch('https://hp-api.onrender.com/api/characters')
  characters = await res.json()
  displayCharacters(characters)
}

loadCharacters()

function displayCharacters(characters) {
  const htmlString = characters
    .map(character => {
      return `
    <div class="single-character">
      <div class="flex">
        <div class="name">${character.name}</div>
        <div class="house">house: ${character.house}</div>
      </div>
    
      <div class="photo">
        <img src="${character.image || `./img/hp${Math.floor(Math.random() * 8 + 1)}.jpg`}" alt="${character.name}" />
      </div>
    
      <div class="additional-info">
        <div class="left">
          <div class="hover-name">
            <h2>${character.name}</h2>
            <div class="ancestry">
              <p>ancestry:</p>
              ${character.ancestry}
            </div>
            <div class="date-of-birth">
              <p>date of birth:</p>
              ${character.dateOfBirth}
            </div>
            <div class="patronus">
              <p>patronus:</p>
              ${character.patronus}
            </div>
          </div>
        </div>
    
        <div class="right">
          <div class="wand">
            <h2>wand:</h2>
            <div class="wood">
              <p>wood:</p>
              ${character.wand.wood}
            </div>
            <div class="core">
              <p>core:</p>
              ${character.wand.core}
            </div>
            <div class="length">
              <p>length:</p>
              ${character.wand.length}
            </div>
          </div>
        </div>
      </div>
    </div>
    `
    })
    .join('')

  charactersWrap.innerHTML = htmlString
}
