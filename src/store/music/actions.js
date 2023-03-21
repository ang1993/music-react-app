import axios from 'axios'
import {
    POST_SPOTIFY,
    POST_SPOTIFY_OK,
    POST_SPOTIFY_FAIL
} from "./actionTypes"

const CLIENT_ID = "2126d80a66b449e3858979ebc5280782";
const CLIENT_SECRET = "091981b0889942c592e8cd6e05f2e7b4"

//Acción para enviar permisos a spotify:

export function actionAuthParameters() {
    return {
        type: POST_SPOTIFY
    }
}

export function actionAuthParametersOk(token) {
    return {
        type: POST_SPOTIFY_OK,
        payload: token
    }
}

export function actionAuthParametersFail(error) {
    return {
        type: POST_SPOTIFY_FAIL,
        payload: error
    }
}

// Autentificación Spotify:

export function postAuthSpotify(){
    const authParameters = {
        method: 'POST',
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
        },
        body:  `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
    }
    return async (dispatch) => {
        dispatch(actionAuthParameters())
        try {                
            const response = await axios.post('https://accounts.spotify.com/api/token', authParameters)
            dispatch(actionAuthParametersOk(response.acces_token))
            }
        catch(error) {
            dispatch(actionAuthParametersFail(error))
            }
    }
        

}
    