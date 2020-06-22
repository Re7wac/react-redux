import { OPEN_SLIDER_DISKTOP, CLOSE_SLIDER_DISKTOP } from "../actions/types";

const initialState = {
  sliderDisktop: false,
};
const sliderDisktopReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_SLIDER_DISKTOP:
      return {
        ...state,
        sliderDisktop: action.payload,
      };
    case CLOSE_SLIDER_DISKTOP:
      return {
        ...state,
        sliderDisktop: action.payload,
      };
    default:
      return state;
  }
};

export default sliderDisktopReducer;
