export default function createIteratorObject(report) {
  let employees = [];
  for (let department in report.allEmployees) {
    employees = [...employees, ...report.allEmployees[department]];
  }
  return employeesSymbol.iterator;
}
