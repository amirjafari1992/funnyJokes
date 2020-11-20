import { types } from '../actions/types';
import jokeReducer from './jokeReducer';



describe('Jokes Reducer' , () => {
    it('Should return new joke from server', () => {
        const joke = [{id: 'asd213123', title: 'asdasdasdd', icon_url: 'asdasad'}];
        const newState = jokeReducer(undefined, {
            type: types.FETCH_JOKE,
            joke: joke
        });
        expect(newState).toEqual(joke);
    })
})