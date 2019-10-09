import React, { Component } from 'react';
import './Speaker.css';

import logo from '../../logo.svg'
import { Col, Row } from 'react-bootstrap';
import { Card } from 'primereact/card';

class Speaker extends Component {
  constructor(props) {

    super(props);
    this.state = {speaker: null, loading: true };
    let paramValue = this.props.match.params.id;

    fetch('https://inpireday.azurewebsites.net/getitems')
      .then(response => response.json())
      .then(data => {
        let speaker = data.find((menu) => paramValue === menu.id);
        this.setState({ speaker: speaker, loading: false });
      });
  }

  render() {

    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : <div>
        <h1 className="header">Speaker {this.state.speaker.firstname} {this.state.speaker.lastname}</h1>
        <p>Just now we are fetching data from azure enpoint</p>
        <Card className="cardlayout" style={{ fontWeight: '800' }}>
          <Row>
            <Col xs={2} sm={1}>
              <img src={logo} alt='logo'/>
            </Col>
            <Col xs={10} sm={11}>
              <div>
                <span>{this.state.speaker.firstname}</span>
              </div>
              <div>
                <span>{this.state.speaker.lastname}</span>
              </div>
              <div>
                <span>{this.state.speaker.bio}</span>
              </div>
              <div>
                <span>{this.state.speaker.id}</span>
              </div>
            </Col>
          </Row>
        </Card>
      </div>;
    
      return (
      <div className="page">
        {contents}
      </div>
    );
  }
}

export default Speaker;