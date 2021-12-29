# Basic Attendance Taker
An app to allow classroom teachers to take attendance

## Description
This app automatically loads a class' current roster of students from an API, including first name, last name, and grade level.  Teachers can add a new student to the roster using a form at the bottom of the page.  Students can also be removed using a "remove" button next to student information.

## Stretch Goals
It is my hope that this app will also use a drop down menu to record each student's attendance status (present, tardy, or absent) and update this information in the API, using a JSON server.  I also hope to use the JSON server to make additions and deletions of students to the roster persist.

## Installation
In order for this app to function correctly, JSON server must be installed.  Directions for installation can be found [here](https://www.npmjs.com/package/json-server).  Once JSON server is installed, type the command 
```
json-server --watch db.json 
```
into your terminal to activate the server.