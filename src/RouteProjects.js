import React, {Component} from 'react';
import Project from './Project';
import {getProjects} from './Api';
class RouteProjects extends Component {
  constructor(props){
    super(props)

    this.state = {
      projects:[
        {
          id:1,
          name:'Build a hut',
          description: 'Nice project'
        },{
          id:2,
          name:'Make a basket',
          description: 'Pretty project'
        }
      ],
    };

  }

 routeGetProjects = () =>{
  getProjects().then(res => {
    this.setState({projects:res.data})
  }) 
 }
 componentDidMount()
 {
   this.routeGetProjects();//for refresh data when delete it
 }

 //==== this is when we only get projects (list)===
 //but when we delete data we want to refresh list as well so we use top like 
 //set method in routeGetProjects and call routeGetProjects in didmount
// componentDidMount()
// {
//   //console.log('RouteProjects mounted');
//   getProjects().then(res => {
//     this.setState({projects:res.data})
//   }) 
// }

  render(){
    return (
        <div className="main">
        <h3>All projects</h3>
        {
              this.state.projects.map((project) => {

                  var projectProps = {
                    ...project,
                    key: project.id,
                   refreshData: this.routeGetProjects,//for refresh data when delete it
                  };
                  return (<Project {...projectProps} />)
                })
              }
      </div>
    );
  }
}

export default RouteProjects;
