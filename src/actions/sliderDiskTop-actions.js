import { OPEN_SLIDER_DISKTOP, CLOSE_SLIDER_DISKTOP } from "./types";

export const openSliderDiskTop = () => (dispatch) => {
  dispatch({
    type: OPEN_SLIDER_DISKTOP,
    payload: true,
  });
};

export const closeSliderDiskTop = () => (dispatch) => {
  dispatch({
    type: CLOSE_SLIDER_DISKTOP,
    payload: false,
  });
};
