function berekenTotaal(aantalLussen) {
  let totaal = 0;

  for (let i = 0; i < aantalLussen; i++) {
    totaal += i;
  }
  return totaal;
}

function printTotaal(aantalLussen) {
  let totaal = berekenTotaal(aantalLussen);
  return console.log("Het totaal is: ", berekenTotaal(aantalLussen));
}

printTotaal(10);
printTotaal(25);
printTotaal(100);
printTotaal(666);
printTotaal(10000);
