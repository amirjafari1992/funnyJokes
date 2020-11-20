import React from 'react';
import './styles/categories.scss'
import CategoryItem from './categoryItem';
import { connect } from 'react-redux';
import { fetchJokesByCategory } from '../../actions/jokeActions';


const Categories = (props) => {
    const categories = props.categories.map(cat => (
        <CategoryItem 
            onRequestPerCat={props.fetchJokesByCategory} 
            categoryName={cat} 
            key={cat}
        />
    ))

    return (
        <div className="c-categories nav-scroller bg-white shadow-sm">
            <nav className="nav nav-underline">
                <span className="c-categories__title nav-link"><b>Categories:</b> </span>
                <CategoryItem 
                    onRequestPerCat={props.fetchJokesByCategory} 
                    categoryName="Random" 
                />
                {categories}
            </nav>
        </div>
    );
}

const mapStateToProps = (state) => ({
    categories: state.joke.categories
})

export default connect(mapStateToProps, {fetchJokesByCategory})(Categories);