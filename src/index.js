import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY= "AIzaSyAT9jfyCgoKjtjBJoBWy8Cq23pQC184XHk";

//Create a new component, this component will produce some HTML
class App extends Component {

    constructor(props) {
        super(props);

        this.state = { videos : [] };

        YTSearch({ key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({ videos: videos});
            // this.setState({ videos}); when key and value are the same you can use this
        });
    }
    render() {
        return (
        
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos}/>
            </div>
        );
    } 
}

//Take this component and add it to the page
ReactDOM.render(<App />, document.querySelector('.container'));