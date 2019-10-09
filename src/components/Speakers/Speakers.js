import React, { Component } from 'react';
import './Speakers.css';

import { Link } from 'react-router-dom';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Growl } from 'primereact/growl';

class Speakers extends Component {
  constructor(props) {
    super(props);
   
    this.state = { speakers: [], loading: true };

    fetch('https://inpireday.azurewebsites.net/getitems')
      .then(response => response.json())
      .then(data => {
        this.setState({ speakers: data, loading: false });
        this.growl.show({severity: 'success', summary: 'Success Message', detail: 'All data loaded successfuly'});
      });
  }

  static fieldTemplate = (rowData) => (<div>
    <Link to={`/speaker/${rowData.id}`}>{rowData.firstname} {rowData.lastname}</Link>
  </div>)

  static renderSpeakersTable = (speakers) => {
    
    let cols = [
      { field: 'speaker', header: 'Speaker' },
      { field: 'firstname', header: 'Fisrt name' },
      { field: 'lastname', header: 'Last name' },
      { field: 'bio', header: 'Description' },
      { field: 'id', header: 'Id' }
    ];

    let dynamicColumns = cols.map((col, i) => {
      if (col.header === 'Speaker')
        return <Column  key={col.field} field={col.field} header={col.header} body={this.fieldTemplate} />;
      else
        return <Column sortable={true} key={col.field} field={col.field} header={col.header}  />;
    });

    return (
      
      <DataTable value={speakers}>
        {dynamicColumns}
      </DataTable>
    
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em>
        </p>
      : Speakers.renderSpeakersTable(this.state.speakers);

    return (
      <div className="page">
        <Growl ref={(el) => this.growl = el} position="topright"></Growl>
        <h1 className="header">Speakers of today</h1>
        <p>Just now we are fetching data from azure enpoint</p>
        {contents}
      </div>
    );
  }
}

export default Speakers;