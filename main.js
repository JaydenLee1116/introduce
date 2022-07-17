'use strict';

// navbar 선택 시 해당 요소로 스크롤

const profileBtn = document.querySelector('#avatar');
const aboutBtn = document.querySelector('#about__btn');
const interestsBtn = document.querySelector('#interests__btn');
const mbtiBtn = document.querySelector('#mbti__btn');

const aboutPage = document.querySelector('#about');
const interestsPage = document.querySelector('#interests');
const mbtiPage = document.querySelector('#mbti');

profileBtn.addEventListener('click', (event) => {
  aboutPage.scrollIntoView({ behavior: 'smooth' });
});

aboutBtn.addEventListener('click', (event) => {
  aboutPage.scrollIntoView({ behavior: 'smooth' });
});

interestsBtn.addEventListener('click', (event) => {
  interestsPage.scrollIntoView({ behavior: 'smooth' });
});

mbtiBtn.addEventListener('click', (event) => {
  mbtiPage.scrollIntoView({ behavior: 'smooth' });
});
