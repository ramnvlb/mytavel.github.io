import React, {Component} from 'react';
import './VideoSection.css';
class VideoSection extends Component {
    constructor (props) {
        super(props);

        this.state = {
            videoURL: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4'
        }
    }

    render () {
        return (
            <video id="background-video" loop  controls  poster="/images/video_img/video.png">>
                <source src={this.props.url} type="video/mp4" />
                <source src={this.props.url} type="video/ogg" />
                Your browser does not support the video tag.
            </video>

        )
    }
};

export default VideoSection;
