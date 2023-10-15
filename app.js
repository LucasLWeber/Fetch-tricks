const cep = document.getElementById('cep');
const button = document.querySelector('button');
button.addEventListener('click', handleClick);
function handleClick(event) {
  event.preventDefault();
  getCep(cep.value);
}
function getCep(cep) {
  return fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => {
      return response.json();
    })
    .then(response => {
      return document.querySelector('.endereco').innerText = `Bairro: ${response.bairro} - Cidade: ${response.localidade} - Estado: ${response.uf}`;
    });
}
const real = document.getElementById('real');
const bitcoin = document.getElementById('bitcoin');
function getValuesFromPromise() {
  fetch('https://blockchain.info/ticker')
    .then(response => response.json())
    .then(response => {
      real.innerText = `Preço bitcoin: R$ ${response.BRL.buy}`.replace('.', ',');
    });
}
getValuesFromPromise();
setInterval(getValuesFromPromise, 30000);
const joke = document.getElementById('joke');
const btnNext = document.getElementById('next');
getRandomJoke();
btnNext.addEventListener('click', getRandomJoke);
function getRandomJoke() {
  fetch('https://api.chucknorris.io/jokes/random').
    then(response => response.json())
    .then(response => joke.innerText = response.value);
}