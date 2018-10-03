import React, { Component } from 'react';

import { connect } from 'react-redux';

// Class component is being used whenever we want to have some record keeping ever since the com
// ponnet is rendered!
// Each class based component will have its own State Object
// Whenever Component state is changed, Component immediately will re render
// It forces all the children to re render as well
// Functional Componeent do not have state
export default class Register extends Component {
    //This constructor function is called automatically whenever new instance of the search bar is created

render(){
return(
 <h1> This is a Register Page </h1>
);
    }
}

//Note: First one will allow to use content from the state object as props and the second one will allow to dispatch some actions that will modify the store. //

// const mapStateToProps = state => (
//     {


//     }
// )

// const mapDispatchToProps = dispatch => (
//     {

// }
// )

// //named export
// export default connect(mapStateToProps, mapDispatchToProps)(Register);

