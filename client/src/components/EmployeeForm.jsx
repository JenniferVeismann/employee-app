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
import instance from '../index.js';
import { closeForm, fetchData, showFormEmployee } from '../store/actions/employees';





function EmployeeForm() {

  const dispatch = useDispatch();
  const showForm=useSelector((state)=>state.users.showAddEmployeeForm)

  const formik = useFormik({
    initialValues: {
      employeeName: '',
      position: '',
      tribe: '',
    },
  });

  const [value, setValue] = useState('');


  const handleAddEmployee = async (newEmployee) => {
    try {
			 const response = await instance.post('/employees', newEmployee);
       dispatch(fetchData());
    } catch (error) {
      console.log(error);
    };
  };


  const handleSelect = e => {
    setValue(e);
  };

  const handleSubmit = () => {
    const newEmployee = {
      name: formik.values.employeeName,
      title: formik.values.position,
      tribe_id: value,
    };

    handleAddEmployee(newEmployee);
    

    formik.resetForm();
    dispatch(closeForm())
    setValue('');
  };
  

  return (
    <Container>
      <Row>
        <Col md={{ span: 3, offset: 8 }}>
        <Button variant="success" type="button" onClick={() =>{console.log("buttonclick");  dispatch(showFormEmployee())}}>
        + Employee
      </Button>
          <p></p>
        </Col>
        <Col md={{ span: 6, offset: 3 }}>
          <Modal show={showForm} onHide={() => dispatch(closeForm())}>
            <Modal.Header closeButton>
              <Modal.Title>Add Employee</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={handleSubmit} className="formstyle">
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
                    id="position"
                    type="text"
                    {...formik.getFieldProps('position')}
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
                onClick={() => handleSubmit()}
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


  export default EmployeeForm;