import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from './component/static/header';
import Footer from './component/static/footer';
//import Menu from './component/static/menu';
import Topics from './component/static/topics';
import UserEntry from './container/funny-data-entry/user-entry';
import FindRegExpMatches from './container/find-matches/find-matches';
import ContactUs from './component/contact-us';
import './App.css';

class App extends Component {
  render() {    
    return (
      <Router>
        <div className='App'>        
            
            <Header id='div-header' className='App-div-header'/>
            <div className='App-div-middle'>
    {/* <Menu id='div-menu' className='App-div-left' /> */}
              <div id='div-menu' className='App-div-left'>
                <ul>
                  <li><Link to='/'>Home</Link></li>
                  <li><Link to='/find-matches'>Find Matches</Link></li>
                  <li><Link to='/contact-us'>Contact Us</Link></li>
                </ul>                
              </div>
              <div className='App-div-center'>
                <Route path='/' exact component={UserEntry} />
                <Route path='/find-matches' component={FindRegExpMatches} />
                <Route path='/contact-us' component={ContactUs} />
              </div>
              
              <Topics id='div-topics' className='App-div-right' />
            </div>
            <Footer id='div-footer' className='App-div-footer' />
        </div>
        
      </Router>
    );
  }
}

export default App;


      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>