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
        let studentObj = {
            id: student.id,
            name: student.first + ' ' + student.last,
            grade: student.grade
        }
        let studentLine = document.createElement('li');
        studentLine.textContent = studentObj.name + ` ${studentObj.grade}th`;
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