document.addEventListener('DOMContentLoaded', () => {

const studentHolder = document.querySelector('#student_container');

function getStudents() {
    fetch('https://demo-json.onrender.com//students')
    .then(res => res.json())
    .then(students => students.forEach(appendStudent))
}
getStudents();

function appendStudent(student) {
        const card = document.createElement('div');
        card.setAttribute('class', 'card');
        const name = document.createElement('h2');
        name.textContent = `${student.last}` + ', ' + `${student.first}`;
        const img = document.createElement('img');
        img.setAttribute('class', 'student_image');
        img.setAttribute('src', student.image)
        const grade = document.createElement('p');
        grade.textContent = `${student.grade}th grade`;
        const deleteBtn = document.createElement('button');
        deleteBtn.setAttribute('class', 'remove');
        deleteBtn.textContent = 'Remove';
        deleteBtn.addEventListener('click', (e) => e.target.parentNode.remove())
        deleteBtn.addEventListener('click', function() {
            fetch(`https://demo-json.onrender.com//students/${student.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        })
        card.appendChild(name);
        card.appendChild(img);
        card.appendChild(grade);
        card.appendChild(deleteBtn);
        studentHolder.appendChild(card);
    }

const form = document.querySelector('#form');
form.addEventListener('submit', addNewStudent);
function addNewStudent(event) {
    event.preventDefault();
    const studentObj = {
        first: document.querySelector('#firstname').value,
        last: document.querySelector('#lastname').value,
        grade: document.querySelector('#grade').value,
        image: document.querySelector('#image').value
    };
    appendStudent(studentObj);
    fetch('https://demo-json.onrender.com//students', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(studentObj)
    })
    form.reset();
}
})