import axios from 'axios';

var urlPrefix = 'http://10.2.24.38:3001/api';
var serverUrl = 'http://10.2.24.38:3001/'

var getProjects = () => {
    return axios.get(urlPrefix+'/projects') 
}
var getSingleProject = (id) => {
    return axios.get(urlPrefix+'/projects/'+id) 
}
var getTypes = () => {
    return axios.get(urlPrefix+'/types')
}
var addProjects = (data) => {
    return axios.post(urlPrefix+'/projects',data)

  }
  var updateProjects = (id,data) => {
    return axios.put(urlPrefix+'/projects/'+id,data)
    
  }
export {serverUrl,getProjects,getTypes,addProjects,getSingleProject,updateProjects} //