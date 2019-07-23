import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import AuthorQuiz from './AuthorQuiz';
import * as serviceWorker from './serviceWorker';

// APP.js
/*let model = {clicks:5};
function render(){
    ReactDOM.render(<App 
        clicks={model.clicks} 
        onClick={()=>{model.clicks += 1; render()}} />, document.getElementById('root'));
}
render();*/

// AuthorQuiz.js

ReactDOM.render(<AuthorQuiz />, document.getElementById('root'));
serviceWorker.unregister();
