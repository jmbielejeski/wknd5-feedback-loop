import React from 'react';
import axios from 'axios';
import './App.css';

import React, { useState, useEffect } from 'react';
import {
  HashRouter as Router,
  Route,
  Link,
  useHistory,
} from 'react-router-dom';


function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

    <Router>
        {/* route for how ware you feeling page */}
        <Route exact path ='/'>

        </Route>

        {/* route for how well are you understanding page */}
        <Route path='/understanding'>

        </Route>

        {/* route for how well are you being supported page */}
        <Route path ='/supported'>
          
        </Route>

        {/* route for any comments page */}
        <Route path ='/comments'>
          
        </Route>

        {/* route for reviewing feedback */}
        <Route path ='/reviewFeedback'>
          
        </Route>
    
        {/* route for feedback submitted page */}
        <Route path='/feedbackSubmitted'>

        </Route>
      </Router>
    </div>
  );
}

export default App;
