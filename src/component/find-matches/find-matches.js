import React from 'react';

class FindMatches extends React.Component {

  constructor(props) {
    super(props);
    this.state = {source: "", regexp: "", matches: ""};

    this.handleSourceChange = this.handleSourceChange.bind(this);
    this.handleRegExpChange = this.handleRegExpChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleSourceChange(event) {
    this.setState({source: event.target.value});
  }

  handleRegExpChange(event) {
    this.setState({regexp: event.target.value});
  }

  handleClick(event) {    
    if(this.props.handleMatch && typeof this.props.handleMatch === 'function'){      
      this.props.handleMatch(this.state.source, this.state.regexp);
    }
  }

  render() {
    return(
      <div style={{textAlign:'left'}}>
        <p>
          <label htmlFor='src-str' style={{verticalAlign:'top'}} >Source: </label>
          <textarea name='src-str' rows='5' cols='80' maxLength='250' 
            style={{resize:'none'}} value={this.state.source} 
            onChange={this.handleSourceChange} />
        </p>
        <p>
          <label htmlFor='reg-str'>RegExp:</label>
          <input type='text' name='reg-str' value={this.state.regexp}
            onChange={this.handleRegExpChange} />
          <button onClick={this.handleClick}>Test</button>
        </p>
        {Array.isArray(this.props.matches) &&
          <div>
            <label htmlFor='match'>Matches:</label>
            <ul>
              {this.props.matches.map((x, i) => <li key={i}>{x}</li>)}
            </ul>
          </div> 
        }

        
      </div>
    );
  }
}

export default FindMatches;