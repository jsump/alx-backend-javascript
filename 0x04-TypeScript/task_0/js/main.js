var JSDOM = require('jsdom').JSDOM;
var student1 = {
    firstName: "Tom",
    lastName: "Cat",
    age: 15,
    location: "Jersey"
};
var student2 = {
    firstName: "Jerry",
    lastName: "Mouse",
    age: 14,
    location: "Springfield"
};
var studentsList = [student1, student2];
var renderTable = function (students) {
    var document = new JSDOM().window.document;
    var table = document.createElement('table');
    var header = table.createTHead();
    var headerRow = header.insertRow(0);
    var headerCell1 = headerRow.insertCell(0);
    var headerCell2 = headerRow.insertCell(1);
    headerCell1.textContent = 'First Name';
    headerCell2.textContent = 'Location';
    var body = table.createTBody();
    students.forEach(function (student) {
        var row = body.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.textContent = student.firstName;
        cell2.textContent = student.location;
    });
    document.body.appendChild(table);
};
renderTable(studentsList);
