import React from 'react';
import './styles/jokeItemsHeader.scss'


const JokeItemsHeader = (props) => {
    const { title, count } = props;

    return (
        <div className="c-jokeItemsHeader">
            <span className="c-jokeItemsHeader__title">{title}</span>
            {count > 0 && <span className="c-jokeItemsHeader__jokes-count">Number of Items: {count}</span>}
        </div>
    );
}

export default JokeItemsHeader;