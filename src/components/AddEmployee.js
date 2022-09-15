import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {addUser} from "../service/api";
import {useState} from "react";

/* 
This component renders the "Add new employee" container
    - Displays the input fields for new employee data

Assumptions made:
    - A new employees id number is always 1 greater than the current largest id number.
    e.g. Vince Carter is the last employee added and has an id number of 7. Therefore the next employee added will have an id number of 8. 

    - A new employees code is always F10X where X = id number + 99.
    e.g. Vince Carter's id number is 7. To find his code we perform F10(7 + 99) = F106.

    - The only branches available are the ones provided. If there are more they can be added as options.
*/


const initialValue = {
    id: "",
    name: "",
    code: "",
    profession: "",
    color: "",
    city: "",
    branch: "Branch not given",
    assigned: false
}


export default function AddEmployee ({numOfEmployees}){

    
    const [employee, setEmployee] = useState(initialValue);
    const {id, name, code, profession, color, city, branch, assigned} = employee;
    numOfEmployees += 1;
    employee.id = numOfEmployees;
    employee.code = "F" + (numOfEmployees + 99);


    const onValueChange=(e)=>{
        setEmployee({...employee,[e.target.name]: e.target.value})
    }


    const addEmployeeData = async ()=>{
        numOfEmployees += 1;

        if(employee.assigned === "True"){
            employee.assigned = true;
        } else if (employee.assigned === "False"){
            employee.assigned = false;
        }

        await addUser(employee)
        console.log(employee)
    }

    return(

        
        <Form>
            <h2>Add New Employee</h2>

            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" placeholder="Enter employees name" onChange={(e)=>onValueChange(e)} name={"name"} value={name} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicProfession">
                <Form.Label>Profession</Form.Label>
                <Form.Control type="profession" placeholder="Enter employees profession" onChange={(e)=>onValueChange(e)} name={"profession"} value={profession}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicColor">
                <Form.Label>Color</Form.Label>
                <Form.Control type="employee_color" placeholder="Enter employees color" onChange={(e)=>onValueChange(e)} name={"color"} value={color}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCity">
                <Form.Label>City</Form.Label>
                <Form.Control type="city" placeholder="Enter employees city" onChange={(e)=>onValueChange(e)} name={"city"} value={city}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicSelectBranch">
                <Form.Label>Branch</Form.Label>
                <Form.Select aria-label="selcetAssigned" onChange= {(e) => onValueChange(e)} name ={"branch"} value = {branch} >
                    <option value = "">Select Branch</option>
                    <option value = "Abacus">Abacus</option>
                    <option value = "Pillsworth">Pillsworth</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicSelectAssigned">
                <Form.Label>Assigned</Form.Label>
                <Form.Select aria-label="selcetAssigned" onChange= {(e) => onValueChange(e)} name ={"assigned"} value = {assigned} >
                    <option value = "">Select if employee is assigned</option>
                    <option value = "True">True</option>
                    <option value = "False">False</option>
                </Form.Select>
            </Form.Group>

            <Button variant="primary" type="submit" onClick={()=>addEmployeeData()}>Submit</Button>

        </Form>
    )
}