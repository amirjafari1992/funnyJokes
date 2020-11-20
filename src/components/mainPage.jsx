import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { fetchJoke, fetchCategories } from '../actions/jokeActions';

import Navbar from './navbar/navbar';
import JokeItems from './jokeItems/jokeItems';
import FavoriteJokes from './jokeItems/favoriteJokes';
import NotFound from './notFound';
import AboutMe from './aboutMe/aboutMe';
import SearchResult from './jokeItems/serachResult';
import EditJoke from './jokeItems/editeJoke';



class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        this.props.fetchJoke();
        this.props.fetchCategories();
    }
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Switch>
                    <Route path="/favorites/edit/:id/:text" component={EditJoke} />
                    <Route path="/favorites" component={FavoriteJokes} />
                    <Route path="/not-found" component={NotFound} />
                    <Route path="/searchResult" component={SearchResult} />
                    <Route path="/about" component={AboutMe} />
                    <Route path="/" exact component={JokeItems} />
                    <Redirect to="/not-found" component={NotFound} />
                </Switch>
            </React.Fragment>
        );
    }
}

export default connect(null, { fetchJoke, fetchCategories })(MainPage);