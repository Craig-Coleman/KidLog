document.addEventListener('DOMContentLoaded', () => {

let studentHolder = document.querySelector('#nameblock');
let studentList = document.createElement('ol');
studentList.type = '1';


//Fetch Student Roster from API
document.addEventListener('DOMContentLoaded', getStudents())
function getStudents() {
    fetch('http://localhost:3000/students')
    .then(res => res.json())
    .then(students => appendStudents(students))
}


//Append Students to List in DOM
function appendStudents(students) {
    for (let student of students) {
        let studentLine = document.createElement('li');
        studentLine.textContent = student.last + ', ' + student.first + ` (${student.grade}th)`;
        studentLine.style.marginBottom = '5px';
        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Remove';
        deleteBtn.style.marginLeft = '5px';
        deleteBtn.addEventListener('click', (e) => e.target.parentNode.remove())
        studentLine.appendChild(deleteBtn);
        studentList.appendChild(studentLine);
    }
    studentHolder.appendChild(studentList);
}


//Give Functionality to Add Student Form
let form = document.querySelector('#form');
form.addEventListener('submit', addNewStudent);
function addNewStudent(event) {
    event.preventDefault();
    let studentObj = [{
        first: document.querySelector('#firstname').value,
        last: document.querySelector('#lastname').value,
        grade: document.querySelector('#grade').value
    }]
    appendStudents(studentObj);
}



})