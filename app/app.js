import React from 'react';
import ReactDom from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Button from './components/buttons';
import Tabs from './components/Tabs';

class App extends React.Component {
  render(){
    return (
      <div>
        <h1>123</h1>
        {this.props.children}
      </div>
    )
  }
}

function Child({ match }){
  return(
    <div>
      <h3>ID:{match.params.id}</h3>
    </div>
  )
}


ReactDom.render(
  (
    <Router >
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/button">About</Link></li>
          <li><Link to="/tabs">Topics</Link></li>
          <li><Link to="/dd123456">xxxxx</Link></li>
        </ul>

        <hr/>

        <Route path="/" component={App}/>
        <Route path="/button" component={Button}/>
        <Route path="/tabs" component={Tabs}/>
        <Route path="/dd:id" component={Child}/>
      </div>
    </Router>
  ),
  document.getElementById('app')

)
