function doortellen(getal) {
  if (getal >= 100) {
    console.log("Het getal is 100 of meer!");
  } else {
    let output = " ";
    for (let i = getal + 1; i <= 100; i++) {
      console.log(output + i);
      output = "";
    }
  }
}

doortellen(100); // "Het getal is 100 of meer!" wordt uitgeprint
doortellen(98); // De volgende getallen worden uitgeprint: 99 100
doortellen(89); // De volgende getallen worden uitgeprint: 90 91 92 93 94 95 96 97 98 99 100
