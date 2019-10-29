import React, { Component } from 'react';
import './App.css';
import { Grid } from '@material-ui/core';

import { SearchBar, VideoDetail, VideoList } from './Components';
import youtube from './Components/api/youtube';

class App extends Component {

  state = {
    videos: [],
    selectedVideo: null
  }

  componentDidMount() {
    this.handleSubmit('avengers');
  }

  handleSubmit = async (searchTerm) => {
    const response = await youtube.get("search", { params: {
      part: 'snippet',
      maxResults: 5,
      key: 'AIzaSyAPyDVK6A2_HtZgW_wia-xdqVFXNyIF-N4',
      q: searchTerm
    }});
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    })
    console.log(response.data.items);
  }

  onVideoSelect = (video) => {
    this.setState({
      selectedVideo: video
    })
  }

  render() {
    const { selectedVideo, videos } = this.state;

    return (
      <Grid container spacing={10}>
        <Grid item xs={12} spacing={10}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              <VideoDetail video={selectedVideo} />
            </Grid>
            <Grid item xs={4}>
              <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
