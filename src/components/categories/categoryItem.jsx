import React from 'react';

const CategoryItem = (props) => {
    const { categoryName, onRequestPerCat } = props;
    return (
        <span 
            onClick={() => onRequestPerCat(categoryName)} 
            className="c-categories__category nav-link">
                {categoryName}
        </span>
    );
}

export default CategoryItem;