const input = document.getElementById("input");
const result = document.getElementById("result");

let values = {
  x: 10,
  v: 5,
  i: 1,
};

// III = 3
// IV = 4
// V
//

function convertToNumber() {
  let number = 0;

  const valueInput = input.value;

  for (let i = 0; i < valueInput.length; i++) {
    let letter = valueInput.charAt(i);
    console.log(letter);
    if (letter != "x" && letter != "v" && letter != "i") {
      clearInput();
    }

      if (letter == "x" && valueInput.charAt(i - 1) == "i") {
        number += values.x - 2;
      }else if(letter == "x" && valueInput.charAt(i - 1) == "v"){
        number += values.x - 10;
      } else if (letter == "x") {
        number += values.x;
      } else if (letter == "v" && valueInput.charAt(i - 1) == "i") {
        console.log(number);
        console.log(values.v - 1);
        number += values.v - 2;
      } else if (letter == "v") {
        number += values.v;
      } else if (letter == "i") {
        number += values.i;
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
