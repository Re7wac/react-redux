import React, { useState } from "react";
import { Typography, Container, Box, makeStyles } from "@material-ui/core";

import {
  Slide,
  AutoRotatingCarousel,
} from "../components/main-content/carousel-slider";
const { withStyles } = require("@material-ui/core/styles");
const { red, blue, green } = require("@material-ui/core/colors");

const styles = {
  root: {
    backgroundColor: red[600],
    height: 400,
    width: 800,
  },
  media: {
    backgroundColor: red[400],
  },
};

const StyledSlide = withStyles(styles)(Slide);

const Button = require("@material-ui/core/Button").default;
const useStyles = makeStyles((theme) => ({
  root: {
    padding: "16px",
    paddingTop: "64px",

    maxWidth: "100%",
    minHeight: "5rem",
  },
}));
const ServicesPage = () => {
  const classes = useStyles();
  const [state, setState] = useState({ open: true });
  //  <StyledSlide
  //    media={
  //      <img src="http://www.icons101.com/icon_png/size_256/id_79394/youtube.png" />
  //    }
  //    title="This is a very cool feature"
  //    subtitle="Just using this will blow your mind."
  //    mobile
  //    landscape
  //  />;
  return (
    <Container className={classes.root}>
      <Typography variant="h3">Services</Typography>

      <div>
        <Button onClick={() => setState({ open: true })}>Open carousel</Button>
        <AutoRotatingCarousel
          label="Get started"
          open={state.open}
          onClose={() => setState({ open: false })}
          onStart={() => setState({ open: false })}
          mobile
          autoplay={false}
          style={{ position: "absolute" }}
        >
          <Slide
            media={
              <img src="http://www.icons101.com/icon_png/size_256/id_79394/youtube.png" />
            }
            mediaBackgroundStyle={{ backgroundColor: red[400] }}
            style={{ backgroundColor: red[600] }}
            title="1 This is a very cool feature"
            subtitle="Just using this will blow your mind."
          />
          <Slide
            media={
              <img src="http://www.icons101.com/icon_png/size_256/id_80975/GoogleInbox.png" />
            }
            mediaBackgroundStyle={{ backgroundColor: blue[400] }}
            style={{ backgroundColor: blue[600] }}
            title="2 Ever wanted to be popular?"
            subtitle="Well just mix two colors and your are good to go!"
          />
          <Slide
            media={
              <img src="http://www.icons101.com/icon_png/size_256/id_76704/Google_Settings.png" />
            }
            mediaBackgroundStyle={{ backgroundColor: green[400] }}
            style={{ backgroundColor: green[600] }}
            title="3 May the force be with you"
            subtitle="The Force is a metaphysical and ubiquitous power in the Star Wars fictional universe."
          />
          <Slide
            media={
              <img src="http://www.icons101.com/icon_png/size_256/id_76704/Google_Settings.png" />
            }
            mediaBackgroundStyle={{ backgroundColor: green[400] }}
            style={{ backgroundColor: green[600] }}
            title="4 May the force be with you"
            subtitle="The Force is a metaphysical and ubiquitous power in the Star Wars fictional universe."
          />
          <Slide
            media={
              <img src="http://www.icons101.com/icon_png/size_256/id_76704/Google_Settings.png" />
            }
            mediaBackgroundStyle={{ backgroundColor: green[400] }}
            style={{ backgroundColor: green[600] }}
            title="5 May the force be with you"
            subtitle="The Force is a metaphysical and ubiquitous power in the Star Wars fictional universe."
          />
          <Slide
            media={
              <img src="http://www.icons101.com/icon_png/size_256/id_76704/Google_Settings.png" />
            }
            mediaBackgroundStyle={{ backgroundColor: green[400] }}
            style={{ backgroundColor: green[600] }}
            title="6 May the force be with you"
            subtitle="The Force is a metaphysical and ubiquitous power in the Star Wars fictional universe."
          />
        </AutoRotatingCarousel>
      </div>
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
