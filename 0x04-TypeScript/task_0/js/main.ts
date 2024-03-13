const { JSDOM } = require('jsdom');

interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
 }

const student1: Student = {
  firstName: "Tom",
  lastName: "Cat",
  age: 15,
  location: "Jersey"
};

const student2: Student = {
  firstName: "Jerry",
  lastName: "Mouse",
  age: 14,
  location: "Springfield"
};

const studentsList: Student[] = [student1, student2];

const renderTable = (students: Student[]) => {
  const { document } = new JSDOM().window;
  const table = document.createElement('table');
  const header = table.createTHead();
  const headerRow = header.insertRow(0);
  const headerCell1 = headerRow.insertCell(0);
  const headerCell2 = headerRow.insertCell(1);
  headerCell1.textContent = 'First Name';
  headerCell2.textContent = 'Location';

  const body = table.createTBody();
  students.forEach(student => {
    const row = body.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
  });

  document.body.appendChild(table);
};

renderTable(studentsList);
