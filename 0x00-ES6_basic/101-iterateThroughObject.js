/* eslint-disable */
export default function iterateThroughObject(reportWithIterator) {
  let employeeNameInString = "",
    i = 0;
  for (const singleEmployee of reportWithIterator) {
    if (reportWithIterator.length - 1 == i) {
      employeeNameInString += singleEmployee;
    } else {
      employeeNameInString += singleEmployee + " | ";
    }
    i++;
  }
  return employeeNameInString;
}
