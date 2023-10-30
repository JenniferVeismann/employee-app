import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import TribesData from './TribesData';

function TribesTable(){
  const [tribes, setTribe] = useState(
    TribesData);

  const listTribes = tribes.map((tribe) =>( 
  <tr key={tribe.id}>
    <th scope = "row">{tribe.name}</th>
    <td>{tribe.department}</td>
    </tr>));


    return(
<Container>
    <Row className="justify-content-md-center">
        <Col md={10}>
        <p></p>
          <h1>Tribes</h1>
          <Table striped bordered hov>
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Department</th>
                </tr>
              </thead>
              <tbody>
              {listTribes}
              </tbody>
            </Table>
            </Col>
            </Row>
            <p>
            </p>

</Container>
    );
}
export default TribesTable;