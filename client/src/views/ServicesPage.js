import {
  Box,
  Container,
  makeStyles,
  Typography,
  Button,
} from "@material-ui/core";
import React from "react";
import SliderDisktop from "../components/carousel-slider/SliderDisktop";
import { connect, useDispatch } from "react-redux";
import { openSliderDiskTop } from "../actions/sliderDiskTop-actions";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "16px",
    paddingTop: "64px",

    maxWidth: "100%",
    minHeight: "5rem",
  },
  silder: {},
}));
const ServicesPage = props => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleToggleSlider = () => {
    dispatch(openSliderDiskTop());
  };

  return (
    <Container className={classes.root}>
      <Typography variant='h3'>Services</Typography>
      <Button onClick={handleToggleSlider}>Open Slider</Button>

      <SliderDisktop open={props.sliderDisktop.sliderDisktop} mobile={false} />
      <Box my={2}>
        {[...new Array(42)]
          .map(
            () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
          )
          .join("\n")}
      </Box>
    </Container>
  );
};

const mapStateToProps = state => ({
  sliderDisktop: state.sliderDisktop,
});

export default connect(mapStateToProps)(ServicesPage);
