import React, { Component } from 'react';
import Article from '../components/Article.js';
import axios from 'axios';

class Blog extends Component {
    constructor(props){
        super(props)
        this.state = {
            Bloglist : [],
            UsersList : [],

            loadingBlog : true,
            loadingUser : true,
            loaded : false,
        }
    }

    componentDidMount(){
        this.refresh()
    }

    refresh(){
        this.setState({
            loadingBlog : true,
            loadingUser : true,
            loaded : false,
        }, () => {
            axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                this.setState({
                    Bloglist : res.data,
                    loadingBlog : false,
                })
            }).catch(error => {
            });

            axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                this.setState({
                    UsersList : res.data,
                    loadingUser : false,
                })
            }).catch(error => {
            });
        })
    }

    componentDidUpdate(){
        if(!this.state.loadingBlog && !this.state.loadingUser && !this.state.loaded){
            let bloglist = this.state.Bloglist.slice()
            let usersList = this.state.UsersList.slice()
            let tmp = []
            bloglist.map(article => {
                let userid = article.userId
                var userObj
                usersList.map(user => {
                    if (user.id === userid){
                        userObj = user
                        return userObj
                    }
                })
                article.user = userObj
                tmp.push(article)
            })

            this.setState({
                Bloglist : tmp,
                loaded : true
            })
        }
    }

    render(){
        if(this.state.loaded){
            return(
                <div className="container-catalog">
                <h1 className="my-5 text-center">Blog</h1>
                <button onClick={() => this.refresh()}>Refresh</button>
                {
                    this.state.Bloglist.map((e, k) => {
                        return (<Article key={k} item={e}/>)
                    })
                }
                </div>
            )
        }else{
            return("Loading")
        }
    }
}

export default Blog;
