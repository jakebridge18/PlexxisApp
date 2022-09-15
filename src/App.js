import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import React from 'react';
import AddEmployee from './components/AddEmployee';
import EmployeeList from './components/EmployeeList';


/* 
On start up:
  - open command prompt
  - go to file location of employees.json (cd C:\Users\ja-co\plexxis-app\server\data) for example
  - run the following commands: 
      npm install -g json-server
      json-server --watch employees.json --port 8080

  - in editor window open a new terminal and run:
    npm start
*/


class App extends React.Component {
  state = {
    employees: []
  }
  
  
  componentWillMount = () => {
    fetch('http://localhost:8080/employees')
      .then(response => response.json())
      .catch(error => console.error('Error:', error))
      .then(employees => this.setState({ employees }))
      console.log(this.employees);
  }

  
  render() {
    const {
      employees
    } = this.state;

    console.log(this.state);

    return (
      <div className="App">
        <h1>Plexxis Employees</h1>
        <div class="float-container">

          {/* 
            Container to seperate the add employee form
              contains:
              - Container title
              - AddEmployee: component used for the add employee form. Can be found at ./components/AddEmployee
          */}
          <div class="float-child">
            <AddEmployee numOfEmployees = {employees.length} />
          </div>

          {/* 
            Container to seperate employee list
              contains:
              - Container title
              - EmployeeList: component used to display a list of the current employess. Can be found at ./components/EmployeeList
          */}
          <div class="float-child">
            <EmployeeList givenEmployees = {employees} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;