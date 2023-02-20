import React from 'react'
import Info from './Info'
import Portfolio from './Portfolio'
import Skills from './Skills'

function Home() {
  return (
    <div className='item-main'>
		  <Info/>
      <hr/>
      <Skills/>
      <hr/>
		  <Portfolio/>
    </div>
  )
}

export default Home