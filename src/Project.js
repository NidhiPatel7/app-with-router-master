import React, {Component} from 'react';
import { Link, navigate } from "@reach/router";//after install in terminal add it
import {deleteProjects} from './Api';
class  Project extends Component {

	handleTrashClick = () => {
		var {id,refreshData} = this.props;

		deleteProjects(id).then(res => refreshData());
		//deleteProjects(id).then(res => window.location.reload); one way bcz its reload whole page and some time if we store temp data its gone as well so use 2nd method wich is top one
	}
	

  	render(){

	  	var {name,description,id} = this.props

	    return (
	      <div className="card project">
	        <img className="card-img-top" src="/project.jpg" alt="Card image cap" />
	        <div className="card-body">
	          <h5 className="card-title">{name}</h5>
	          <p className="card-text">{description}</p>
	          <p>
	            <i className="fas fa-heart"></i>
	            <Link to={'/projects/'+id+'/edit'}><i className="fas fa-edit"></i></Link>
	            <i onClick={this.handleTrashClick} className="fas fa-trash"></i>
	          </p>
	        </div>
	      </div>
	    );
  	}
}

export default Project;
