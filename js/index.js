const calculateBtn = document.getElementById("calculate");
// console.log(calculateBtn);
calculateBtn.addEventListener("click", function (e) {
  //   console.log("kaj journal");

  const income = parseFloat(document.getElementById("income").value);
  const software = parseFloat(document.getElementById("software").value);
  const courses = parseFloat(document.getElementById("courses").value);
  const internet = parseFloat(document.getElementById("internet").value);
  //   console.table({ income, software, courses, internet });

  const totalExpenses = software + courses + internet;
  const balance = income - totalExpenses;
  //   console.table({ totalExpenses, balance });

  const totalExpensesElement = document.getElementById("total-expenses");
  totalExpensesElement.innerText = totalExpenses.toFixed(2);

  const balanceElement = document.getElementById("balance");
  balanceElement.innerText = balance.toFixed(2);

  const result = document.getElementById("results");
  result.classList.remove("hidden");
});

const calculateSavingsBtn = document.getElementById("calculate-savings");
calculateSavingsBtn.addEventListener("click", function (e) {
  //   console.log("teh");
  const savingPercentage = parseFloat(document.getElementById("savings").value);
  //   console.log(savingPercentage);

  const income = parseFloat(document.getElementById("income").value);
  const software = parseFloat(document.getElementById("software").value);
  const courses = parseFloat(document.getElementById("courses").value);
  const internet = parseFloat(document.getElementById("internet").value);
  //   console.table({ income, software, courses, internet });

  const totalExpenses = software + courses + internet;
  const balance = income - totalExpenses;
  //   console.table({ totalExpenses, balance });

  const savingAmount = (savingPercentage * balance) / 100;
  //   console.log(savingAmount);

  const savingsElement = document.getElementById("savings-amount");
  savingsElement.innerText = savingAmount.toFixed(2);

  const remainingBalance = balance - savingAmount;
  const remainingElement = document.getElementById("remaining-balance");
  remainingElement.innerText = remainingBalance.toFixed(2);
});
