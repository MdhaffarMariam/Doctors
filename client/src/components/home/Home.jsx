import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
    const {FIXIT} = useSelector (state => state.doctoreducer)
    const [name, setName] = useState('')
    const [local, setLocal] = useState('')
  return (
    <div>
      {/* <h1> Take an appoitment online ! </h1>
      <input/>
      <input/>
      <button> Search</button> */}
    </div>
  )
}

export default Home
