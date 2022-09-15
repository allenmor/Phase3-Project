import React from 'react'
import FightsCard from './FightsCard'
import { useState } from 'react'
import './Fights.css'

function Fights({fights, setClicked}) {
  // const [ufcNum, setUfcNum] = useState(200)
    console.log(fights)
  return (
    <div>
       {fights.map((el, i) => {
           return <FightsCard setClicked={setClicked} key={i} fight={el} />
       })}
    </div>
  )
}

export default Fights
