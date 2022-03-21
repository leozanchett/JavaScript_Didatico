import { toggleHiddenElement } from '../modules/dom-functions';

const buttonElement = document.getElementById('secret-button');
const pElement = document.getElementById('secret-p');
 
 
buttonElement.addEventListener('click', () => {
  toggleHiddenElement(pElement);
});