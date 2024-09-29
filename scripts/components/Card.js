import { getDate } from '../utils/common.js';

export default class Card {
  constructor(
    { title, value, iconLink, bar, barValue, date, temp, cloudCover },
    templateSelector,
    cardSelector,
    dataSetDaytime
  ) {
    this._title = title;
    this._value = value;
    this._iconLink = iconLink;
    this._bar = bar;
    this._barValue = barValue;
    this._templateSelector = templateSelector;
    this._cardSelector = cardSelector;
    this._date = date;
    this._temp = temp;
    this._cloudCover = cloudCover;
    this._dataSetDaytime = dataSetDaytime;
  }

  _getTemplate() {
    const newCard = document
      .querySelector(this._templateSelector)
      .content.querySelector(this._cardSelector)
      .cloneNode(true);

    return newCard;
  }

  generateCard() {
    this._element = this._getTemplate();

    this._cardTitle = this._element.querySelector('.card__title');
    this._cardIcon = this._element.querySelector('.card__icon');
    this._cardValue = this._element.querySelector('.card__value');
    this._cardRange = this._element.querySelector('.card__range');
    this._cardRangeEllipse = this._element.querySelector(
      '.card__range-ellipse'
    );
    this._cardValueContainer = this._element.querySelector(
      '.card__value-container'
    );
    this._cardBarValue = this._element.querySelector('.card__bar-value');
    this._cardBarMinValue = this._element.querySelector('.card__min-value');
    this._cardBarMaxValue = this._element.querySelector('.card__max-value');

    this._cardTitle.textContent = this._title;
    this._cardIcon.src = this._iconLink;
    this._cardValue.textContent = this._value;
    this._cardBarValue.textContent = this._barValue;

    if (this._title === 'Влажность') {
      this._cardBarValue.classList.add('card__bar-value_disable');
      this._cardBarMinValue.classList.remove('card__min-value_disable');
      this._cardBarMaxValue.classList.remove('card__max-value_disable');
      this._cardValueContainer.style.justifyContent = 'space-between';
      this._cardBarValue.textContent = '';
      this._cardBarMinValue.textContent = this._barValue.min;
      this._cardBarMaxValue.textContent = this._barValue.max;
    }

    if (this._title === 'Давление') {
      this._cardRange.classList.add('card__range_pressure');
    }

    if (!this._bar) {
      this._cardRange.classList.add('card__range_disable');
    } else {
      this._cardRangeEllipse.style.setProperty(
        '--ellipse-position',
        `${this._bar}%`
      );
      this._cardRange.style.setProperty('--ellipse-position', `${this._bar}%`);
    }

    return this._element;
  }

  generateSliderCard() {
    this._element = this._getTemplate();

    this._sliderDate = this._element.querySelector('.slider__date');
    this._sliderIcon = this._element.querySelector('.slider__icon');
    this._sliderTemp = this._element.querySelector('.slider__temp');

    this._sliderDate.datetime = this._date;
    this._sliderDate.textContent =
      this._dataSetDaytime === 'days' ? getDate(this._date) : this._date;
    this._sliderIcon.src = this._iconLink;
    this._sliderIcon.alt = this._cloudCover;
    this._sliderTemp.textContent =
      this._dataSetDaytime === 'days'
        ? `от ${this._temp.from}${String.fromCharCode(0x00b0)} до ${
            this._temp.before
          }${String.fromCharCode(0x00b0)}`
        : `${this._temp}${String.fromCharCode(0x00b0)}`;

    return this._element;
  }
}
