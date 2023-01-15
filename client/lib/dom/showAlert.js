import { getNode } from './getNode.js';
import { addClass, removeClass } from './css.js';

export function showAlert(node, message = '에러입니다.', timeout = 1500) {
  if (typeof node === 'string') node = getNode(node);

  node.textContent = message;

  addClass(node, 'is-active');

  setTimeout(() => {
    removeClass(node, 'is-active');
  }, timeout);
}
