import React, { Component } from 'react'
import Title from './../globals/Title'
import Img from 'gatsby-image'

const getCategories = items => {
	let allCategories = items.map( item => item.node.category );
	let categories = Array.from( new Set( allCategories ) );
	categories = [ 'all', ...categories ];

	return categories;
}

export default class Menu extends Component {
	constructor ( props ) {
		super( props );
		this.state = {
			items: props.items.edges,
			coffeeItems: props.items.edges,
			categories: getCategories( props.items.edges )
		}
	}

	handleItems = category => {
		let tempItems = [ ...this.state.items ];
		if ( category === 'all' ) {
			this.setState( () => {
				return { coffeeItems: tempItems }
			} )
		}
		else {
			let items = tempItems.filter( ( { node } ) => node.category === category );
			this.setState( () => {
				return { coffeeItems: items }
			} )
		}
	}

	render() {
		let coffeeItems = this.state.coffeeItems;
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
									<small>${ node.price }</small>
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
							<div className="col-10 mx-auto text-center">
								{ this.state.categories.map( ( category, i ) => {
									return (
										<button
											className="btn btn-yellow text-capitalize m-3"
											onClick={ () => this.handleItems( category ) }
											key={ i }
											type="button">
											{ category }
										</button>
									)
								} ) }
							</div>
						</div>
						<div className="row">
							{ menuItems }
						</div>
					</div>
					
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
