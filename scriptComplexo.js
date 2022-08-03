const input = document.getElementById("input");
const result = document.getElementById("result");

let values = [
  (X = () => 10),
  (V = () => 5),
  (I = () => 1),
  (L = () => 50),
  (C = () => 100),
  (D = () => 500),
  (M = () => 1000),
];

function convertToNumber() {
  let number = 0;

  const valueInput = input.value;

  for (let i = 0; i < valueInput.length; i++) {
    let letter = valueInput.charAt(i);
    let existsNextLetter = valueInput.charAt(i + 1) ? true : false;
    let nextLetter = valueInput.charAt(i + 1);
    let letterToNumber = 0;
    let nextLetterToNumber = 0;

    values.forEach((item) => {
      if (item.name == letter) {
        letterToNumber = item.apply();
      }
    });

    values.forEach((item) => {
      if (item.name == nextLetter) {
        nextLetterToNumber = item.apply();
      }
    });


    if (existsNextLetter && nextLetterToNumber > letterToNumber) {
      number -= letterToNumber;
    } else {
      number += letterToNumber;
    }
  }

  result.innerHTML = number.toString();
}

function clearInput() {
  alert("Erro");
  input.value = "";
  input.focus();
  return;
}
