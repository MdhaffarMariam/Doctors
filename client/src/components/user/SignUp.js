import React, { useState } from 'react'
import {Form,Button} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import { Redirect } from 'react-router-dom'
import { registerUser } from '../../redux/actions/action'
import './SignUp.css'

const SignUp = () => {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [dateofbirth, setDateofbirth] = useState('')
    const [adress, setAdress] = useState('')
    const [phone, setPhone] = useState('')
    const{loading,users}=useSelector(state=>state.reducer)
    const dispatch = useDispatch()
    const handleSubmit=(e)=>{
      e.preventDefault();
      const newUser={
        fullName,
        email,
        password,
        dateofbirth,
        adress,
        phone
      }
      dispatch(registerUser(newUser))
    }
  return (
    <div className='signuser'>
       <Form className='signusers'>
      {loading? <h1>loading...</h1> :
      users? <Redirect to = '/signin'></Redirect>
      :
      <>
      <h4>Welcome to Doctors!</h4>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        {/* <Form.Label>Fullname</Form.Label> */}
        <Form.Control type="text" placeholder="Fullname" value={fullName} onChange= {(e)=>setFullName(e.target.value)}/>
    
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        {/* <Form.Label>Email address</Form.Label> */}
        <Form.Control type="email" placeholder="Email" value={email} onChange= {(e)=>setEmail(e.target.value)}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        {/* <Form.Label>Password</Form.Label> */}
        <Form.Control type="password" placeholder="Password" value={password} onChange= {(e)=>setPassword(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        {/* <Form.Label>Date of birth</Form.Label> */}
        <Form.Control type="date" placeholder="dateofbirth" value={dateofbirth} onChange= {(e)=>setDateofbirth(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        {/* <Form.Label>Adress</Form.Label> */}
        <Form.Control type="text" placeholder="Adress" value={adress} onChange= {(e)=>setAdress(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        {/* <Form.Label>Phone</Form.Label> */}
        <Form.Control type="text" placeholder="Phone number" value={phone} onChange= {(e)=>setPhone(e.target.value)}/>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
      </>
    }
    </Form>
 
    </div>
  )
}

export default SignUp
