import React, { Component } from 'react';
import logo from './../images/icon.png';
import {Navbar, NavDropdown, Nav, MenuItem} from 'react-bootstrap';


const NavBar = () => (
	<Navbar className="bg-navbar">
	    <Navbar.Header>
	      	<Navbar.Brand>
	        	<a href="/"><img src={logo} alt="" /></a>
	      	</Navbar.Brand>
	    </Navbar.Header>
	    <Nav className="pull-right">
	      	<NavDropdown eventKey={1} title="Menu" id="basic-nav-dropdown">
	        	<MenuItem eventKey={1.1}>Action</MenuItem>
	        	<MenuItem eventKey={1.2}>Another action</MenuItem>
	        	<MenuItem eventKey={1.3}>Something else here</MenuItem>
	        	<MenuItem divider />
	        	<MenuItem eventKey={1.4}>Separated link</MenuItem>
	      	</NavDropdown>
	    </Nav>
	</Navbar>
);

class Header extends Component{
	render(){
		return(
			<div>
				<NavBar />
			</div>
		);
	}
}


export default Header;