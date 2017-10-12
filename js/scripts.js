(function () {
  "use strict";

  var btn = document.querySelector("#getNumbers"),
    output = document.querySelector("#showNumbers");

  function getRandom(min, max) {

    return Math.floor(Math.random() * (max - min) + min);

  }


  function showRandomNumbers() {

    var numbers = [],
      random,
      i;

    for (i = 0; i < 6; i += 1) {
      random = getRandom(1, 49);

      while (numbers.indexOf(random) !== -1) {
        random = getRandom(1, 49);
      }

      numbers.push(random);

    }

    output.value = numbers.join(", ");

  }

  btn.onclick = showRandomNumbers;


}());