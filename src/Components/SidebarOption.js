import React from 'react';
import "./SidebarOption.css";
import { useDataLayerValue } from "../DataLayer";

const SidebarOption = ({text,Icon,id,spotify}) => {
    const [{ playlists }, dispatch] = useDataLayerValue();
    const handleClick=(id)=>{
        spotify.getPlaylist(id).then((response) => {
          dispatch({
            type: "SET_CRR_PLAYLIST",
            crr_playlist: response,
            crr_track: response?.tracks?.items[0].track,
          });
        });
      }
    return (
        <div className="sidebarOption">
          {Icon && <h4><Icon className="sidebarIcon">{Icon}</Icon></h4> } 
            {Icon?<h4>{text}</h4>:<p onClick={()=>handleClick(id)}>{text}</p>}
        </div>
    );
};

export default SidebarOption;