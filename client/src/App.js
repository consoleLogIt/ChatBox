import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import {Join, Chat} from './Components'

function App(props) {
    return (
        <Router>
            <Route path = '/' exact component ={Join}></Route>
            <Route path = '/chat' exact component ={Chat}></Route>
            

        </Router>
    );
}

export default App;