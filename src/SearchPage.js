import React from 'react'
import TuneOutLinedIcon from "@material-ui/icons/TuneOutlined"
import './SearchPage.css';
import ChannelRow from './ChannelRow'
import VideoRow from './VideoRow'
const SearchPage = () => {
    return (
        <div className="search">
            <div className="searchPage_filter">
                <TuneOutLinedIcon />
                <h2>Filter</h2>
            </div>
            <hr />
            <ChannelRow
                image="https://i.ibb.co/mhMHwQS/unnamed.jpg"
                channel="InfoSkillx"
                // verified = ""
                subs="1.5k"
                noOfvideos={382}
                description="Hello, Welcome to my channel.. You will find here tutorial videos tricks and ideas related to web development and programming skills on this channel."
            />
            <hr />
            <VideoRow
                title="Travel Website Banner|Maldives|Website Banner|Web Development|Web Design|UIUX"
                views="2.3M views"
                timestamp="3 days ago"
                channel="InfoskillX"
                image="https://img.youtube.com/vi/hd9q-md_4eo/mqdefault.jpg"
            />
            <VideoRow
                title="Google Search Page UI using HTML & CSS | Web Development | Web Design"
                views="2.3M views"
                timestamp="3 days ago"
                channelImage="https://i.ibb.co/mhMHwQS/unnamed.jpg"
                channel="InfoskillX"
                image="https://img.youtube.com/vi/cZ6AOYj8yEA/mqdefault.jpg"
            />
            <VideoRow
                title="Contact Info Design | CSS3 | Advanced Hover Effect | Web Development"
                views="2.3M views"
                timestamp="3 days ago"
                channelImage="https://i.ibb.co/mhMHwQS/unnamed.jpg"
                channel="InfoskillX"
                image="https://img.youtube.com/vi/NoBC1FZ7_wc/mqdefault.jpg"
            />
            <VideoRow
                title="Real-Time-Chat-Application Using Socket.io & node.js | Web development | Chat App| HTML | CSS | JS"
                views="2M views"
                timestamp="3 days ago"
                channelImage="https://i.ibb.co/mhMHwQS/unnamed.jpg"
                channel="InfoskillX"
                image="https://img.youtube.com/vi/e1masVp-xDw/mqdefault.jpg"
            />
            <VideoRow
                title="User account Dropdown using HTML CSS & JS | web development | web design"
                views="2.3M views"
                timestamp="3 days ago"
                channelImage="https://i.ibb.co/mhMHwQS/unnamed.jpg"
                channel="InfoskillX"
                image="https://img.youtube.com/vi/lgU9c6WVG3s/mqdefault.jpg"
            />
            <VideoRow
                title="Glowing Login Form UI Design | Web Development | Web Designing | HTML5 | CSS3"
                views="2.3M views"
                timestamp="3 days ago"
                channelImage="https://i.ibb.co/mhMHwQS/unnamed.jpg"
                channel="InfoskillX"
                image="https://img.youtube.com/vi/EvhPS6g-6JM/mqdefault.jpg"
            />
            <VideoRow
                title="Social Media Icon Advanced Hover Effect | CSS | HTML | WEB DEVELOPMENT"
                views="2.3M views"
                timestamp="3 days ago"
                channelImage="https://i.ibb.co/mhMHwQS/unnamed.jpg"
                channel="InfoskillX"
                image="https://img.youtube.com/vi/enfrt0xQKII/mqdefault.jpg"
            />
            <VideoRow
                title="CSS Neumorphism cards | Advanced CSS Effects | Web Development | Web Design"
                views="2.3M views"
                timestamp="3 days ago"
                channelImage="https://i.ibb.co/mhMHwQS/unnamed.jpg"
                channel="InfoskillX"
                image="https://img.youtube.com/vi/KJIln2rQ-eg/mqdefault.jpg"
            />
            <VideoRow
                title="Responsive Navigation Bar Using HTML CSS & JAVASCRIPT | Web Development | Web Design"
                views="2.3M views"
                timestamp="3 days ago"
                channelImage="https://i.ibb.co/mhMHwQS/unnamed.jpg"
                channel="InfoskillX"
                image="https://img.youtube.com/vi/YvV15EE6weo/mqdefault.jpg"
            />
            
        </div>
    )
}

export default SearchPage
