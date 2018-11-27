import React from 'react';

function Topics(props) {
  return (<div id={props.id} className={props.className}>
    <h6>Topics</h6>
    <a href='https://www.lullabot.com/articles/how-to-learn-react' target='_blank' rel='noreferrer noopener'>How to learn react</a><br/>
    <a href='https://reactjs.org/docs/getting-started.html' target='_blank' rel='noreferrer noopener'>React Docs</a><br/>
    <a href='https://redux.js.org/basics' target='_blank' rel='noreferrer noopener'>Redux</a><br/>
    <a href='https://github.com/reduxjs/react-redux/blob/master/docs/api.md' target='_blank' rel='noreferrer noopener'>react-redux API docs</a><br/>
    <a href='https://reacttraining.com/react-router/web/guides/quick-start' target='_blank' rel='noreferrer noopener'>react-router-dom</a>
  </div>);
}

export default Topics;