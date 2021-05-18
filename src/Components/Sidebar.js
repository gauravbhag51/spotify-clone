import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import { useDataLayerValue } from "../DataLayer";
import LibraryMusicOutlinedIcon from "@material-ui/icons/LibraryMusicOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
const Sidebar = ({spotify}) => {


  
  const [{ playlists }, dispatch] = useDataLayerValue();
  return (
    <div className="sidebar">
      <img
        className="sidebar_logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=" "
      />
      <SidebarOption Icon={HomeOutlinedIcon} text="Home" />
      <SidebarOption Icon={SearchOutlinedIcon} text="Search" />
      <SidebarOption Icon={LibraryMusicOutlinedIcon} text=" Your Library" />
      <br />
      <strong className="sidebar_title">PLAYLISTS</strong>
      <hr />
      {
      
      playlists?.map((playlist)=>(
        <SidebarOption text={playlist.name} id={playlist.id} spotify={spotify}/>
      
        ) )
      }
    </div>
  );
};

export default Sidebar;
