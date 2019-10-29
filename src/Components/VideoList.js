import React from 'react';

import { Grid } from '@material-ui/core';
import VideoItem from './VideoItem'

const VideoList = ({ videos, onVideoSelect }) => {

    const List = videos.map((item, id) => <VideoItem onVideoSelect={onVideoSelect} key={id} video={item}/>)

    return (
        <Grid container spacing={2}>
            {List}
        </Grid>
    )
}

export default VideoList;