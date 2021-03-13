import { Avatar } from '@material-ui/core'
import React from 'react'
import './ChannelRow.css'
const ChannelRow = ({
    image ,channel,subs ,noOfvideos , description 
}) => {
    return (
        <div className="ChannelRow">
            <img className="logo" alt={channel} src={image} />
            <div className="channerRow_Text">
                <h4>{channel}</h4>
                <p>
                    {subs} Subscribers + {noOfvideos} Videos
                </p>
                <p>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default ChannelRow
