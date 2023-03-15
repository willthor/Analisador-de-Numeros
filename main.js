let number = document.querySelector("input#number");
let select = document.querySelector("select#fileira");
let result = document.querySelector("#resultados");
let valores = [];

function num(n) {
  if (Number(n) == "" || Number(n) < 0 || Number(n) > 100) {
    return false;
  } else {
    return true;
  }
}

function inlist(n, lista) {
  if (lista.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

function submit() {
  if (num(number.value) && !inlist(number.value, valores)) {
    valores.push(Number(number.value));
    let item = document.createElement("Option");
    item.text = `valor adicionado foi ${number.value} `;
    select.appendChild(item);
    number.value = "";
    number.focus();
    result.innerHTML = "";
  } else {
    alert("[Error] Valor inválido ou ja adicionado");
  }
}

function finalizar() {
  if (valores.length == 0) {
    alert("Digite algum valor");
  } else {
    let tot = valores.length;
    let maior = valores[0];
    let menor = valores[0];
    let soma = 0;
    let media = 0;
    for (let pos in valores) {
      soma += valores[pos];
      if (valores[pos] > maior) maior = valores[pos];
      if (valores[pos] < menor) menor = valores[pos];
    }

    media += soma / valores.length;

    result.innerHTML = "";
    result.innerHTML += `<p>Ao todo temos ${tot} Numeros adicionados`;
    result.innerHTML += `<p>O maior valor adicionado é ${maior} `;
    result.innerHTML += `<p>O menor valor adicionado é ${menor} `;
    result.innerHTML += `<p>A soma dos numeros é ${soma} `;
    result.innerHTML += `<p>A Media dos valores é ${media} `;
  }
}
