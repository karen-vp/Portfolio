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

            <h2 className="text-2xl">Portfolio</h2>
            <div className="row">
                {/* portfolio cards */}
                <Card link="https://arbola.netlify.app/" img={landingpage} title="Landing page - Arbola" desc="This web page was build with HTML and CSS." repo="https://github.com/karen-vp/Proyecto1-landingpage" />

                <Card link="https://homebookcrud.netlify.app/" img={homebook} title="CRUD App - Personal Agenda" desc="This web page was build with HTML, CSS and Javascript." repo="https://github.com/karen-vp/Proyecto-2-CRUD-app" />

                <Card link="https://dashboardbitcoin.netlify.app/" img={dashboard} title="Dashboard App - Bitcoin" desc="This web page was build with HTML, CSS, and JS, in which a bitcoin exchange rate API is consumed." repo="https://github.com/karen-vp/DashBoard-Bitcoin" />

                <Card link="https://tacosrestaurant.netlify.app/" img={restaurantapp} title="Restaurant App - Tacoste" desc="This web page was build with React, React Router, and Firebase as database." repo="https://github.com/karen-vp/restaurante" />

                <Card link="https://karen-vp-ecommerce.netlify.app/" img={ecommerce} title="eCommerce App - Clothes" desc="This web page was build with React, and an API build with Express y Node.js, and a MongoDB database." repo="https://github.com/karen-vp/ecommerce-ropa-frontend" />

            </div>
            <ul >
                <li><a href="https://github.com/karen-vp?tab=repositories" className="button" target="_blank">Full Portfolio</a></li>
            </ul>
        </section>
    )
}

export default Portfolio