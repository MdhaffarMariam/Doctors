import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  get_dentist } from '../../redux/actions/actionDoctor'
import DentistCard from './DentistCard'

const Dentist = () => {
    const{dentists , loading2}=useSelector(state=>state.doctoreducer)
    console.log("rzqr",dentists)
    const dispatch = useDispatch()
    const [text, setText] = useState('')
    console.log(loading2)
    useEffect(() => {
     dispatch(get_dentist())
    }, [])
    console.log(get_dentist())
    
  return (
    
    <div >
      <div className='search'>
        <h3> Choose your doctor !</h3>
        <input type="text" value = {text} onChange={(e)=>setText(e.target.value)}/>
      </div>
      <div style ={{display:'flex' , flexWrap : 'wrap' , margin : '5%', justifyContent : 'space-between'}}>
      {loading2? (<h3>loading...</h3>) :
      (dentists &&
      React.Children.toArray(dentists.filter(el=>el.fullName.toLowerCase().includes(text.toLowerCase()))
    .map(el=><DentistCard dentist = {el}/>))) }
    </div>
    </div>
  )
}

export default Dentist