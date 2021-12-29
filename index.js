document.addEventListener('DOMContentLoaded', () => {

const studentHolder = document.querySelector('#nameblock');
const studentList = document.createElement('ol');



function getStudents() {
    fetch('http://localhost:3000/students')
    .then(res => res.json())
    .then(students => students.forEach(appendStudent))
}
getStudents();


function appendStudent(student) {
        const studentLine = document.createElement('li');
        studentLine.textContent = student.last + ', ' + student.first + ` (${student.grade}th)`;
        studentLine.style.marginBottom = '5px';
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Remove';
        deleteBtn.style.marginLeft = '5px';
        deleteBtn.addEventListener('click', (e) => e.target.parentNode.remove())
        studentLine.appendChild(deleteBtn);
        studentList.appendChild(studentLine);
    }
    studentHolder.appendChild(studentList);



const form = document.querySelector('#form');
form.addEventListener('submit', addNewStudent);
function addNewStudent(event) {
    event.preventDefault();
    const studentObj = {
        first: document.querySelector('#firstname').value,
        last: document.querySelector('#lastname').value,
        grade: document.querySelector('#grade').value
    };
    appendStudent(studentObj);
    form.reset();
}

})