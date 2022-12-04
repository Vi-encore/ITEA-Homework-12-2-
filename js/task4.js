//4. Дано два числа A та B де (A < B).
//    Виведіть на екран суму всіх чисел, розташованих у числовому проміжку від А до В.
//    Виведіть на екран усі непарні значення, розташовані у числовому проміжку від А до В.

function stepCount() {
  alert(`Enter two numbers, the first of which is less than the second!`);
  let a = +prompt(`Enter first numbber:`);
  let b = +prompt(`Enter second number:`);
  let result = 0;
  let odd = "";
  if (!Number(a) || !Number(b)) {
    alert(`You have NOT entered a number, please try again!`);
  } else if (a > b) {
    alert(`The entered numbers do NOT meet the condition!`);
  } else {
    for (let i = a; i < b; i++) {
      if (i === a) {
        result += 0;
      } else {
        result += i;
      }
    }

    for (let q = a; q < b; q++) {
      if (q === a) {
        odd += "";
      } else if (q % 2 === 0) {
        odd += "";
      } else {
        odd += `${q} `;
      }
    }
  }
  alert(
    `The sum of all the numbers in between the ones you entered equals ${result}`
  );
  alert(`All odd numbers in between the ones entered by you:  ${odd}`);
}

stepCount();
