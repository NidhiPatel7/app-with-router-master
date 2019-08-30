import React, {Component} from 'react';
import { Router, Link, navigate } from "@reach/router";//after install in terminal add it
import { getTypes,getSingleUser} from "./Api";
import RouteProjects from './RouteProjects';
import RouteAddProject from './RouteAddProject';
import RouteEditProject from './RouteEditProject';
import RouteSingleType from './RouteSingleType';
import RoteLogin from './RoteLogin';
import RouteNotFound from './RouteNotFound';
import './App.css';

class App extends Component {
constructor(props)
{
  super(props);
  this.state = {
    types:[],
    currentUser:null,//we want to use currentUser all file so we use in app.js file not in login.js
  }
}
setCurrentUser = (user) =>
{
  this.setState({currentUser:user});
}

handleLogoutClick = () => {
  localStorage.removeItem('userId')
  this.setState({currentUser:null})
  navigate('/login')
}

  componentDidMount()
  {
    getTypes().then(res => this.setState({types:res.data}));

    //local storage like cookie
    var userId = localStorage.getItem('userId')

    if(userId){
      getSingleUser(userId).then(res => {
        this.setState({currentUser:res.data})
      })
    }
  }

  
  render(){
    var {types,currentUser} = this.state;
    return (
      <div className="app">


          <div className="header">
            {
              (currentUser)?(<span>Welcome {currentUser.name}</span>):null
            }
             <i className="fas fa-bars"></i>
            <ul className="menu">
            <Link to="/projects">All Projects</Link>
            
            {
              types.map(type => <Link to={'/types/'+type.id}>{type.name}</Link> )
            }

            {
               (currentUser) ? (
                 <>
                    <Link to="/projects/create">Add a project</Link>
                    <li><a onClick={this.handleLogoutClick} href="#">Logout</a></li>

                 </>
               ) :(
                 <>
                    <li><a href="/login">Login</a></li>
                    <li><a href="">Signup</a></li>
                 </>
               )
            }
            
              
            </ul>
          </div>
          <Router>
          <RouteProjects path="/projects"/>
          <RouteSingleType path="/types/:id"/>
          
          {
            (currentUser)?(
              <RouteAddProject path="/projects/create"/>
            ): null
          }
          {
            (currentUser)?(
              <RouteEditProject path="/projects/:id/edit"/>
            ): null
          }
          

          <RoteLogin setCurrentUser={this.setCurrentUser} path="/login" />
          {/* we want to use setCurrentUser in login.js file so we put here */}
          <RouteNotFound default/>
          
          </Router>

        
      </div>
    );
  }
}

export default App;
