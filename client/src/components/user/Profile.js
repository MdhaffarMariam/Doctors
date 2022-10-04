import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { getprofile } from '../../redux/actions/action'

const Profile = () => {
    const{users, loading , isAuth,token}=useSelector(state=>state.reducer)
    console.log(users)
    console.log(token)
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getprofile())
    }, [])
    console.log(users)
  return (
    <div>
       {!token? (<Redirect to ='/signin'></Redirect> )
        :
       loading? (<h1>loading...</h1>): 
      (<h1>hello {users.fullName}</h1>)
      
  }
  

    </div>
  )
}

export default Profile
