const expenseName = document.getElementById("expenseName");
const expenseAmount = document.getElementById("expenseAmount");
const expenseCategory = document.getElementById("expenseCategory");
const expenseDate = document.getElementById("expenseDate");
const addExpenseBtn = document.getElementById("addExpenseBtn");
const expenseList = document.getElementById("expenseList");
const totalAmount = document.getElementById("totalAmount");

let expenses = [];

function renderExpenses() {
  expenseList.innerHTML = "";
  let total = 0;

  expenses.forEach(function (expense, index) {
    const li = document.createElement("li");
    li.innerHTML =`
      <span>${expense.name}</span>
      <span>${expense.category}</span>
      <span>${expense.date}</span>
      <span class="amount">GHS ${expense.amount}</span>
       
        <button class="delete-btn" onclick="deleteExpense(${index})">X</button>
        </span>
        `;
    

    /*"<span>" + expense.name + "</span><span>GHS " + expense.amount + "</span>";
    expenseList.appendChild(li);*/

    /* `
      <div>
        <strong>${expense.name}</strong>
        <small>${expense.category} | ${expense.date}</small>
      </div>

      <div>
        GHS ${expense.amount}
        <button onclick="deleteExpense(${index})"</button>
      </div>
        `;*/

  expenseList.appendChild(li);

    

    total += Number(expense.amount);
  });

  totalAmount.textContent = total;
}

addExpenseBtn.addEventListener("click", function () {
  const name = expenseName.value.trim();
  const amount = expenseAmount.value.trim();
  const category = expenseCategory.value;
  const date = expenseDate.value;

  if (name === "" || amount === "" || category === "" || date === "") {
    alert("Please fill all the fields");
    return;
  }

  expenses.push({
    name: name,
    amount: amount,
    category: category,
    date: date
  });

  renderExpenses();

  expenseName.value = "";
  expenseAmount.value = "";
  expenseCategory.value = "";
  expenseDate.value = "";
});

function deleteExpense(index) {
  expenses.splice(index, 1);
  renderExpenses();
}