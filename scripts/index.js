let authors = document.querySelector('.title')
let quotes = document.querySelector('.quote-text')
let button = document.querySelector('.random')
let share = document.querySelector('.share')

let q = []

fetch(
    "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/3-javascript/challenges/group_1/data/random-quotes.json"
)
    .then((response) => response.json())
    .then((data) => {
        q = data;
        retukl(q)
    })

    .catch((error) => {

        console.log(error);
    });


const retukl = (q) => {

    const ret = Math.floor(Math.random() * (q.length - 1))
    const result = q[ret]
    authors.innerHTML = result.author
    quotes.innerHTML = result.quote

}

button.addEventListener('click', () => {retukl(q)})

share.addEventListener('click', () => {


    const quoteText = quotes.innerText;

    const tempInput = document.createElement('textarea');
    tempInput.value = quoteText;
    document.body.appendChild(tempInput);

    tempInput.select();
    document.execCommand('copy');

    document.body.removeChild(tempInput);

    alert('Цитата скопійована в буфер обміну!');

})






