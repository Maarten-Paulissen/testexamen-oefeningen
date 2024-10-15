function berekenTotaal(aantalLussen) {
  let totaal = 0;

  for (let i = 0; i < aantalLussen; i++) {
    totaal += i;
  }
  return totaal;
}
console.log("Het totaal is: ", berekenTotaal(25));
console.log("Het totaal is: ", berekenTotaal(100));
console.log("Het totaal is: ", berekenTotaal(666));
console.log("Het totaal is: ", berekenTotaal(10000));
