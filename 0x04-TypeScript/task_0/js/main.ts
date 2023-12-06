interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1 = {
  firstName: "Herman",
  lastName: "Skray",
  age: 23,
  location: "Koftown"
};
const student2 = {
  firstName: "KD",
  lastName: "Jason",
  age: 23,
  location: "Accra"
};
let studentsList = [student1, student2];

/*Create a table*/
const table = document.createElement("table");

/*Create a header row*/ 

const headerRow = document.createElement("tr");
const header1 = document.createElement("th");
header1.textContent = "First Name";
const header2 = document.createElement("th");
header2.textContent = "Last Name";
const header3 = document.createElement("th");
header3.textContent = "Age";
const header4 = document.createElement("th");
header3.textContent = "Location";
headerRow.appendChild(header1);
headerRow.appendChild(header2);
headerRow.appendChild(header3);
headerRow.appendChild(header4);
table.appendChild(headerRow);


/*Add a row for each student*/ 
studentsList.forEach((student) => {
  const row = document.createElement("tr");
  const cell1 = document.createElement("td");
  const cell2 = document.createElement("td");
  const cell3 = document.createElement("td");
  const cell4 = document.createElement("td");
  cell1.textContent = student.firstName;
  cell2.textContent = student.lastName;
  cell3.textContent = student.age.toString();
  cell4.textContent = student.location;
  row.appendChild(cell1);
  row.appendChild(cell2);
  row.appendChild(cell3);
  row.appendChild(cell4);
  table.appendChild(row);
});

/*Append the table to the body*/ 
document.body.appendChild(table);
