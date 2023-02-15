import React from 'react'
import { DiGithubBadge } from "react-icons/di";
import { ImMail4 } from "react-icons/im";
import { AiFillLinkedin } from "react-icons/ai";

function Icons() {
    return (
        <>
            <ul className="icons">
                <li>
                    <a href="https://github.com/karen-vp" target="_blank" >
                        <DiGithubBadge />
                        <span className="label">Github</span>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/karen-valier-1463ba24a" target="_blank"  ><AiFillLinkedin />
                        <span className="label">LinkedIn</span></a>
                </li>
                <li><a href="mailto:karenvalierpalmero@gmail.com" ><ImMail4 /><span className="label">Email</span></a></li>
            </ul>
        </>
    )
}

export default Icons