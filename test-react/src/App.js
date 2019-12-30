import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Contact from './views/Contact'
import Blog from './views/Blog'
import Catalog from './views/Catalog'
import Home from './views/Home'

import Header from './components/Header'
import Footer from './components/Footer'

class App extends Component {
    render(){
        return (
            <Router>
                <Header />
                <Switch>
                    <Route path='/blog' exact strict component={Blog} />
                    <Route path='/contact' exact strict component={Contact} />
                    <Route path='/catalog' exact strict component={Catalog} />
                    <Route path='/' component={Home} />
                </Switch>
                <Footer />
            </Router>
        );
    }
}

export default App;
