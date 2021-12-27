document.addEventListener('DOMContentLoaded', () => {

//Fetch Student Roster from API
document.addEventListener('DOMContentLoaded', getStudents())
function getStudents() {
    fetch('http://localhost:3000/students')
    .then(res => res.json())
    .then(students => appendStudents(students))
}

function appendStudents(students) {
    let studentHolder = document.querySelector('#nameblock');
    let studentList = document.createElement('ol');
    studentList.type = '1';
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



})