function berekenTotaal(getal1) {
  let totaal = 0;
  let i = 0;

  do {
    totaal += i;
    i++;
  } while (i < getal1);
  return totaal;
}
let resultaat = berekenTotaal(10);

console.log("het totaal is: " + resultaat);
