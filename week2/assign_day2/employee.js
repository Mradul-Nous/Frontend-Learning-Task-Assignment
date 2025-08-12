
let curId=4;
let employeeList = [
  { id: 1, name: "John Doe", role: "Developer", salary: 50000 },
  { id: 2, name: "Jane Smith", role: "Designer", salary: 45000 },
  { id: 3, name: "Mike Johnson", role: "Manager", salary: 70000 }
];

// Function to add new employee
function addEmployee({ name, role, salary }) {
  const newEmp = { id: curId++, name, role, salary };
  employeeList.push(newEmp);
}


export {addEmployee,employeeList}