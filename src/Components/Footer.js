import React, { useState, useEffect } from "react";
import "./Footer.css";
import PlayCircleFilledOutlinedIcon from "@material-ui/icons/PlayCircleFilledOutlined";
import SkipPreviousOutlinedIcon from "@material-ui/icons/SkipPreviousOutlined";
import SkipNextOutlinedIcon from "@material-ui/icons/SkipNextOutlined";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import ReplayIcon from "@material-ui/icons/Replay";
import { Grid, Slider } from "@material-ui/core";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";
import { useDataLayerValue } from "../DataLayer";

const Footer = ({ spotify }) => {
  const [{ playing, crr_track }, dispatch] = useDataLayerValue();
  const handlePlayPause = () => {
    // if (!playing) spotify.play({ uri: crr_track.uri });
    dispatch({
      type: "SET_PLAYING",
      playing: !playing,
    });
  };



  return (
    <div className="footer">
      {crr_track && (
        <div className="footer_left">
          <img
            className="footer_albumLogo"
            src={crr_track?.album?.images[0].url}
            alt=""
          />
          <div className="footer_songInfo">
            <h4>
              {crr_track?.name.length > 20
                ? crr_track?.name.substr(0, 17) + "..."
                : crr_track?.name}
            </h4>
            <p>{crr_track?.artists[0]?.name}</p>
          </div>
        </div>
      )}
      <div className="footer_center">
        <ShuffleIcon className="footer_green" />
        <SkipPreviousOutlinedIcon className="footer_icon" />
        {playing ? (
          <PauseCircleFilledIcon
            onClick={() => handlePlayPause()}
            fontSize="large"
            className="footer_icon"
          />
        ) : (
          <PlayCircleFilledOutlinedIcon
            onClick={() => handlePlayPause()}
            fontSize="large"
            className="footer_icon"
          />
        )}
        <SkipNextOutlinedIcon className="footer_icon" />
        <ReplayIcon className="footer_green" />
      </div>
      <div className="footer_right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon className="footer_icon" />
          </Grid>
          <Grid item>
            <VolumeDownIcon className="footer_icon" />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
