function uitlegBijTypeVanParameter(parameter) {
  const type = typeof parameter;
  switch (type) {
    case "boolean":
      console.log("De mogelijke waarden zijn: false en true");
      break;
    case "number":
      console.log("De mogelijke waarde zijn: 1 , 69 , 3.141592");
      break;
    case "string":
      console.log("De mogelijke waarden zijn [1, 2] , {naam: Bart}, null");
      break;
    case "undefined":
      console.log("De waarde is undefined");
      break;
    case "function":
      console.log("de waarde is een functie bv function hihi() {}");
      break;
  }
}

uitlegBijTypeVanParameter(true); // De mogelijke waarden zijn: false en true
uitlegBijTypeVanParameter(69); // De mogelijke waarde zijn: 1 , 69 , 3.141592
uitlegBijTypeVanParameter("Bart"); // De mogelijke waarden zijn [1, 2] , {naam: Bart}, null
uitlegBijTypeVanParameter(undefined); // De waarde is undefined
uitlegBijTypeVanParameter(function () {}); // de waarde is een functie bv function hihi() {}
uitlegBijTypeVanParameter([]); // geen informatie over dit type
