import React, {Component} from 'react';

class NavBar extends Component {
    constructor(props){
        super(props)
        this.state = {
            appName : this.props.name ? this.props.name : "Test",
        }
    }

    render(){
        return (
            <>

            </>
        );
    }
}


export default NavBar;
