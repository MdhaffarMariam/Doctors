import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const DentistCard = ({dentist}) => (
  <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?w=2000" />
      <Card.Body>
        <Card.Title>{dentist.fullName}</Card.Title>
        <Card.Text>
          {dentist.diplome}
        </Card.Text>
        <Card.Text>
          {dentist.adress}
        </Card.Text>
        <Button variant="primary" href='/calender'>Take an appoitment</Button>
      </Card.Body>
    </Card>
  </div>
)

export default DentistCard