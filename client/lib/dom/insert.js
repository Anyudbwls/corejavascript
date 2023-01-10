function insertBefore(node, text) {
  if (typeof node === 'string') node = getNode(node);

  if (node.nodeType !== document.ELEMENT_NODE) {
    refError('첫번째 인자는 ELEMENT 노드여야합니다.');
  }

  node.insertAdjacentHTML('beforebegin', text);
}

function insertFirst(node, text) {
  if (typeof node === 'string') node = getNode(node);
  if (node.nodeType !== document.ELEMENT_NODE) {
    refError('첫번째 인자는 ELEMENT 노드여야합니다.');
  }

  node.insertAdjacentHTML('afterbegin', text);
}

function insertLast(node, text) {
  if (typeof node === 'string') node = getNode(node);
  if (node.nodeType !== document.ELEMENT_NODE) {
    refError('첫번째 인자는 ELEMENT 노드여야합니다.');
  }

  node.insertAdjacentHTML('beforeend', text);
}

function insertAfter(node, text) {
  if (typeof node === 'string') node = getNode(node);
  if (node.nodeType !== document.ELEMENT_NODE) {
    refError('첫번째 인자는 ELEMENT 노드여야합니다.');
  }

  node.insertAdjacentHTML('afterend', text);
}
