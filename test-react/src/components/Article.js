import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId : this.props.item.userId,
            id : this.props.item.id,
            title : this.props.item.title,
            body : this.props.item.body,
            user : this.props.item.user
        };
    }

    render(){
        return(
            <article>
                <h3>{this.state.title}</h3>
                <Link to={"/user/" + this.state.user.id}><small>{this.state.user.username}</small></Link><br />
                <span className="prix" >{this.state.body}</span>
            </article>
        )
    }
}

export default Article;
