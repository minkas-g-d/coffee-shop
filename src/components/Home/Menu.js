import React, { Component } from 'react'
import Title from './../globals/Title'
import Img from 'gatsby-image'

export default class Menu extends Component {
	constructor ( props ) {
		super( props );
		this.state = {
			items: props.items.edges,
			coffeeItems: props.items.edges
		}
	}
	render() {
		let coffeeItems = this.state.coffeeItems;
		console.log( 'items', coffeeItems )
		if ( coffeeItems.length ) {
			let menuItems = coffeeItems.map( ( { node } ) => {
				return (
					<div key={ node.id } className="col-11 col-md-6 my-3 d-flex mx-auto">
						<div><Img fixed={ node.image.fixed } /></div>
						<div className="flex-grow-1 px-3">
							<div className="d-flex justify-content-between">
								<h6 className="mb-0">
									<small>{ node.title }</small>
								</h6>
								<h6 className="mb-0 text-yellow">
									$<small>{ node.price }</small>
								</h6>
							</div>
							<p className="text-muted">
								<small>{ node.description.description }</small>
							</p>
						</div>
					</div>
				)
			} );
			return (
				<section className="menu py-5">
					<div className="container">
						<Title title="best of our menu" />
						<div className="row mb-5">
							<h1>These are our items</h1>
						</div>
					</div>
					{ menuItems }
				</section>
			)
		}
		else {
			return (
				<section className="menu py-5">
					<div className="container">
						<Title title="best of our menu" />
						<div className="row">
							<div className="col-10 col-sm-6 mx-auto text-center text-capitalize">
								<h1>There are no items to display</h1>
							</div>
						</div>
					</div>
				</section>
			);
		}
	}
}
