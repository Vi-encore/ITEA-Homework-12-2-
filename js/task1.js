//1. Серед трьох чисел знайти середнє арифметичне. Якщо серед чисел є рівні, вивести повідомлення "Помилка".
//Числа прийняти від користувача.

function midMath() {
  alert(`Hello! Let's find an arithmetic mean of three DIFFERENT numbers!`);
  let a = +prompt(`Enter first number`);
  let b = +prompt(`Enter second number`);
  let c = +prompt(`Enter third number`);

  if (!Number(a) || !Number(b) || !Number(c)) {
    alert(`Error! Enter correct data! (number)`);
  } else if (a === b || a === c || b === c) {
    alert(`Oops! Seems like you enter some equal numbers! Try again later!`);
  } else {
    let mid = (a + b + c) / 3;
    alert(Math.round(mid));
  }
}

midMath();
