import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import { editJokeFromFavorites } from '../../actions/jokeActions'




class EditJoke extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newJokeText: this.props.match.params.text,
            isDone: false
        }
    }

    handleChange = e => {
        this.setState({ newJokeText: e.currentTarget.value });
    }

    render() {
        const { id, text } = this.props.match.params;
        const {editJokeFromFavorites, favoriteJokes} = this.props;
        const {newJokeText, isDone} = this.state;

        const handleUpdateJoke = (id) => {
            let jokes = favoriteJokes.filter(joke => joke.id !== id );
            let newJoke = favoriteJokes.find(joke => joke.id === id);
            newJoke.text = newJokeText;
            jokes.unshift(newJoke)

            editJokeFromFavorites(jokes)
            this.setState({
                isDone: true
            })
        }
        return (
            <React.Fragment>

                {(isDone || favoriteJokes.length === 0) && <Redirect to="/favorites/" />}

                <div className="container">
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Change the joke text and then click to update button</label>
                        <textarea
                            class="form-control"
                            rows="3"
                            onChange={this.handleChange}
                        >
                            {newJokeText}
                        </textarea>
                        <button onClick={() => handleUpdateJoke(id, text)}>Update the joke</button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    favoriteJokes: state.joke.favoriteJokes
})

export default connect(mapStateToProps, {editJokeFromFavorites}) (EditJoke);
