import main from './main.json'
import template from '../templates/cards.hbs';
import templateSecond from '../templates/card.hbs';
export const putTemplate = document.querySelector('.js-menu');
export const name = createTemplateMarkup(main);

function createTemplateMarkup(main) {
  return main.map(template).join('')
}

export const second = templateSecond(main);
