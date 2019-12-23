import React, { Component } from 'react';
import Sidebar from '../components/Sidebar'
class Catalog extends Component {
    render(){
        return(
            <div className="container-catalog">
                <Sidebar />
                <h1>Catalog</h1>
            </div>
        )
    }
}

export default Catalog;
