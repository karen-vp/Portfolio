import React from 'react'
import profile from './../assets/images/profile.png';
import { DiGithubBadge } from "react-icons/di";
import { ImMail4 } from "react-icons/im";
import { AiFillLinkedin } from "react-icons/ai";

function Header() {
  return (
    <header className='item-header' >
      <div className="child-header">
        <a href="#"><img src={profile} alt="" className="w-28 h-28 object-cover rounded-full" /></a>
        <h1><strong>Karen Valier</strong>.</h1>
        <span>Full Stack Developer</span>
      </div>

      <ul className="icons">
        <li>
          <a href="https://github.com/karen-vp" className="">
            <DiGithubBadge />
            <span className="label">Github</span>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/karen-valier-1463ba24a" className=""><AiFillLinkedin />
            <span className="label">LinkedIn</span></a>
        </li>
        <li><a href="mailto:karenvalierpalmero@gmail.com" className=""><ImMail4 /><span className="label">Email</span></a></li>
      </ul>
    </header>
  )
}

export default Header