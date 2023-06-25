'use strict';

let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');
const nav = document.querySelector('nav');
const form = document.querySelector('.form');
const input = document.getElementById('input');

AOS.init({
  duration: 800,
});

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  header.classList.toggle('active');
};

let themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = () => {
  themeToggler.classList.toggle('fa-sun');
  if (themeToggler.classList.contains('fa-sun')) {
    document.body.classList.add('active');
  } else {
    document.body.classList.remove('active');
  }
};

document.querySelectorAll('.nav__link').forEach((el) =>
  el.addEventListener('click', () => {
    header.classList.remove('active');
    menu.classList.remove('fa-times');
  })
);

input.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    form.submit();
  }
});

const countersEl = document.querySelectorAll('.counter');
let finalValues = [];

countersEl.forEach((counter) => {
  counter.textContent = '0';

  const dataCeil = counter.getAttribute('data-ceil');
  finalValues.push(dataCeil);
});

const incrementCounters = function () {
  let allFinished = true;

  countersEl.forEach((counter, index) => {
    let currentNum = +counter.textContent;
    const dataCeil = finalValues[index];

    const increment = dataCeil / 50;
    currentNum += Math.ceil(increment);

    if (currentNum < dataCeil) {
      counter.textContent = currentNum;
      allFinished = false;
    } else {
      counter.textContent = dataCeil+ "+";
    }
    // counter.textContent += '+'
  });

  if (!allFinished) {
    setTimeout(incrementCounters, 150);
  }
};

incrementCounters();
