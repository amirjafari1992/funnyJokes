import React, { Component } from 'react';
import JokeItemsHeader from './jokeItemsHeader';
import JokeItem from './jokeItem';
import { connect } from 'react-redux';
import Pagination from '../common/pagination';
import { paginate } from '../../utils/paginate';



class SearchResult extends Component {
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
        const headerText = `Search Result for "${this.props.searchValue}"`;
        const { searchResult } = this.props;
        const { pageSize, currentPage } = this.state;
        const resultCount = searchResult.total;
        let allResults = '';
        
        if (searchResult.result && searchResult.result.length > 0) {
            allResults = searchResult.result.map(res => (
                <JokeItem 
                    key={res.id} 
                    likeOption 
                    text={res.value} 
                    image={res.icon_url} 
                    jokeID={res.id} 
                />
            ));
        }
        const paginateResults = paginate(allResults, currentPage, pageSize);

        return (
            <div className="container">
                <JokeItemsHeader title={headerText} count={resultCount} />
                <div className="c-jokeItems">
                    {allResults !== '' ? paginateResults : 'There is nothing to present!'}
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
    searchValue: state.joke.searchValue,
    searchResult: state.joke.searchResult
})

export default connect(mapStateToProps)(SearchResult);