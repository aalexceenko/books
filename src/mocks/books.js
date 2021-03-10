import {getRandomArrayItem, getRandomInteger, getRandomArrayItems} from "../utils";
import { nanoid } from 'nanoid';

const BOOK_COUNT = 5;


const TITLES = [
  `21`,
  `The Professor`,
  `Matilda`,
  `Destraction`,
  `The Social Network`,
];


const POSTER = [
  
  `img/aviator.jpg`,
  `img/bohemian-rhapsody.jpg`,
  `img/dardjeeling-limited.jpg`,
  `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  `img/johnny-english.jpg`,
  `img/macbeth.jpg`,
  `img/midnight-special.jpg`,
  `img/mindhunter.jpg`,
  `img/moonrise-kingdom.jpg`,
  `img/no-country-for-old-men.jpg`,
  `img/orlando.jpg`,
  `img/player-poster.jpg`,
  `img/pulp-fiction.jpg`,
  `img/revenant.jpg`,
  `img/seven-years-in-tibet.jpg`,
  `img/shutter-island.jpg`,
  `img/snatch.jpg`,
  `img/war-of-the-worlds.jpg`,
  `img/we-need-to-talk-about-kevin.jpg`,
  `img/what-we-do-in-the-shadows.jpg`,
];

const NAMES = [
  `Anna Adams`,
  `Betty Brown`,
  `Chris Costner`,
  `David Doe`,
  `Edith Edisson`,
  `Frank Farmer`,
  `George Gatsby`
];

const COMPANY = [
  `ALFA`,
  `OMEGA`,
  `BOMBORA`,
  `Doe`
];

const ISBN = [
  `978-5-906837-24-0`,
  `978-5-906837-24-2`,
  `978-5-906837-24-1`,
  `978-5-906837-24-3`,
];

const DESCRIPTION_STRINGS = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat.`,
  `Nunc fermentum tortor ac porta dapibus.`,
  `In rutrum ac purus sit amet tempus.`
];

const generateBook = () => {
  return {
    id: nanoid(),
    previewImage: getRandomArrayItem(POSTER),
    title: getRandomArrayItem(TITLES),
    authors: getRandomArrayItems(NAMES),
    pages: getRandomInteger(50, 1000),
    company: getRandomArrayItem(COMPANY),
    year: getRandomInteger(1900, 2000),
    releaseYear: getRandomInteger(1900, 2000),
    description: getRandomArrayItem(DESCRIPTION_STRINGS),
    isbn: getRandomArrayItem(ISBN),
  };
};


export let books = [];

for (let i = 0; i < BOOK_COUNT; i++) {
  books.push(generateBook());
}
