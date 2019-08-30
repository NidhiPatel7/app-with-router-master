import React, {Component} from 'react';
import Project from './Project';
import {getSingleType} from './Api';
class RouteSingleType extends Component {
  constructor(props){
    super(props)

    this.state = {
      type:null,
    }

  }

 routeGetSingleType = (id) => {
  getSingleType(id).then(res => this.setState({type:res.data}));
 }
 componentDidMount()
 {
   //console.log('hi');
   var {id} = this.props;//id directly comming from route
   this.routeGetSingleType(id);//when we put id we want to refresh list we use this method
 }
 //shouldComponentUpdate we use this bcz its goes wierd so we load if there is next props and when prop and state change this one activate
shouldComponentUpdate(nextProps, nextState)
{
  // console.log(this.props);
  // console.log(nextProps);
  var {id} = this.props;
  if (id != nextProps.id)
  {
    this.routeGetSingleType(nextProps.id);
  }
  return true;
}

  render(){
    var {type} = this.state; 
    return type ?  (
        <div className="main">
        <h3>{type.name}</h3>
        {
              type.projects.map((project) => {

                  var projectProps = {
                    ...project,
                    key: project.id,
                    // refreshData: this.routeGetSingleType(type.id),//for refresh data when delete it from types but it jump direcl we want to wait so we did like bellow
                   refreshData: () => this.routeGetSingleType(type.id),//for refresh data when delete it
                  };
                  return (<Project {...projectProps} />)
                })
              }
      </div>
    ) : null
  }
}

export default RouteSingleType;
