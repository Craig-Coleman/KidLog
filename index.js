document.addEventListener('DOMContentLoaded', () => {

//Fetch Student Roster from API
function getStudents() {
    fetch('http://localhost:3000/students')
    .then(res => res.json())
    .then(students => console.log(students))
}
getStudents()




})