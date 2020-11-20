import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import { fetchSearchResult } from '../../actions/jokeActions';
import MenuIcon from '@material-ui/icons/Menu';
import CancelIcon from '@material-ui/icons/Cancel';


import './styles/navbar.scss'


class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: '',
            isSearched: false,
            isMenuActive: false
        }
    }
    componentDidMount() {
        this.setState({ searchValue: this.props.searchValue })
    }
    handleChange = e => {
        this.setState({ searchValue: e.currentTarget.value });
    }
    handleKeyDown = e => {
        if (e.key === 'Enter') {
            this.handleSearch();
        }
    }
    handleSearch = () => {
        const value = this.state.searchValue;
        if (value === undefined || value === null || value === '') return null;

        this.props.fetchSearchResult(value);

        setTimeout(() => {
            this.setState({ isSearched: true })
            this.setState({ isSearched: false });
        }, 500)
        this.handleCloseMenu()
    }
    handleOpenMenu = () => {
        this.setState({
            isMenuActive: true
        })
    }
    handleCloseMenu = () => {
        this.setState({
            isMenuActive: false
        })
    }
    render() {
        const { isSearched, isMenuActive } = this.state;
        const { favoriteJokes } = this.props;
        return (
            <React.Fragment>
                {isSearched && <Redirect to="/SearchResult" />}

                <span className="mobile-btn" onClick={this.handleOpenMenu}>
                    <MenuIcon />
                </span>

                <nav className={isMenuActive ? "c-navbar active" : "c-navbar"}>
                    <CancelIcon onClick={this.handleCloseMenu} className="close-btn"/>
                    <div className="container-fluid">
                        <div className="d-flex justify-content-between align-items-center">
                            <h1 className="c-navbar__logo">Funny Jokes</h1>
                            <ul className="c-navbar__items d-flex justify-content-between align-items-center">
                                <li>
                                    <NavLink onClick={this.handleCloseMenu} exact to='/'>
                                        Jokes
                                </NavLink>
                                </li>
                                <li>
                                    <NavLink onClick={this.handleCloseMenu} to="/favorites">
                                        Your Favorite Jokes
                                    <span className="badge badge-success ml-1">
                                            {favoriteJokes.length}
                                        </span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink onClick={this.handleCloseMenu} to="/about">
                                        About Me
                                </NavLink>
                                </li>
                            </ul>
                            <div className="c-navbar__form form form-inline">
                                <input
                                    onChange={this.handleChange}
                                    onKeyPress={this.handleKeyDown}
                                    className="form__input form-control mr-2"
                                    type="text"
                                    placeholder="Serach your joke..."
                                />
                                <button
                                    onClick={this.handleSearch}
                                    className="btn btn-outline-success my-2 my-sm-0">
                                    Search
                            </button>
                            </div>
                        </div>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    favoriteJokes: state.joke.favoriteJokes
})

export default connect(mapStateToProps, { fetchSearchResult })(Navbar);