import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY= "AIzaSyAT9jfyCgoKjtjBJoBWy8Cq23pQC184XHk";

//Create a new component, this component will produce some HTML

const App = () => {
    return (
    
        <div>
            <SearchBar />
        </div>
    ); 
}

//Take this component and add it to the page

ReactDOM.render(<App />, document.querySelector('.container'));