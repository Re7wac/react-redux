import {
    SET_THEME
} from './types'

export const setTheme = (payload) => dispatch => {
    dispatch({
        type: SET_THEME,
        payload: payload

    })
}