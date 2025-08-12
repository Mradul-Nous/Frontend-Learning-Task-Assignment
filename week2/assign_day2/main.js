import { addEmployee, employeeList } from './employee.js';

let table = document.getElementById("emp_table");

// Populate table with initial data
employeeList.forEach(emp => addNewEmployee(emp));

function addEmployeeToList(event) {
  event.preventDefault();

  let name = document.getElementById("name").value.trim();
  let role = document.getElementById("role").value.trim();
  let salary = document.getElementById("salary").value.trim();

  if (!name || !role || !salary) {
    alert("Please enter all details");
    return;
  }

  addEmployee({ name, role, salary });
  addNewEmployee({ name, role, salary });

  // Clear the form
  document.getElementById("name").value = "";
  document.getElementById("role").value = "";
  document.getElementById("salary").value = "";
}

function addNewEmployee(employee) {
  let trow = document.createElement("tr");
  trow.innerHTML = `
    <td>${employee.name}</td>
    <td>${employee.role}</td>
    <td>${employee.salary}</td>
  `;
  table.appendChild(trow);
}

// Attach event listener to form
document.querySelector("form").addEventListener("submit", addEmployeeToList);
