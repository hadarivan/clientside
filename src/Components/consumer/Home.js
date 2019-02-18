import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

class Home extends Component {

constructor(props){
    super(props);
    this.state = {
       name:'',
       redirect: true,
   };
}


render() {

if(this.state.redirect){
    return (<Redirect to={'/admin'}/>)
}

return (
<div >
Welcome {this.state.name}
</div>
);
}
}
export default Home;