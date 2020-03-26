import {
    OPEN_SIDEBAR,
    CLOSE_SIDEBAR
} from "./types"

export const openSideBar = () => dispatch => {
    dispatch({
        type: OPEN_SIDEBAR,
        payload: {
            open: 'open'
        }
    })
}

export const closeSideBar = () => dispatch => {
    dispatch({
        type: CLOSE_SIDEBAR,
        payload: {
            open: 'closed'
        }
    })
}