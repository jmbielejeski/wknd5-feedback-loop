import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Material UI imports
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// end material ui imports

function Admin() {

  // material ui 
  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  }); 
  
  const classes = useStyles();
  // end material ui

  // setting local state to hold DB Get results
  let [feedbackList, setFeedbackList] = useState([]);

  // useEffect to render results from DB
  useEffect(() => {
    //console.log('in useEffect');
    getFeedbackResults();
  }, [])

  // function to grab results from DB
  const getFeedbackResults = () => {
    //console.log('in getFeedbackResults');

    axios.get('/feedback')
      .then((res) => {
        //console.log('res.data', res.data);
        // updating local state to hold DB Get results
        setFeedbackList(res.data);
      })
      .catch((err) => {
        console.log('error getting feedback from DB', err);
      })
  }

  const removeFeedback = (event) => {
    //console.log('in removeFeedback');

    const feedbackId = event.target.dataset.id;

    axios.delete(`/feedback/${feedbackId}`)
      .then((res) => {
        //console.log('feedback removed', res);
        // refreshing the list after item is removed
        getFeedbackResults();
      })
      .catch((err) => {
        console.log('error removing feedback', err);
      })
  }

  return (
  <>
    <h1>Feedback Results!</h1>
    <Table className={classes.table} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell align="right">Feeling</TableCell>
          <TableCell align="right">Comprehension</TableCell>
          <TableCell align="right">Support</TableCell>
          <TableCell align="right">Comments</TableCell>
          <TableCell align="right">Delete</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {/* using map to go over array of feedback and render to table on DOM */}
        {feedbackList.map(feedback => {
          return (
            <TableRow key={feedback.id}>
              <TableCell align="right">{feedback.feeling}</TableCell>
              <TableCell align="right">{feedback.understanding}</TableCell>
              <TableCell align="right">{feedback.support}</TableCell>
              <TableCell align="right">{feedback.comments}</TableCell>
              <TableCell align="right"><button data-id={feedback.id} onClick={removeFeedback}>Delete</button></TableCell>
            </TableRow>
          )
      })}
      </TableBody>
    </Table>
  </>
  )
}

export default Admin;