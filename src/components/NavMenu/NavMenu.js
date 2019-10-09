import React, { Component } from 'react';
import './NavMenu.css';

//Bootstrap and router libs
import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class NavMenu extends Component {
    constructor(props)
    {
      super(props);
    }

    render() {
      return (
        <Navbar inverse fixedTop fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to={'/'}>INSPIRE DAY APPLICATION</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to={'/'} exact>
                <NavItem>
                  <Glyphicon glyph='home' /> Home
                </NavItem>
              </LinkContainer>
              <LinkContainer to={'/speakers'} exact>
                <NavItem>
                  <Glyphicon glyph='th-list' /> Speakers
                </NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
    }
}

export default NavMenu;