import React, {Component} from 'react';
import {MenuItem, Nav, Navbar, NavDropdown, NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

class ElfMenu extends Component {

    render() {
        return (
            <Navbar fixedTop inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <LinkContainer to='/'><a href='/'>Git Explorer</a></LinkContainer>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to='/'><NavItem>Get Git User</NavItem></LinkContainer>
                        <LinkContainer to='/get-foo'><NavItem>Get Foo</NavItem></LinkContainer>
                        <LinkContainer to='/get-you-rang'><NavItem>Get Rang</NavItem></LinkContainer>
                        <LinkContainer to='/get-numbers'><NavItem>Numbers</NavItem></LinkContainer>
                        <NavDropdown title='Gists' id='basic-nav-gist'>
                            <MenuItem href='/get-gist'>Insert New Gist</MenuItem>
                            <MenuItem href='/get-gist-list'>Gist Lister</MenuItem>
                            <MenuItem href='/get-notifications'>Notifications</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default ElfMenu;

{/*
 <div className='App'>
 <ul className='elfmenu'>
 <li><Link to='/'>Home</Link></li>
 <li><Link to='/get-gist'>Gist</Link></li>
 <li><Link to='/get-foo'>Foo</Link></li>
 <li><Link to='/get-numbers'>Numbers</Link></li>
 <li><Link to='/get-notifications'>Notifications</Link></li>
 <li><Link to='/get-gist-list'>Gist List</Link></li>
 </ul>
 */
}