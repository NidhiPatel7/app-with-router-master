import React, {Component} from 'react';


class RouteNotFound extends  Component{
    constructor(props){
		super(props);
		this.state = {
			message:''
		}
	}

	
  render(){
    return (
        <div className="main">
        <h3>Opps page not found</h3>
        

      </div>
    );
  }
}

export default RouteNotFound;
