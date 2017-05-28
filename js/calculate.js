document.addEventListener("DOMContentLoaded", () => {
  // formのsubmit時の動作を定義する
  document.getElementById("calc-form").onsubmit = () => {
    // 計算式を入力するinputを取得する
    const formulaInput = document.getElementById("calc-input");
    formulaInput.value = eval(formulaInput.value);
    return false;
  };
});

function pressedValue(button) {
  const formulaInput = document.getElementById("calc-input");
  var lastFormula = formulaInput.value.slice(-1);
  if(button === 'C') {
    formulaInput.value = "";
  }
  else if(isOper(lastFormula) && lastFormula === button) {
  }
  else {
    formulaInput.value += button;
  }
}

function isOper(letter) {
  if(letter === '+')
    return true;
  else if(letter === '-') {
    return true;
  }
  else if(letter === '*') {
    return true;
  }
  else if(letter === '/') {
    return true;
  }
  else {
    return false;
  }
}
