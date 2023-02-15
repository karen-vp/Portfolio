import React from 'react'
import Card from './Card'
import landingpage from './../assets/images/landingpage.png';
import homebook from './../assets/images/homebook.png';
import dashboard from './../assets/images/dashboard.png';
import restaurantapp from './../assets/images/restaurantapp.png';
import ecommerce from './../assets/images/ecommerce.png';

function Portfolio() {
    return (

        <section id="two">

            <h2 className="text-2xl">Portafolio</h2>
            <div className="row">
                {/* portfolio cards */}
                <Card link="https://arbola.netlify.app/" img={landingpage} title="Landing page de Aceites esenciales" desc="Esta página fue construida con HTML y CSS" repo="https://github.com/karen-vp/Proyecto1-landingpage" />

                <Card link="https://homebookcrud.netlify.app/" img={homebook} title="CRUD App - Agenda personal" desc="Esta página fue construida con HTML, CSS y Javascript" repo="https://github.com/karen-vp/Proyecto-2-CRUD-app" />

                <Card link="https://dashboardbitcoin.netlify.app/" img={dashboard} title="Dashboard App - Bitcoin" desc="Esta página fue construida con React y se consumio una API de tipos de cambio de bitcoin" repo="https://github.com/karen-vp/DashBoard-Bitcoin" />

                <Card link="https://tacosrestaurant.netlify.app/" img={restaurantapp} title="Restaurant App - Tacoste" desc="Esta página fue construida con React, React Router, en conjunto con Firebase como base de datos" repo="https://github.com/karen-vp/restaurante" />

                <Card link="https://karen-vp-ecommerce.netlify.app/" img={ecommerce} title="eCommerce App - Clothes" desc="Esta página fue construida con React (front) en conjunto con una API construida con Express y Node.js (back), y se utilizó una base de datos MongoDB" repo="https://github.com/karen-vp/ecommerce-ropa-frontend" />

            </div>
            <ul >
                <li><a href="https://github.com/karen-vp?tab=repositories" className="button" target="_blank">Full Portfolio</a></li>
            </ul>
        </section>
    )
}

export default Portfolio