import React from 'react'
import './Video.css';
import Avatar from "@material-ui/core/Avatar"

const Video = ({image,title,channel,views,timestamp,channelImage}) => {
    return (
        <div className="video">
            <img  src={image} alt="" />
            <div className="video_Info">
            <img className="video_avatar" alt={channel} src={channelImage} />
            <div className="video_Text">
                <h4>{title}</h4>
                <p>{channel}</p>
                <p>
                    {views} & {timestamp}
                </p>
            </div>
            </div>
        </div>
    )
}

export default Video
