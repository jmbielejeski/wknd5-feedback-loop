import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Admin() {

  // setting local state to hold DB Get results
  let [feedbackList, setFeedbackList] = useState([]);

  // useEffect to render results from DB
  useEffect(() => {
    console.log('in useEffect');
    getFeedbackResults();
  }, [])

  // function to grab results from DB
  const getFeedbackResults = () => {
    console.log('in getFeedbackResults');

    axios.get('/feedback')
      .then((res) => {
        console.log('res.data', res.data);
        setFeedbackList(res.data);
      })
      .catch((err) => {
        console.log('error getting feedback from DB', err);
      })
  }

  const removeFeedback = (event) => {
    console.log('in removeFeedback');

    const feedbackId = event.target.dataset.id;

    axios.delete(`/feedback/${feedbackId}`)
      .then((res) => {
        console.log('feedback removed', res);
        getFeedbackResults();
      })
      .catch((err) => {
        console.log('error removing feedback', err);
      })
  }

  return (
  <>
    <h1>Feedback Results!</h1>
    <table>
      <thead>
        <tr>
          <td>Feeling</td>
          <td>Comprehension</td>
          <td>Support</td>
          <td>Comments</td>
          <td>Delete</td>
        </tr>
      </thead>
      <tbody>
        {feedbackList.map(feedback => {
          return (
            <tr key={feedback.id}>
              <td>{feedback.feeling}</td>
              <td>{feedback.understanding}</td>
              <td>{feedback.support}</td>
              <td>{feedback.comments}</td>
              <td><button data-id={feedback.id} onClick={removeFeedback}>Delete</button></td>
            </tr>
          )
      })}
      </tbody>
    </table>
  </>
  )
}

export default Admin;