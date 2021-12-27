document.addEventListener('DOMContentLoaded', () => {

//Fetch Student Roster from API
document.addEventListener('DOMContentLoaded', getStudents())
function getStudents() {
    fetch('http://localhost:3000/students')
    .then(res => res.json())
    .then(students => appendStudents(students))
}

function appendStudents(students) {
    for (let student of students) {
        let studentObj = {
            id: student.id,
            name: student.first + ' ' + student.last,
            grade: student.grade
        }
        let studentLine = document.createElement('li');
        studentLine.textContent = studentObj.name + ` ${studentObj.grade}th`;
        let studentHolder = document.querySelector('#nameblock');
        studentHolder.appendChild(studentLine);
    }
}



})