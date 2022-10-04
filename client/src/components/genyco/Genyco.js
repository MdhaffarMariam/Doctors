import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  get_genyco } from '../../redux/actions/actionDoctor'
import GenycoCard from './GenycoCard'

const Genyco = () => {
    const{FIXIT , loading2}=useSelector(state=>state.doctoreducer)
    const dispatch = useDispatch()
    const [text, setText] = useState('')
    console.log(FIXIT)
    console.log(loading2)
    useEffect(() => {
     dispatch(get_genyco())
    }, [])
    
  return (
    
    <div >
      <div className='search'>
        <h3> Choose your doctor !</h3>
        <input type="text" value = {text} onChange={(e)=>setText(e.target.value)}/>
      </div>
      <div style ={{display:'flex' , flexWrap : 'wrap' , margin : '5%', justifyContent : 'space-between'}}>
      {loading2? (<h3>loading...</h3>) :
      (FIXIT &&
      React.Children.toArray(FIXIT.filter(el=>el.fullName.toLowerCase().includes(text.toLowerCase()))
    .map(el=><GenycoCard genyco = {el}/>))) }
    </div>
    </div>
  )
}

export default Genyco