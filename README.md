# Plexxis Interview Coding Exercise

This CRUD application can perform the following tasks:
  - Retrieve employees from a REST API
  - Display the employees in a React application
  - Create and delete employees

## Libraries Used
Axios
  - Axios is a library that serves to create HTTP requests that are present externally
  - The axios functions are found in api.js

React-Bootstrap
  - React Bootstrap is a library of components that have been built from scratch as a true React component

## Where my effort was focused
I created two custom components to complete this assignment: AddEmployee and EmployeeList.

### AddEmployee
AddEmployee was made using Forms from react-bootstrap. It provides a fillable form for the user to enter information about the employee they want to add. 
Assumptions made:

    - A new employees id number is always 1 greater than the current largest id number.
    e.g. Vince Carter is the last employee added and has an id number of 7. Therefore the next employee added will have an id number of 8. 

    - A new employees code is always F10X where X = id number + 99.
    e.g. Vince Carter's id number is 7. To find his code we perform F10(7 + 99) = F106.

    - The only branches available are the ones provided. If there are more they can be added as options.
    
This compnent has 2 functions:
  1. onValueChange
    - updates employee information to the value of the changed form.

  2. addEmployeeData"
    - uses Axios function to add the new employee to the JSON file

### EmployeeList
EmployeeList was made with a Table component from react-bootstrap. It shows a list of the current employees in the JSON file.

This component has 1 function:
  1. deleteEmployeeData
    - uses Axios function to delete an employee from the Table and JSON file. Once completed it will reload the page.
