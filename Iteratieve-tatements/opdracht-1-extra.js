function doortellen(getal) {
  if (getal >= 100) {
    console.log("Het getal is 100 of meer!");
  } else {
    let output = " ";
    for (let i = getal + 1; i <= 100; i++) {
      output += i + " ";
    }
    console.log(output.trim());
  }
}

doortellen(100);
doortellen(98);
doortellen(89);
