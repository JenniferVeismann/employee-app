import { useFormik } from 'formik';
import { useState } from 'react';
import { DropdownButton } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector } from 'react-redux';
import '../index.css';
import { closeForm } from '../store/actions/employees';




export default function UpdateForm(props) {

  const dispatch = useDispatch();


  const {employees, setEmployee, selectedEmployee, onHide } = props;
  const show=useSelector((state)=>state.users.show)
  //const [show, setShow] = useState(true);
  // console.log('siin');
  
  const formik = useFormik({
    initialValues: {
      employeeName: selectedEmployee.name,
      title: selectedEmployee.title,
      tribe: selectedEmployee.tribe_id,
    },
  });

  const [value, setValue] = useState(selectedEmployee.tribe_id);


  const handleSelect = e => {
    console.log(e);
    setValue(e);
  };


  const handleUpdate = () => {
        
    updated();

    formik.resetForm();
    dispatch(closeForm())
    setValue('');
}
const updated = () => {
  const upDatedEmployee = {
    id: selectedEmployee.id,
    name: formik.values.employeeName,
    title: formik.values.title,
    tribe_id: value,
  };

  const upDatedEmployees = employees.map((employee) => {
    if (employee.id === selectedEmployee.id) {
      // If the employee matches the selectedEmployee, return the updated data
      return {
        ...employee,
        name: upDatedEmployee.name,
        title: upDatedEmployee.title,
        tribe_id: upDatedEmployee.tribe_id,
      };
    }
    // Otherwise, return the employee as-is
    return employee;
  });
  setEmployee(upDatedEmployees);
}


  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
              <Modal.Title>Update Employee</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={handleUpdate} className="formstyle">
                <Form.Group className="form-container" controlId="formEmployee">
                  <Form.Label>Employee Name</Form.Label>
                  <input
                    id="employeeName"
                    type="text"
                    {...formik.getFieldProps('employeeName')}
                  />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>

                <Form.Group className="form-container" controlId="formEmployee">
                  <Form.Label>position</Form.Label>
                  <input
                    id="title"
                    type="text"
                    {...formik.getFieldProps('title')}
                  />
                </Form.Group>
                <Form.Group className="tribe" controlId="formEmployee">
                  <Form.Label>Tribe</Form.Label>
                  <DropdownButton
                    onSelect={handleSelect}
                    title={value}
                  >
                    <Dropdown.Item eventKey="1">Internstellar</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Billing</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Gears</Dropdown.Item>
                    <Dropdown.Item eventKey="4">Data</Dropdown.Item>
                    <Dropdown.Divider />
                  </DropdownButton>
                </Form.Group>
                <p />
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button
                id="button"
                variant="success"
                type="button"
                onClick={() => handleUpdate()}
              >
                Submit
              </Button>
            </Modal.Footer>
          </Modal>
        </Col>
      </Row>
    </Container>
  );
}