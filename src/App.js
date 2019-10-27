import React,{Component} from 'react';
import Forms from "./components/Forms";
import "./App.css"
import 'antd/es/spin/style/css';
import 'antd/dist/antd.css';
import Navbar from './components/Navbar';
import {BrowserRouter, Route} from "react-router-dom"
import MyTable from './components/myTable';

class App extends Component{
  state={
    users:[{key:1,first_name:"starting",last_name:"last",birthday:"2009-02-02",age:34,Hobby:"coding"},]
  }
  Add_User=(user)=>{
    user.key=Math.random()
    const users=[...this.state.users,user]
    this.setState({users})
  }
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
            <Route exact path="/"render={props => 
              <React.Fragment>
                <div className="row-content">
                    <Forms add_user = {this.Add_User} />
                </div>
            </React.Fragment>}/>
            <Route path="/table"render={props => <MyTable users = {this.state.users} />}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
