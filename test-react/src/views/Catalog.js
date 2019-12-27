import React, { Component } from 'react';
import data from '../data/catalog.js';
import CardProduct from '../components/CardProduct.js';

class Catalog extends Component {
    constructor(props){
        super(props)
        this.state = {
            cataloglist : [],
        }
    }

    componentDidMount(){
        


        this.setState({
            cataloglist : data,
        })
    }

    render(){
        return(
            <div className="container-catalog">
                <h1>Catalog</h1>
                <div className="row">
                    {
                        this.state.cataloglist.map((e, k) => {
                            return (<CardProduct key={k} item={e}/>)
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Catalog;
