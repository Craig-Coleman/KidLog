# Basic Classroom Roster
An app to allow classroom teachers to alter their student roster.

## Description
This app automatically loads a class' current roster of students from an API, including first name, last name, and grade level.  Teachers can add a new student to the roster using a form at the bottom of the page.  Students can also be removed using a "remove" button next to student information.

## Stretch Goals
It is my hope to use the JSON server to make additions and deletions of students to the roster persist.

## Installation
In order for this app to function correctly, JSON server must be installed.  Directions for installation can be found [here](https://www.npmjs.com/package/json-server).  Once JSON server is installed, type the command 
```
json-server --watch db.json 
```
into your terminal to activate the server.
  
## Acknowldegements
Images used for initial student cards were taken from [this](https://www.gettyimages.com/photos/yearbook-photo?assettype=image&sort=mostpopular&phrase=yearbook%20photo&license=rf%2Crm) webpage.
  
The CSS information was borrowed from the FlatIron "Toy-Tale" lab and altered.