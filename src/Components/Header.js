import React from 'react';
import "./Header.css";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { Avatar } from '@material-ui/core';
import { useDataLayerValue } from"../DataLayer"
const Header = ({spotify}) => {
    const[{user},dispatch]=useDataLayerValue();
    return (
        <div className="header">
            <div className="header_left">
                <SearchOutlinedIcon />
                <input placeholder="Search for Artists, songs, playlists" type="text"></input>
            </div>
            <div className="header_right">
                <Avatar src={user?.images[0]?.url} alt={user?.display_name}/>
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    );
};

export default Header;