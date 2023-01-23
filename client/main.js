import { getNode as $ } from './lib/index.js';
import { saveStorage } from './lib/utils/storage.js';

const textField = $('#textField');
const deleteButton = $('input[value="삭제"]');

function inputHandler() {
  saveStorage('area', textField.value);
}

textField.addEventListener('input', inputHandler);

const hello = '🙇🏻‍♀️';
