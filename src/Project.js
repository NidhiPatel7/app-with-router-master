import React, {Component} from 'react';
import { Link } from "@reach/router";//after install in terminal add it
class  Project extends Component {

	handleTrashClick = () => {
		// var {deleteProjects,id} = this.props;

		// deleteProjects(id);
	}
	

  	render(){

	  	var {name,description,id} = this.props

	    return (
	      <div className="card project">
	        <img className="card-img-top" src="project.jpg" alt="Card image cap" />
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
