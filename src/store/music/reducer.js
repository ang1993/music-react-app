import {
    POST_SPOTIFY,
    POST_SPOTIFY_OK,
    POST_SPOTIFY_FAIL
} from "./actionTypes"

const initialState = {
    token: {},
    loadingPetition: false,
    error: {
        message: ""
    }
}

export default function SpotifyReducer(state = initialState, action){

    switch(action.type) {
        
        case POST_SPOTIFY:
            state = {...state, loadingPetition: true}
        break

        case POST_SPOTIFY_OK:
            state = {...state, loadingPetition: false, token: action.payload}
        break 

        case POST_SPOTIFY_FAIL:
            state = {...state, loadingPetition: false, token: {}, error: {message: action.payload}}
        break
        default:
            break
    }

    return state
}