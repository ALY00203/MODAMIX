// import React, { useState } from 'react'
import React from "react"
import ved1 from "../vedios-images/23418582.mp4"
import Productslist from '../Components/Productslist'
import MessageDelay from '../Components/MessageDelay'
function Home() {
  return (
<>
<div className row data-bs-theme="dark">
    <div className='col-12 video-container'>
      <video autoPlay muted loop  className="d-block w-100"src={ved1} />
    </div>
</div>
        {/* <FilterForm /> */}
        <Productslist />
        <MessageDelay />
</>



      
  )
}

export default Home