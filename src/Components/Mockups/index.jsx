/* eslint-disable no-unused-vars */
import React from 'react'
import './styles.css'
import mockup1 from '../../assets/mockup-1.png'
import mockup2 from '../../assets/mockup-2.png'

function Mockups() {
  return (
    <div className="Mockups-1">

    <img src={mockup1} alt="Celular-1" />
    <p className="Mockups-2">
      <img src={mockup2} alt="Celular-2" />
    </p>
    
   </div>
  )




  
}

export default Mockups