import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : "Innova"
        };
    }

    render(){
        return(
            <>
                <div className="nav">
                    <span className="brand">{this.state.name}</span>
                </div>
            </>
        )
    }
}

export default Header;
