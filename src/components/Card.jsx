import React from 'react'

function Card({ link, img, title, desc, repo}) {
    return (
        <div>
            <article className="card-container">
                <a href={link} className="image thumb" target="_blank">
                    <img src={img} alt="deploy" className="w-80 h-56 rounded-lg object-cover" />
                </a>
                <div>
                    <h3 className='third-title'>{title}</h3>
                    <p className='body-card'>{desc}</p>
                </div>

                <a href={repo} className="button" target="_blank">Repository</a>
            </article>

        </div>
    )
}

export default Card