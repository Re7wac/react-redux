import {
    SET_DARK_THEME,
    SET_LIGHT_THEME,
    SET_SOLAR_THEME,
    SET_BODY_CLASS
} from "../actions/types";

const initialState = {
    theme: 'dark',
    bodyClass: []

}
const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DARK_THEME:
            return {
                ...state, theme: action.payload
            };
        case SET_LIGHT_THEME:
            return {
                ...state, theme: action.payload
            };
        case SET_SOLAR_THEME:
            return {
                ...state, theme: action.payload
            };

            case SET_BODY_CLASS:
                return {
                    ...state,
                    bodyClass: action.payload
                };

        default:
            return state;

    }
}

export default themeReducer;