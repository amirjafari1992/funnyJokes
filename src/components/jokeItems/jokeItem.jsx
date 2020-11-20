import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import './styles/jokeItem.scss'
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { saveJokeToFavorites, deleteJokeFromFavorites } from '../../actions/jokeActions'

class JokeItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditActive: false
        }
    }
    render() {
        const {
            image,
            text,
            likeOption,
            favoriteOption,
            jokeID,
            saveJokeToFavorites,
            favoriteJokes,
            deleteJokeFromFavorites
        } = this.props;
        const { isEditActive } = this.state;

        const handleSaveJoke = (image, text, id) => {
            const joke = { image, text, id };
            const isRepeated = favoriteJokes.find(item => item.id === id);
            if (isRepeated === undefined) {
                saveJokeToFavorites(joke);
                alert('The joke has been successfully added to your favorite jokes.')
            } else {
                alert('You have already added this joke!')
            }
        }

        const handleDeleteJoke = (id) => {
            const jokes = favoriteJokes.filter(joke => joke.id !== id);
            deleteJokeFromFavorites(jokes);
        }

        const handleEdit = (id) => {
            this.setState({
                isEditActive: true
            })
        }


        return (

            <React.Fragment>
                {isEditActive && <Redirect to={"/favorites/edit/" + jokeID + '/' + text} />}

                <div className="c-jokeItem d-flex align-items-center justify-content-between">
                    <div className="text-wrap d-flex align-items-center">
                        <img src={image} alt="" className="c-jokeItem__image mr-2" />
                        <p className="c-jokeItem__text">
                            {text}
                        </p>
                    </div>

                    {likeOption && <FavoriteIcon onClick={() => handleSaveJoke(image, text, jokeID)} />}

                    {favoriteOption ? (
                        <div className="wrap">
                            <EditIcon onClick={() => handleEdit(jokeID)} className="mr-2" /> 
                            <DeleteIcon onClick={() => handleDeleteJoke(jokeID)} />  
                        </div>
                    ) : ''}
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    favoriteJokes: state.joke.favoriteJokes
})

export default connect(mapStateToProps, { saveJokeToFavorites, deleteJokeFromFavorites })(JokeItem);