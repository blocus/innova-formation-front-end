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
                            return (
                                <CardProduct key={k} >
                                    <img src={e.img} alt={e.alt} />
                                    <h3>{e.title}</h3>
                                    <p>{e.subtitle}</p>
                                </CardProduct>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Catalog;
