import React from 'react'
import { Button, Card } from 'react-bootstrap'

const PediatreCard = ({pediatre}) => {
  return (
    <div>
       <div>
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?w=2000" />
      <Card.Body>
        <Card.Title>{pediatre.fullName}</Card.Title>
        <Card.Text>
          {pediatre.diplome}
        </Card.Text>
        <Card.Text>
          {pediatre.adress}
        </Card.Text>
        <Button variant="primary" href='/calender'>Take an appoitment</Button>
      </Card.Body>
    </Card>
    </div>
    </div>
  )
}

export default PediatreCard
