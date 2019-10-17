function getLocalList(key) {
  let item = localStorage.getItem(key);
  if (item !== null && item.length > 0) {
    if (!Array.isArray(JSON.parse(item))) {
      return [];
    }

    return item;
  }

  return [];
}

let item = getLocalList('lista');
console.log(item);
