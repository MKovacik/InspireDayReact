import React, { Component } from 'react';
import './Layout.css';

import { Col, Grid, Row } from 'react-bootstrap';
import NavMenu from '../NavMenu/NavMenu'

class Layout extends Component {
  render() {
    return (
      <Grid fluid>
      <Row>
        <Col sm={3}>
          <NavMenu/>
        </Col>
        <Col sm={12}>
          {this.props.children}
        </Col>
      </Row>
    </Grid>
    );
  }
}

export default Layout;