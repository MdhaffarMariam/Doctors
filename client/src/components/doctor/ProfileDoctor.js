import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { getprofileDoctor } from '../../redux/actions/actionDoctor'

const ProfileDoctor = () => {
    const{doctors, loading2 , isAuth}=useSelector(state=>state.doctoreducer)
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getprofileDoctor())
    }, [])
    console.log(doctors)
  return (
    <div>
       {!isAuth? (<Redirect to ='/signindoctor'></Redirect> )
        :
       loading2? (<h1>loading...</h1>):
      (<h1>hello {doctors.fullName}</h1>)
      
  }

    </div>
  )
}

export default ProfileDoctor
