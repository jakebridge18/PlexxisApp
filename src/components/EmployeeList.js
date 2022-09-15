import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import {deleteUser} from "../service/api";


export default function EmployeeList ({givenEmployees}){


    /* 
    deleteUser function from api.js
    reloads page after deletion
    */
    const deleteEmployeeData = async (empToDelete) => {
        await deleteUser(empToDelete)
        window.location.reload(false);
    }


    return(

        <>
          <h2>Employee List</h2>
          <Table striped bordered hover>

          {/*
          thead - Groups the header content in a table
          th - Defines a header cell in a table
          tr - Defines a row in a table
          td - Defines a cell in a table
          */}
          <thead>
            <tr>
              <th>id #</th>
              <th>Name</th>
              <th>Code</th>
              <th>Profession</th>
              <th>Color</th>
              <th>City</th>
              <th>Branch</th>
              <th>Assigned</th>
              {/* <th>Edit</th> */}
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>

            {givenEmployees.map(employee => (

              <tr>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.code}</td>
                <td>{employee.profession}</td>
                <td>{employee.color}</td>
                <td>{employee.city}</td>
                <td>{employee.branch}</td>
                <td>{employee.assigned.toString()}</td>
                {/* <td><Button variant="primary">Edit</Button></td> */}
                <td><Button variant="danger" 
                    onClick={() => {
                      if(window.confirm('Are you sure you want to delete ' + employee.name + " from the list?"))
                      deleteEmployeeData(employee.id)
                    }}>Delete</Button></td>
              </tr>
            )
            )}
          </tbody>
        </Table>
      </>
    )
}