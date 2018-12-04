import React from 'react';
//import PropTypes from 'prop-types';

class DataEntry extends React.Component {
  constructor(props) {    
    super(props);
    this.state = {value: ""};

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return(
      <div id='data-entry'>
        <input type="text" size="20" value={this.state.value} onChange={this.handleChange} />
        <button onClick={this.handleClick}>Add</button>
      </div>
    );
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleClick(event) {
    let v = this.state.value;
    if(v !== ""){
      this.setState({value: ""});
      if(this.props.handleAdd && typeof this.props.handleAdd === 'function'){
        this.props.handleAdd(v);
      }
    }
  }
};

export default DataEntry;