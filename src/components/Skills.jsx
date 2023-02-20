import React from 'react'
import { DiJavascript1, DiHtml5, DiCss3, DiGit, DiNodejsSmall, DiReact, DiGithubBadge, DiBootstrap } from "react-icons/di";
import {SiExpress, SiMongodb} from "react-icons/si";

function Skills() {
    return (
        <div>
            <h2>Skills</h2>
            <ul className='icons-skills'>
                <li>
                    <DiHtml5 />
                    <span className="label">HTML</span>
                </li>
                <li>
                    <DiCss3 />
                    <span className="label">CSS3</span>
                </li>
                <li>
                    <DiJavascript1 />
                    <span className="label">JavaScript</span>
                </li>
                <li>
                    <DiReact />
                    <span className="label">React.js</span>
                </li>
                <li>
                    <DiBootstrap />
                    <span className="label">Bootstrap</span>
                </li>
                <li>
                    <DiNodejsSmall />
                    <span className="label">Node.js</span>
                </li>
                <li>
                    <SiExpress />
                    <span className="label">Express</span>
                </li>
                <li>
                    <SiMongodb />
                    <span className="label">Mongodb</span>
                </li>
                <li>
                    <DiGit />
                    <span className="label">Git</span>
                </li>
                <li>
                    <DiGithubBadge />
                    <span className="label">Git</span>
                </li>

            </ul>
        </div>
    )
}

export default Skills