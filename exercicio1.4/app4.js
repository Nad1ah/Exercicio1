const num1 = 1;

const myCalc = (x) => {
  const num2 = 2;

  console.log(num2);

  return num1 + num2 + x;
};

console.log(myCalc(3));
console.log(num2); //assim nao lê pois esta fora da chave//
