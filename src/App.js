import React,{Component} from 'react';
import Forms from "./components/Forms";
import "./App.css"
import 'antd/es/spin/style/css';
import 'antd/dist/antd.css';
import Navbar from './components/Navbar';
import {BrowserRouter, Route} from "react-router-dom"
import MyTable from './components/myTable';

class App extends Component{
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Route exact path="/" render={props=>(
                <React.Fragment>
                  <div className="row-content">
                    <Forms/>
                  </div>
                </React.Fragment>
                )}/>
            <Route path="/table" render={props=>(
                <React.Fragment>
                    <MyTable/>
                </React.Fragment>
                )}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
