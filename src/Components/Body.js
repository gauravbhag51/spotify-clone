import React from "react";
import "./Body.css";
import Header from "./Header";
import SongRow from "./SongRow";
import { useDataLayerValue } from "../DataLayer";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const Body = ({ spotify }) => {
  const [{ crr_playlist }, dispatch] = useDataLayerValue();
  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body_info">
        <img src={crr_playlist?.images[0]?.url} alt="" />
        <div className="body_infoText">
          <strong>PLAYLIST</strong>
  <h2>{crr_playlist?.name}</h2>
          <p>{crr_playlist?.description}</p>
        </div>
      </div>
      <div className="body_icons">
        <PlayCircleFilledIcon className="body_shuffle" />
        <FavoriteIcon fontSize="large" />
        <MoreHorizIcon />
      </div>
      <div className="body_songs">
        {crr_playlist?.tracks.items.map(
          (item) => (
            <SongRow track={item.track} />
          )
        )}
      </div>
    </div>
  );
};

export default Body;
