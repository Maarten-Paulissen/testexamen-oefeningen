function kleinLetters(naam) {
  return naam === naam.toLowerCase();
}

console.log(kleinLetters("bart")); // true
console.log(kleinLetters("Bart")); // false
console.log(kleinLetters("BaRt")); // false
