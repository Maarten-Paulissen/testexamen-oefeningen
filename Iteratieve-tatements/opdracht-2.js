function doortellen(getal, printOneven) {
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
