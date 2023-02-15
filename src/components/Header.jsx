import React from 'react'
import profile from './../assets/images/profile.png';
import Icons from './Icons';

function Header() {
  return (
    <header className='item-header' >
      <div className="child-header">
        <a href="#"><img src={profile} alt="profile picture" className="profile" /></a>
        <h1>Karen Valier.</h1>
        <span>Full Stack Developer</span>
      </div>
      <Icons/>
    </header>
  )
}

export default Header