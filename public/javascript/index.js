const charactersAPI = new APIHandler('https://minions-api.herokuapp.com/');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI
      .getFullList()
      .then(({ data }) => {
        console.log(data)
        let cartoon = ''
        data.forEach(elm => {
          cartoon +=
            `<div class="character-info">
            <div class="name">Character Name:${elm.name} </div>
            <div class="occupation">Character Id:${elm.id}</div>
            <div class="cartoon">Character Occupation:${elm.occupation}</div>
            <div class="weapon">Character Wapon:${elm.weapon}</div>
          </div>`

          document.querySelector('.characters-container').innerHTML = cartoon
        });

      })
      .catch(err => console.log(err))
  })
});

document.getElementById('fetch-one').addEventListener('click', function (event) {
  const searchInput = document.querySelector('fetchone').value
  charactersAPI
    .getOneRegister(searchInput)
    .then(({ data }) => {
      let one = `<div class="character-info">
            <div class="name">Character Name:${data.name} </div>
            <div class="occupation">Character Id:${data.id}</div>
            <div class="cartoon">Character Occupation:${data.occupation}</div>
            <div class="weapon">Character Wapon:${data.weapon}</div>
          </div>`
      document.querySelector('.characters-container').innerHTML = one
    })
    .catch(err => console.log(err))

});

document.getElementById('delete-one').addEventListener('click', function (event) {

});

document.getElementById('edit-character-form').addEventListener('submit', function (event) {

});

document.getElementById('new-character-form').addEventListener('submit', function (event) {

});

