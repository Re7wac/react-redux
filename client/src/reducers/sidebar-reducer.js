import {
    OPEN_SIDEBAR,
    CLOSE_SIDEBAR
} from "../actions/types";

const initialState = {
    open: "closed"
}
const sideBarReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_SIDEBAR:
            return {
                ...state, open: action.payload
            };
        case CLOSE_SIDEBAR:
            return {
                ...state, open: action.payload
            };
        default:
            return state;
    }
};

export default sideBarReducer;