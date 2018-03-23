import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY= "AIzaSyAT9jfyCgoKjtjBJoBWy8Cq23pQC184XHk";

//Create a new component, this component will produce some HTML

const App = () => {

    return <div>Hi Telmo!!</div>;
}

//Take this component and add it to the page

ReactDOM.render(<App />, document.querySelector('.container'));