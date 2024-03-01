const MONTH = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

function getCelcFromFaringate(temp) {
  return `${Math.round(temp - 273.15)}°`
};

function convertUnixTime(s) {
  const currentDate = new Date(s * 1000);

  return `${zeroPadToTwo(currentDate.getHours())}:${zeroPadToTwo(currentDate.getMinutes())}`
};

function getDateFromUnixTime(s) {
  const currentDate = new Date(s * 1000);

  return `${currentDate.getDate()} ${MONTH[currentDate.getMonth()]}`
};

function zeroPadToTwo(number) {
  const isNumberMoreThanTwoDigits = +number > 9;

  if (isNumberMoreThanTwoDigits) {
    return number
  }

  return `0${number}`
}

export {
  getCelcFromFaringate,
  convertUnixTime,
  getDateFromUnixTime,
  zeroPadToTwo,
}