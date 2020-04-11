import {
  Box,
  Container,
  makeStyles,
  Typography,
  Button,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import SliderDisktop from "../components/main-content/carousel-slider/SliderDisktop";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "16px",
    paddingTop: "64px",

    maxWidth: "100%",
    minHeight: "5rem",
  },
  silder: {},
}));
const ServicesPage = () => {
  const [slider, setSlider] = useState(true);

  const classes = useStyles();
  const openSlider = () => {
    setSlider(!slider);
  };

  return (
    <Container className={classes.root}>
      <Typography variant="h3">Services</Typography>
      <Button onClick={openSlider}>Open Slider</Button>

      <SliderDisktop open={slider} />
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

export default ServicesPage;
