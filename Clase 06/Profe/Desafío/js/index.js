function includeText(partOfString, completeString) {
  if (typeof partOfString !== typeof completeString) return false;

  if (completeString.toUpperCase().indexOf(partOfString.toUpperCase()) >= 0) {
    return true;
  }

  return false;
}

console.log(includeText('Pa', 'Patricia'));
console.log(includeText('Patricia', 'Pa'));
console.log(includeText(2, 'Pa'));
