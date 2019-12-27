import React, { Component } from 'react';

class CardProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id : this.props.item.id,
            name : this.props.item.name,
            prix : this.props.item.prix,
            img : this.props.item.img,
        };
    }

    render(){
        console.log(this.state);
        return(
            <div className="col-4">
                <h3>{this.state.name}</h3>
                <img src={this.state.img} />
                <span className="prix" >{this.state.prix} $</span>
            </div>
        )
    }
}

export default CardProduct;
