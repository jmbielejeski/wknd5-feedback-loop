import axios from 'axios';
import './App.css';

import React, { useState, useEffect } from 'react';
import {
  HashRouter as Router,
  Route,
  Link,
  useHistory,
} from 'react-router-dom';

// import components
import HowAreYouFeeling from '../HowAreYouFeeling/HowAreYouFeeling';
import HowAreYouUnderstanding from '../HowAreYouUnderstanding/HowAreYouUnderstanding';
import HowWellAreYouSupported from '../HowWellAreYouSupported/HowWellAreYouSupported';
import DoYouHaveComments from '../DoYouHaveComments/DoYouHaveComments';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';
import FeedbackSubmitted from '../FeedbackSubmitted/FeedbackSubmitted';
import Admin from '../Admin/Admin'

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
          <HowAreYouFeeling />
        </Route>

        {/* route for how well are you understanding page */}
        <Route path='/understanding'>
          <HowAreYouUnderstanding />
        </Route>

        {/* route for how well are you being supported page */}
        <Route path ='/supported'>
          <HowWellAreYouSupported />
        </Route>

        {/* route for any comments page */}
        <Route path ='/comments'>
          <DoYouHaveComments />
        </Route>

        {/* route for reviewing feedback */}
        <Route path ='/reviewFeedback'>
          <ReviewFeedback />
        </Route>
    
        {/* route for feedback submitted page */}
        <Route path='/feedbackSubmitted'>
          <FeedbackSubmitted />
        </Route>

        {/* route for admin page */}
        <Route path ='/admin'> 
          <Admin />
        </Route>
      </Router>
    </div>
  );
}

export default App;
