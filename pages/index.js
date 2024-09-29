import Card from '../scripts/components/Card.js';
import Section from '../scripts/components/Section.js';
import { cardsData, cardsSliderData } from '../scripts/utils/data.js';

const form = document.querySelector('.search-form');
const input = form.querySelector('.search-form__input');
const submitButton = document.querySelector('.search-form__button');
const switchButton = document.querySelectorAll('.slider__nav-link');
const sliderList = document.querySelector('.slider__list');

let dataSetDaytimeActive = 'hours';
const cardTemplate = '.card-template';
const cardSliderTemplate = `.${dataSetDaytimeActive}-template`;
const cardSelector = '.card';
const cardSliderSelector = '.slider__list-item';

const handleSubmit = (evn) => {
  evn.preventDefault();

  submitButton.classList.remove('search-form__button_reset');
  input.value = '';
};

const handleSwitchButton = (button) => {
  let activeButton = document.querySelector('.slider__nav-link_active');

  while (sliderList.firstChild) {
    sliderList.removeChild(sliderList.lastChild);
  }

  if (activeButton) {
    activeButton.classList.remove('slider__nav-link_active');
    activeButton.disabled = false;
  }

  if (dataSetDaytimeActive === 'days') {
    cardSliderRender.renderItems(cardsSliderData.days);
  }
  if (dataSetDaytimeActive === 'hours') {
    cardSliderRender.renderItems(cardsSliderData.hours);
  }

  activeButton = button;
  activeButton.disabled = true;
  activeButton.classList.add('slider__nav-link_active');
};

const createCard = (data) => {
  const card = new Card(data, cardTemplate, cardSelector);
  const cardElement = card.generateCard();

  return cardElement;
};

const createSliderCard = (data) => {
  const card = new Card(data, cardSliderTemplate, cardSliderSelector, dataSetDaytimeActive);
  const cardElement = card.generateSliderCard();

  return cardElement;
};

const cardRender = new Section((item) => {
  cardRender.addItem(createCard(item));
}, '.card-list');

const cardSliderRender = new Section((item) => {
  cardSliderRender.addItem(createSliderCard(item));
}, '.slider__list');

switchButton.forEach((item) => {
  item.addEventListener('click', (evn) => {
    const active = evn.target.closest('.slider__nav-link');

    if (!active) return;

    if (!item.contains(active)) return;

    dataSetDaytimeActive = active.dataset.daytime;
    handleSwitchButton(active);
  });
});

form.addEventListener('submit', (evn) => {
  handleSubmit(evn);
});

input.addEventListener('input', () => {
  submitButton.classList.add('search-form__button_reset');
  console.log(input.value);
  !input.value
    ? submitButton.classList.remove('search-form__button_reset')
    : '';
});

input.onfocus = () => {
  submitButton.classList.add('search-form__button_reset');
};

input.onblur = () => {
  if (!input.value) submitButton.classList.remove('search-form__button_reset');
  return;
};

cardSliderRender.renderItems(cardsSliderData.hours);
cardRender.renderItems(cardsData);
