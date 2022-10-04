import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const DoctorCard = ({doctor}) => (
  <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?w=2000" />
      <Card.Body>
        <Card.Title>{doctor.fullName}</Card.Title>
        <Card.Text>
          {doctor.diplome}
        </Card.Text>
        <Card.Text>
          {doctor.adress}
        </Card.Text>
        <Button variant="primary" href='/calender'>Take an appoitment</Button>
      </Card.Body>
    </Card>
  </div>
)

export default DoctorCard
