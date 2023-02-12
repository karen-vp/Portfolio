import React from 'react'
import profile from './../assets/images/profile.png';

function Header() {
  return (
    <header className='item-header header' >
        <div className="child-header inner">
					<a href="#"><img src={profile} alt=""  className="w-28 h-28 object-cover rounded-full" /></a>
					<h1><strong>Karen Valier</strong>.</h1>
          <span>Full Stack Developer</span>
				</div>
    </header>
  )
}

export default Header