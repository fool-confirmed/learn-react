import React from 'react';
import './data-list.css'

function DataList(props) {
  let list = props.list === undefined ? [] : props.list;   
  return(
    <ul>
      {list.map(i => {
        return i === props.search ? <li className="item-matched" key={i}>{i}</li> : <li key={i}>{i}</li>;
      })}
    </ul>
  );
}

export default DataList;