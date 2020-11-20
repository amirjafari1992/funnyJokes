import React, { Component } from 'react';
import { connect } from 'react-redux';

import './styles/jokeItems.scss'

import JokeItemsHeader from './jokeItemsHeader';
import JokeItem from './jokeItem';
import Categories from '../categories/categories';


class JokeItems extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { value, icon_url, id } = this.props.joke;
        const { categoryName } = this.props;
        const headerTitle = `${categoryName} Joke`;

        return (
            <React.Fragment>
                <Categories />
                <div className="container">
                    <JokeItemsHeader title={headerTitle} />
                    <div className="c-jokeItems">
                        <JokeItem 
                            likeOption 
                            text={value} 
                            image={icon_url} 
                            jokeID={id}
                        />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state) => ({
    joke: state.joke.joke,
    categoryName: state.joke.activeCategory
})

export default connect(mapStateToProps)(JokeItems);