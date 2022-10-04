import React , {useState} from 'react'
import {Form,Button} from 'react-bootstrap'
import {useDispatch, useSelector, } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { loginDoctor } from '../../redux/actions/actionDoctor'
import './SignInDoctor.css'
const SignInDoctor = () => {
  const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const{loading2}=useSelector(state=>state.doctoreducer)
    const dispatch = useDispatch()
    const handleSubmit=(e)=>{
      e.preventDefault();
      const newDoctor={
        email,
        password
      }
      dispatch(loginDoctor(newDoctor))}
  return (
    <div className='signindoc'>
      <Form className='formsignin'>
        {loading2? <h1>loading...</h1>:
        localStorage.getItem('token') ? <Redirect to = '/Profiledoctor'></Redirect> 
        :
        <>
        <h4>Welcome to Doctors!</h4>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange= {(e)=>setEmail(e.target.value)}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange= {(e)=>setPassword(e.target.value)}/>
      </Form.Group>
      <Button variant="warning" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
      </>
      }
    
      </Form>
      <div className='divsignup'>
      <h4> Dont have an account ?</h4>
      <Button href='signupdoctor'>Sign Up</Button>
      </div>
    </div>
  )
}

export default SignInDoctor