import { useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import '../index.css';
import { fetchData, handleDelete, handleUpdateClick, showFormEmployee } from '../store/actions/employees';
import EmployeeForm from './EmployeeForm';
import UpdateForm from './UpdateForm';

function EmployeesTable(){

  const dispatch = useDispatch();

  const employees=useSelector((state)=> state.users.list);
  const showForm=useSelector((state)=>state.users.show)
  const selectedEmployee=useSelector((state)=>state.users.select)



  
  const refresh=useSelector((state)=>state.users.refresh)


  useEffect(() => {
      dispatch(fetchData());
  }, [dispatch]);

 const listEmployees = employees ? employees.map((employee) => (
  <tr key={employee.id}>
    <th scope="row">{employee.name}</th>
    <td>{employee.title}</td>
    <td>{employee.tribe.name}</td>
    <td><button type="button" className="delete"  onClick={() => {
                    dispatch( handleDelete(employee.id));
                  }
                }>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                      viewBox="0 0 24 24">
                      <path fill="currentColor"
                        d="M7 21q-.825 0-1.413-.588T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.588 1.413T17 21H7ZM17 6H7v13h10V6ZM9 17h2V8H9v9Zm4 0h2V8h-2v9ZM7 6v13V6Z" />
                    </svg></button></td>

    <td><button type="button" className="update" variant="success" onClick={
                  () =>dispatch(showFormEmployee(),handleUpdateClick(employee))
                  }>
                  Update
                  </button>
                  </td>
    </tr>)):null;

    return(
      <Container>
    
      <Row className="justify-content-md-center">
        <Col md={10}>
        <p></p>
          <h1>Employees</h1>
          {showForm && (
            <UpdateForm
              selectedEmployee={selectedEmployee}
              employees={employees}
              setEmployee={dispatch(employees)}
              onHide={() => {
                dispatch(showFormEmployee());
              }}
            />
          )}
          <Table striped bordered hov="true">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Position</th>
                  <th scope="col">Tribe</th>
                  <th scope="col"> </th>
                  <th scope="col"> </th>
                </tr>
              </thead>
              <tbody>
              {listEmployees}
              </tbody>
            </Table>
        </Col>
    </Row>
    <EmployeeForm ></EmployeeForm>
</Container>
    )
}

export default EmployeesTable;