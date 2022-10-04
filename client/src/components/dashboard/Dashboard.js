import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/actions/action';
import { logoutdoctor } from '../../redux/actions/actionDoctor'
import './Dashboard.css'

const Dashboard = () => {
   const {users}= useSelector(state=>state.reducer)
   const {doctors} = useSelector(state => state.doctoreducer)
  
   console.log(users)
  
   const dispatch = useDispatch()
  return (
    <div>
       <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">Doctors</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <div className='dropdown'>
            <Nav.Link href="/doctors" className='dropbtn'>Doctors</Nav.Link>
            <div className='dropdown-content'>
            <a href="/Dentist">Dentists</a>
            <a href="/genyco">Génycologue</a>
            <a href="/pediatre">Pediatre </a>
            </div>
            </div>
            <Nav.Link href="#pricing">Rating</Nav.Link>

            {
                users ?
                <div className='allnavs'>
                <div className='signUp'>
                <Nav.Link href ="/Profile"> {users.fullName}</Nav.Link>
                </div>
                <div className='logout'>
                    <Nav.Link onClick={() =>{dispatch(logout())}}>Logout</Nav.Link>
                </div>
                </div> :
                doctors?
                <div className='allnavs'>
                <div className='signUp'>
                <Nav.Link href ="/Profile"> {doctors.fullName}</Nav.Link>
                </div>
                <div className='logout'>
                    <Nav.Link onClick={() =>{dispatch(logoutdoctor())}}>Logout</Nav.Link>
                </div>
              </div>:
                <div className='login'>
                    <Nav.Link  className ="doc"href="/signindoctor"> Are you a medical proffessional?</Nav.Link>
                    <Nav.Link href="/signin"> Login</Nav.Link>
                  
                </div>
            }
          </Nav>
        </Container>
      </Navbar>
     
    </>
    

    </div>
  )
}

export default Dashboard
