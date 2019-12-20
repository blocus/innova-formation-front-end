import React, { Component } from 'react';

class Register extends Component {


    render(){
        console.log(this.props);
        return (
            <>
                <h1>Register</h1>
                <div>{this.props.match.params.token}</div>
            </>
        )
    }

}

export default Register;
