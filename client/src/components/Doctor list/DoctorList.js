import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getalldoctors } from '../../redux/actions/actionDoctor'
import DoctorCard from './DoctorCard'

const DoctorList = () => {
    const{FIXIT , loading2}=useSelector(state=>state.doctoreducer)
    const dispatch = useDispatch()
    const [inputText, setInputText] = useState('')
    console.log(FIXIT)
    console.log(loading2)
    useEffect(() => {
     dispatch(getalldoctors())
    }, [])
    
  return (
    
    <div >
      <div className='search'>
        <h3> Choose your doctor !</h3>
        <input type="text" value = {inputText} onChange={(e)=>setInputText(e.target.value)}/>
        <button>Search</button>
      </div>
      <div style ={{display:'flex' , flexWrap : 'wrap' , margin : '5%', justifyContent : 'space-between'}}>
      {loading2? (<h3>loading...</h3>) :
      (FIXIT &&
      React.Children.toArray(FIXIT.filter(el=>el.fullName.toLowerCase().includes(inputText.toLowerCase()))
    .map(el=><DoctorCard doctor = {el}/>))) }
    </div>
    </div>
  )
}

export default DoctorList
