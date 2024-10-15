function uitlegBijTypeVanParameter(parameter) {
  const type = typeof parameter;

  if (type === "boolean") {
    console.log("De mogelijke waarden zijn: false en true");
  } else if (type === "number") {
    console.log("De mogelijke waarde zijn: 1 , 69 , 3.141592");
  } else if (type === "string") {
    console.log("De mogelijke waarden zijn [1, 2] , {naam: Bart}, null");
  } else if (type === "undefined") {
    console.log("De waarde is undefined");
  } else if (type === "function") {
    console.log("de waarde is een functie bv function hihi() {}");
  } else {
    console.log("geen informatie over dit type");
  }
}

uitlegBijTypeVanParameter(true); // De mogelijke waarden zijn: false en true
uitlegBijTypeVanParameter(69); // De mogelijke waarde zijn: 1 , 69 , 3.141592
uitlegBijTypeVanParameter("Bart"); // De mogelijke waarden zijn [1, 2] , {naam: Bart}, null
uitlegBijTypeVanParameter(undefined); // De waarde is undefined
uitlegBijTypeVanParameter(function () {}); // de waarde is een functie bv function hihi() {}
uitlegBijTypeVanParameter([]); // geen informatie over dit type
