import React, { useState } from 'react';
import './VideSidebar.css'
import FavoriteIcon from '@material-ui/icons/Favorite';
import  ShareIcon  from '@material-ui/icons/Share';
import  MessageIcon  from '@material-ui/icons/Message';
import FavoriteBorderedIcon from '@material-ui/icons/FavoriteBorder'

const VideoSidebar = ({likes, shares, messages}) => {
    const [liked,setLiked] = useState(false)
    return (
        <div className="videoSidebar">
            <div className="videoSidebar_button">
                {
                    liked ? ( <FavoriteIcon fontSize="large"
                    onClick={(e)=> setLiked(false)}
                    />):
                    (
                        <FavoriteBorderedIcon fontSize="large"
                        onClick={(e)=> setLiked(true)}/>
                    )
                }
           
            <p>{liked ? likes +1:likes}</p>
            </div>
            <div className="videoSidebar_button">
               <MessageIcon fontSize="large"/>
            <p>{messages}</p>
            </div>
            <div className="videoSidebar_button">
                <ShareIcon fontSize="large"/>
            <p>{shares}</p>
            </div>
        </div>
    );
};

export default VideoSidebar;