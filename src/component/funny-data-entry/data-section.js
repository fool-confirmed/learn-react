import React from 'react';
import DataEntry from './data-entry';
import DataList from './data-list';

function DataSection(props) {
  return(
    <div id='data-section'>
      <DataEntry data={props.search} handleAdd={props.handleAdd}/>
      <DataList list={props.list} search={props.search} />
    </div>
  );
}

export default DataSection;