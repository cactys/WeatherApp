const days = ['Вс.', 'Пн.', 'Вт.', 'Ср.', 'Чт.', 'Пт.', 'Сб.'];
const months = [
  'янв.',
  'фев.',
  'мар.',
  'апр.',
  'май.',
  'июн.',
  'июл.',
  'авг.',
  'сен.',
  'окт.',
  'ноя.',
  'дек.',
];

export const getDate = (date) => {
  const day = new Date(date).getDate().toString().padStart(2, '0');
  const dayOfWeek = new Date(date).getDay();
  const month = new Date(date).getMonth();

  return `${days[dayOfWeek]} ${day} ${months[month]}`;
};
