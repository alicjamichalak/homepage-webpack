import '../scss/main.scss';
import moment from 'moment';

const firstName = 'Alicja';
let age = 23;

console.log(
    `Witaj Drogi Odwiedzający, nazywam się ${firstName} i mam ${age} lata.`
);
const helloFunction = function(firstName, age) {
    console.log(
        `Witaj Drogi Odwiedzający, nazywam się ${firstName} i mam ${age} lata.`
    );
};
helloFunction(firstName, age);

const hamburger = document.querySelector('.hamburger--js');

hamburger.addEventListener('click', () => {
    const nav = document.querySelector('.navigation--js');
    nav.classList.toggle('navigation--open');
});

let momentVariable = moment().startOf('day').fromNow();
console.log(`Północ była: ${momentVariable}`);