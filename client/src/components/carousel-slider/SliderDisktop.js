import React from "react";
import { AutoRotatingCarousel } from ".";
// import { withStyles } from "@material-ui/core";
import Slide from "./Slide";
import { red, blue, green } from "@material-ui/core/colors";
import { useDispatch } from "react-redux";
import { closeSliderDiskTop } from "../../actions/sliderDiskTop-actions";

const SliderDisktop = props => {
  // const styles = {
  //   root: {
  //     backgroundColor: red[600],
  //     height: 400,
  //     width: 800,
  //   },
  //   media: {
  //     backgroundColor: red[400],
  //   },
  // };
  console.log(props.mobile);

  const dispatch = useDispatch();
  return (
    <div>
      <AutoRotatingCarousel
        label='Get started'
        open={props.open}
        onClose={() => dispatch(closeSliderDiskTop())}
        onStart={() => dispatch(closeSliderDiskTop())}
        autoplay={false}
        mobile={props.mobile}
        style={{ position: "absolute" }}
      >
        <Slide
          media={
            <img
              src='http://www.icons101.com/icon_png/size_256/id_79394/youtube.png'
              alt=''
            />
          }
          mediaBackgroundStyle={{ backgroundColor: red[400] }}
          style={{ backgroundColor: red[600] }}
          title='1 This is a very cool feature'
          subtitle='Just using this will blow your mind.'
        />
        <Slide
          media={
            <img
              src='http://www.icons101.com/icon_png/size_256/id_80975/GoogleInbox.png'
              alt=''
            />
          }
          mediaBackgroundStyle={{ backgroundColor: blue[400] }}
          style={{ backgroundColor: blue[600] }}
          title='2 Ever wanted to be popular?'
          subtitle='Well just mix two colors and your are good to go!'
        />
        <Slide
          media={
            <img
              src='http://www.icons101.com/icon_png/size_256/id_76704/Google_Settings.png'
              alt=''
            />
          }
          mediaBackgroundStyle={{ backgroundColor: green[400] }}
          style={{ backgroundColor: green[600] }}
          title='3 May the force be with you'
          subtitle='The Force is a metaphysical and ubiquitous power in the Star Wars fictional universe.'
        />
        <Slide
          media={
            <img
              src='http://www.icons101.com/icon_png/size_256/id_76704/Google_Settings.png'
              alt=''
            />
          }
          mediaBackgroundStyle={{ backgroundColor: green[400] }}
          style={{ backgroundColor: green[600] }}
          title='4 May the force be with you'
          subtitle='The Force is a metaphysical and ubiquitous power in the Star Wars fictional universe.'
        />
        <Slide
          media={
            <img
              src='http://www.icons101.com/icon_png/size_256/id_76704/Google_Settings.png'
              alt=''
            />
          }
          mediaBackgroundStyle={{ backgroundColor: green[400] }}
          style={{ backgroundColor: green[600] }}
          title='5 May the force be with you'
          subtitle='The Force is a metaphysical and ubiquitous power in the Star Wars fictional universe.'
        />
        <Slide
          media={
            <img
              src='http://www.icons101.com/icon_png/size_256/id_76704/Google_Settings.png'
              alt=''
            />
          }
          mediaBackgroundStyle={{ backgroundColor: green[400] }}
          style={{ backgroundColor: green[600] }}
          title='6 May the force be with you'
          subtitle='The Force is a metaphysical and ubiquitous power in the Star Wars fictional universe.'
        />
      </AutoRotatingCarousel>
    </div>
  );
};

export default SliderDisktop;
