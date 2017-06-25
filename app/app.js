import React from 'react';
import ReactDom from 'react-dom';
// import Button from './components/buttons';
// import Toast from './components/Toast';
//
// import Ccc from './pagec.js';
//
//
// ReactDom.render(
//   <div>
//     <Ccc />
//   </div>,
//   document.getElementById('app'));

var NotesList = React.createClass({
  render: function() {
    return (
      <ol>
      {
        React.Children.map(this.props.children, function (child,index) {
          return <li key={index}>{child}</li>;
        })
      }
      </ol>
    );
  }
});


ReactDom.render(
  <NotesList>
    <span>hello</span>
    <span>world</span>
  </NotesList>,
  document.getElementById('app')

)
