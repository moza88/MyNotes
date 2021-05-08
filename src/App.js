import './App.css';
import React, {Component} from 'react'
import { NFTStorage, Blob} from "nft.storage";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Notebook from './components/Notebook'

require('dotenv').config()


class App extends Component {
  componentDidMount() {

  }

  render() {
      return (
          <Router>
             <Route exact={true} path='/' render={() => (
                 <div className="App">
                    <Notebook/>
                 </div>
                 )}/>
          </Router>
      )

  }
}

export default App;
