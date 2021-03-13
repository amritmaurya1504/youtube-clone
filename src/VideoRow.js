import React from 'react'
import './VideoRow.css'
const VideoRow = ({ title, views, timestamp, channel, image }) => {
    return (
        <div className="videoRow">
            <img src={image} alt="" />
            <div className="video_text">
                <h3>{title}</h3>
                <p className="head">
                    {channel} + {views} 
                </p>
                <p>{timestamp}</p>
            </div>
        </div>
    )
}

export default VideoRow
