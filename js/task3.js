//3. Визначити якесь із трьох, введених користувачем, чисел максимальне і вивести його на екран.

function isBigger() {
  alert(`Let's find the biggest number! `);
  let a = +prompt(`Enter first number`);
  let b = +prompt(`Enter second number`);
  let c = +prompt(`Enter third number`);

  if (!Number(a) || !Number(b) || !Number(c)) {
    alert(`Error! Enter correct data! (number)`);
  } else {
    if (a > b && a > c) {
      alert(`The biggest number is ${a}!`);
    } else if (b > a && b > c) {
      alert(`The biggest number is ${b}!`);
    } else {
      alert(`The biggest number is ${c}!`);
    }
  }
}

isBigger();
