import React from 'react'

function Home() {
  return (
    <div className='item-main'>
          {/* <!-- One --> */}
					<section id="one">
						<header className="major">
							<h2>Ipsum lorem dolor aliquam ante commodo<br />
							magna sed accumsan arcu neque.</h2>
						</header>
						<p>Accumsan orci faucibus id eu lorem semper. Eu ac iaculis ac nunc nisi lorem vulputate lorem neque cubilia ac in adipiscing in curae lobortis tortor primis integer massa adipiscing id nisi accumsan pellentesque commodo blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate lorem neque cubilia.</p>
						<ul className="actions">
							<li><a href="#" className="button">Learn More</a></li>
						</ul>
					</section>

				{/* <!-- Two --> */}
					<section id="two">
						<h2>Recent Work</h2>
						<div className="row">
							<article className="col-6 col-12-xsmall work-item">
								<a href="images/fulls/01.jpg" className="image fit thumb"><img src="images/thumbs/01.jpg" alt="" /></a>
								<h3>Magna sed consequat tempus</h3>
								<p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
							</article>
							<article className="col-6 col-12-xsmall work-item">
								<a href="images/fulls/02.jpg" className="image fit thumb"><img src="images/thumbs/02.jpg" alt="" /></a>
								<h3>Ultricies lacinia interdum</h3>
								<p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
							</article>
							<article className="col-6 col-12-xsmall work-item">
								<a href="images/fulls/03.jpg" className="image fit thumb"><img src="images/thumbs/03.jpg" alt="" /></a>
								<h3>Tortor metus commodo</h3>
								<p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
							</article>
							<article className="col-6 col-12-xsmall work-item">
								<a href="images/fulls/04.jpg" className="image fit thumb"><img src="images/thumbs/04.jpg" alt="" /></a>
								<h3>Quam neque phasellus</h3>
								<p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
							</article>
							<article className="col-6 col-12-xsmall work-item">
								<a href="images/fulls/05.jpg" className="image fit thumb"><img src="images/thumbs/05.jpg" alt="" /></a>
								<h3>Nunc enim commodo aliquet</h3>
								<p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
							</article>
							<article className="col-6 col-12-xsmall work-item">
								<a href="images/fulls/06.jpg" className="image fit thumb"><img src="images/thumbs/06.jpg" alt="" /></a>
								<h3>Risus ornare lacinia</h3>
								<p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
							</article>
						</div>
						<ul className="actions">
							<li><a href="#" className="button">Full Portfolio</a></li>
						</ul>
					</section>

				{/* <!-- Three --> */}
					<section id="three">
						<h2>Get In Touch</h2>
						<p>Accumsan pellentesque commodo blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate lorem neque lorem ipsum dolor.</p>
					</section>

  
    </div>
  )
}

export default Home