//2. Перепишіть код за допомогою однієї конструкції switch:
//
//    const number = +prompt('Введіть число між 0 и 3', '');
//
//    if (number === 0) {
//        alert('Ви ввели число 0');
//    }
//
//    if (number === 1) {
//        alert('Ви ввели число 1');
//    }
//
//    if (number === 2 || number === 3) {
//        alert('Ви ввели число 2, а може і 3');
//    }
function switchNum() {
  const number = +prompt("Hello! Enter number between 0 and 3:", "");
  switch (number) {
    case 0:
      alert("You entered number 0!");
      break;
    case 1:
      alert("You entered number 1!");
      break;
    case 2:
    case 3:
      alert("You entered either 2 or 3!");
      break;
    default:
      alert(
        `You entered a number that does not match the condition (or you entered NOT a number)!`
      );
      break;
  }
}

switchNum();
