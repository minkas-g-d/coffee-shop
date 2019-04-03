import React from 'react'
import { Link } from 'gatsby';
import Title from './../globals/Title';

export default function Info() {
  return (
	<section className="py-5">
		<div className="container">
			<Title title="our story" />
			<div className="row">
				<div className="col-10 col-sm-8 mx-auto text-center">
					<p className="lead text-muted mb-5">
						Lorem ipsum dolor amet blue bottle leggings gluten-free fingerstache next level. Mixtape bespoke activated charcoal quinoa 8-bit vape beard. Truffaut intelligentsia everyday carry chillwave yr whatever keytar ennui gochujang pinterest brooklyn. Heirloom +1 live-edge meggings keffiyeh disrupt, selfies truffaut occupy gluten-free enamel pin four loko neutra. Roof party squid keytar, chia gluten-free polaroid air plant +1 chicharrones.
					</p>
					<Link to="/about/">
					   <button className="btn text-uppercase btn-yellow">
							about page
					   </button> 
					</Link>
				</div>
			</div>
		</div>
	  
	</section>
  )
}


