export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const getRandomArrayItem = (arr) => {
  if (arr.length === 0) {
    return undefined;
  }

  const randomIndex = getRandomInteger(0, arr.length - 1);

  return arr[randomIndex];
};

export const getRandomArrayItems = function (info) {

  if (info.length === 0) {
    return undefined;
  }

  const restInformation = info.slice();
  const countInformation = getRandomInteger(1, restInformation.length);
  let newArray = [];
  for (let i = 0; i < countInformation; i++) {
    newArray.push(restInformation.splice(getRandomInteger(0, restInformation.length - 1), 1));
  }

  return newArray;
};

export const gerArrFormat = (arr) => {
  if (arr.length > 1) {
    return arr.join(', ');
  }

  return arr;
}