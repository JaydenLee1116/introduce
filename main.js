'use strict';

// navbar 선택 시 해당 요소로 스크롤

const about__btn = document.querySelector('#about__btn');
const interests__btn = document.querySelector('#interests__btn');
const mbti__btn = document.querySelector('#mbti__btn');

const about__page = document.querySelector('#about');
const interests__page = document.querySelector('#interests');
const mbti__page = document.querySelector('#mbti');

about__btn.addEventListener('click', (event) => {
  about__page.scrollIntoView({ behavior: 'smooth' });
});

interests__btn.addEventListener('click', (event) => {
  interests__page.scrollIntoView({ behavior: 'smooth' });
});

mbti__btn.addEventListener('click', (event) => {
  mbti__page.scrollIntoView({ behavior: 'smooth' });
});
