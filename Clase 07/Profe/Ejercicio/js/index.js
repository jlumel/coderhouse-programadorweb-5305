function setLocalList(key, list) {
  if (
    typeof key !== 'string' ||
    !Array.isArray(list) ||
    localStorage.getItem(key) !== null
  ) {
    return;
  }

  let stringifyList = JSON.stringify(list);
  localStorage.setItem(key, stringifyList);
}

let testList = ['CARLOS', 'GERONIMO', 'NICOLAS', 'LUCAS', 'MAURO'];
setLocalList('1', testList);
