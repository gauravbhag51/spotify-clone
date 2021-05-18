import React, { useState, useEffect } from 'react';
import "./SongRow.css";
import { useDataLayerValue } from "../DataLayer";
const SongRow = ({track,onclick}) => {
    const[{crr_track},dispatch]=useDataLayerValue()
    // const handleclick=()=>{
    //     // console.log(playing);
    //         dispatch({
    //             type:"SET_PLAYING",
    //             playing:!playing,
    //         })

    // }
    const handleClick=()=>{
        dispatch({
            type:"SET_TRACK",
            crr_track:track,
          })
    }
    
    // console.log(track);
    return (
        <div className="songRow" onClick={()=>handleClick()}>
            <div className="songRow_info">
                <img className="songRow_album" src={track.album.images[0].url} alt="" />
                <h1>{track.name}</h1>
                <p>{track.artists.map((artist)=>artist.name).join(', ')}
                </p>
            </div>
        </div>
    );
};

export default SongRow;