import React, { Component } from 'react';
import JokeItemsHeader from './jokeItemsHeader';
import JokeItem from './jokeItem';
import { connect } from 'react-redux';
import Pagination from '../common/pagination';
import { paginate } from '../../utils/paginate';


class FavoriteJokes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageSize: 20,
            currentPage: 1
        }
    }
    handlePageChange = page => {
        this.setState({ currentPage: page });
    };
    componentWillReceiveProps() {
        this.setState({ currentPage: 1 });
    }
    render() {
        const { pageSize, currentPage } = this.state;
        const {favoriteJokes} = this.props;
        const resultCount = favoriteJokes.length;
        let allFavorites = '';
        
        if (favoriteJokes.length !== 0) {
            allFavorites = favoriteJokes.map(res => (
                <JokeItem 
                    key={res.id} 
                    favoriteOption 
                    text={res.text} 
                    image={res.image} 
                    jokeID={res.id} 
                />
            ));
        }
        const paginateFavorites = paginate(allFavorites, currentPage, pageSize);
        
        return (
            <div className="container">
                <JokeItemsHeader title="Favorite Jokes" />
                <div className="c-jokeItems">
                    {allFavorites !== '' ? paginateFavorites : 'There is nothing to present!'}
                    <Pagination
                        itemsCount={resultCount}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={this.handlePageChange}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    favoriteJokes: state.joke.favoriteJokes
})

export default connect(mapStateToProps)(FavoriteJokes);