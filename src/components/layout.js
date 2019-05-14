/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import './bootstrap.min.css';
import "./layout.css"
import Footer from './../components/globals/Footer'

import Navbar from './globals/Navbar';

const Layout = ({ children }) => ( 
	<>
		<Navbar />
		{ children }
		<Footer />
	</>)

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
