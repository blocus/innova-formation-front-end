import React, { Component } from 'react';
import Header from "../components/Header"


class Home extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            favoritecolor: "red",
            users : [],
        };
    }


    componentDidMount(){
        this.setState({
            users : ['user1' , 'user2' , 'user3' , 'user4' , ]
        })
    }

    componentDidUpdate(prevProps, prevState){
        if(this.state.name !==  this.props.name){
            this.setState({
                name : this.props.name
            })
        }
    }

    renderContaner(){
        return(
            <div className="container">
            {this.state.users.map((e, k) => {
                return(<li key={k}>{e}</li>)
            })}
            </div>
        )
    }

    adduser(){
        let tmp = this.state.users.slice()
        tmp.push("user" + (tmp.length +1) )
        this.setState({
            users : tmp
        })
    }

    render(){
        return(
            <>
                <Header />
                {this.renderContaner()}
                <button onClick={() => this.adduser()}>Add New</button>
                <div className="footer">
                    Copyright © innova 2019
                </div>
            </>
        )
    }
}

export default Home;
