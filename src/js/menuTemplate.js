import main from './main.json'
import templateCard from '../templates/templateCard.hbs';

const putTemplateIntoHTML = document.querySelector('.js-menu');

const templateCardOutput = templateCard(main);

putTemplateIntoHTML.innerHTML = templateCardOutput;
