import {
    SET_DARK_THEME,
    SET_LIGHT_THEME,
    SET_SOLAR_THEME,
    SET_BODY_CLASS
} from './types'

export const setDarkTheme = () => dispatch => {
    dispatch({
        type: SET_DARK_THEME,
        payload: {
            theme: 'dark'
        }
    })
}

export const setLightTheme = () => dispatch => {
    dispatch({
        type: SET_LIGHT_THEME,
        payload: {
            theme: 'light'
        }
    })
}

export const setSolarTheme = () => dispatch => {
    dispatch({
        type: SET_SOLAR_THEME,
        payload: {
            theme: 'solar'
        }
    })
}

export const setBodyClass = () => dispatch => {
    dispatch({
        type: SET_BODY_CLASS,
        payload: {
            body: ['xxx']
        }
    })
}