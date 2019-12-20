import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views/Home"
import Login from "./views/Login"
import Register from "./views/Register"


class App extends Component {
    render(){
        return(
            <Router>
                <Switch>
                    <Route path='/login' exact strict component={Login} />
                    <Route path='/forgot-password' exact strict component={Register} />
                    <Route path='/register' exact strict component={Register} />
                    <Route path='/register/:token' exact strict component={Register} />
                    <Route path='/' component={Home} />
                </Switch>
            </Router>
        )
    }
}

export default App;
