import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY= "AIzaSyAT9jfyCgoKjtjBJoBWy8Cq23pQC184XHk";

//Create a new component, this component will produce some HTML
class App extends Component {

    constructor(props) {
        super(props);

        this.state = { 
            videos : [],
            selectedVideo: null
         };

         this.videoSearch('surfboards');
        
    }

    videoSearch(term) {

        YTSearch({ key: API_KEY, term: term}, (videos) => {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0]
            
            
            });
            // this.setState({ videos}); when key and value are the same you can use this
        });

    }

    render() {

        const videoSearch = _.debounce( (term) => {this.videoSearch(term), 300});

        return (
            <div>
                <SearchBar onSearchTermCHange={ term => this.videoSearch(term) } />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                videos={this.state.videos}/>
            </div>
        );
    } 
}

//Take this component and add it to the page
ReactDOM.render(<App />, document.querySelector('.container'));