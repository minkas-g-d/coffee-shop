import React from 'react'
import Title from './../globals/Title'

export default function Contact() {
	return (
		<section className="contact py-5">
			<Title title="contact us" />
			<div className="row">
				<div className="col-10 col-sm-8 col-md-6 mx-auto">
					<form
						action="https://formspree.io/mina.dodunekova@gmail.com"
						method="POST">
						{ /* name */ }
						<div className="form-group">
							<label htmlFor="name">Name</label>
							<input 
								type="text"
								className="form-control"
								name="name"
								id="name"
								placeholder="john smith"/>
						</div>
						{ /* email */ }
						<div className="form-group">
							<label htmlFor="email">Email</label>
							<input 
								type="email"
								className="form-control"
								name="email"
								id="email"
								placeholder="email@email.com"/>
						</div>
						{ /* description */ }
						<div className="form-group">
							<label htmlFor="description">Description</label>
							<textarea
								name="description"
								id="description"
								className="form-control"
								rows="5"
								placeholder="your description here...">
							</textarea>
							{ /* submit */ }
							<button
								type="submit"
								className="btn btn-yellow btn-block text-capitalize mt-5">
								Submit
							</button>
						</div>

					</form>
				</div>
			</div>
		</section>
	)
}
