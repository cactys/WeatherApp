export const cardsData = [
  {
    title: 'Влажность',
    iconLink: './public/images/icons/icon__humidity.svg',
    value: '75 %',
    bar: '75',
    barValue: { min: '0%', max: '100%' },
  },
  {
    title: 'Давление',
    iconLink: './public/images/icons/icon__barometer.svg',
    value: '761',
    bar: '76.1',
    barValue: 'Повышенное',
  },
  {
    title: 'Видимость',
    iconLink: './public/images/icons/icon__visibility.svg',
    value: '28 км',
    bar: '28',
    barValue: 'Нормальная',
  },
  {
    title: 'Рассвет',
    iconLink: './public/images/icons/icon__sunrise.svg',
    value: '8:42',
    barValue: 'Прошло: 02:47',
  },
  {
    title: 'Закат',
    iconLink: './public/images/icons/icon__sunset.svg',
    value: '16:37',
    barValue: 'Осталось: 05:08',
  },
  {
    title: 'Сила ветра',
    iconLink: './public/images/icons/icon__direction-southwest.svg',
    value: '2 м/с',
    barValue: 'Северо-западный',
  },
];

export const cardsSliderData = {
  days: [
    {
      date: '2024-01-07',
      iconLink: './public/images/day-icons/day-icon__few-clouds.svg',
      cloudCover: 'Облачно с прояснениями',
      temp: { from: '-17', before: '-11' },
    },
    {
      date: '2024-01-08',
      iconLink: './public/images/day-icons/day-icon__few-clouds.svg',
      cloudCover: 'Облачно с прояснениями',
      temp: { from: '-16', before: '-8' },
    },
    {
      date: '2024-01-09',
      iconLink: './public/images/day-icons/day-icon__broken-clouds.svg',
      cloudCover: 'Облачно с прояснениями',
      temp: { from: '-8', before: '-2' },
    },
    {
      date: '2024-01-10',
      iconLink: './public/images/day-icons/day-icon__few-clouds.svg',
      cloudCover: 'Облачно с прояснениями',
      temp: { from: '-2', before: '1' },
    },
  ],
  hours: [
    {
      date: '12:00',
      iconLink: './public/images/day-icons/day-icon__broken-clouds.svg',
      cloudCover: 'Облачно с прояснениями',
      temp: '-7',
    },
    {
      date: '15:00',
      iconLink: './public/images/day-icons/day-icon__broken-clouds.svg',
      cloudCover: 'Облачно с прояснениями',
      temp: '-5',
    },
    {
      date: '18:00',
      iconLink: './public/images/day-icons/day-icon__broken-clouds.svg',
      cloudCover: 'Облачно с прояснениями',
      temp: '-7',
    },
    {
      date: '21:00',
      iconLink: './public/images/night-icons/night-icon__broken-clouds.svg',
      cloudCover: 'Облачно с прояснениями',
      temp: '-9',
    },
    {
      date: '00:00',
      iconLink: './public/images/night-icons/night-icon__broken-clouds.svg',
      cloudCover: 'Облачно с прояснениями',
      temp: '-11',
    },
    {
      date: '03:00',
      iconLink: './public/images/night-icons/night-icon__broken-clouds.svg',
      cloudCover: 'Облачно с прояснениями',
      temp: '-13',
    },
  ],
};
