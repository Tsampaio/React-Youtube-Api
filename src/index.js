import React from 'react';
import ReactDOM from 'react-dom';

//Create a new component, this component will produce some HTML

const App = function() {

    return <div>Hi!!</div>;
}

//Take this component and add it to the page

ReactDOM.render(<App />, document.querySelector('.container'));