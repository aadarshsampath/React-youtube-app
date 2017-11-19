import ReactDOM from 'react-dom'
import React, {Component} from 'react'
import SearchBar from './Components/searchBar';
import YTSearch from 'youtube-api-search';
import VideoList from './Components/videoList';
import VideoDetails from './Components/videoDetails'

const API_KEY = 'AIzaSyAIFY3rMzaXTmrRp2wPXnNlMABGZCtfBNU';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      videos: [],
      selectedVideo : null
    };
    this.videoSearch('surfboards')
  }

  videoSearch(term){
    YTSearch({key: API_KEY, term:term}, (videos) =>{
      this.setState({
        videos:videos,
        selectedVideo:videos[0]
      })
    });
  }
  render(){
    return(
      <div>
        <SearchBar onSearchTermChange ={term => this.videoSearch(term)}/>
        <VideoDetails video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container') );