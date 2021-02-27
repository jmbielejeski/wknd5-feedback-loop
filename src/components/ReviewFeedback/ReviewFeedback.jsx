import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Button } from '@material-ui/core';

// material ui imports 
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

function ReviewFeedback() {

  // material ui 
  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
      alignItems: 'center',
      justifyContent: 'center'
      
    },
    
  }));

  const classes = useStyles();
  // end material ui  

  const dispatch = useDispatch();
  const history = useHistory();

// get state from Redux
const feedbackObject = useSelector(store => store.feedbackReducer)

// handle submit to send feedback to database
const handleSubmit = (event) => {
  event.preventDefault();

  axios.post('/feedback', {
    feeling: feedbackObject.Feeling,
    understanding: feedbackObject.Understanding,
    support: feedbackObject.Supported,
    comments: feedbackObject.Comments
  })

  history.push('/feedbackSubmitted')
}

// button to go back to previous page so score can be updated/changed
const handleBack = (event) => {
  history.push('/comments');
}

  return (
    <div >
      <h1>Review Your Feedback</h1>
      <List key={feedbackObject.id}>
        <ListItem className={classes.root}>Feelings: {feedbackObject.Feeling}</ListItem>
        <ListItem className={classes.root}>Understanding: {feedbackObject.Understanding}</ListItem>
        <ListItem className={classes.root}>Support: {feedbackObject.Supported}</ListItem>
        <ListItem className={classes.root}>Comments: {feedbackObject.Comments}</ListItem>
      </List>
      <Button onClick={handleSubmit}>Next</Button>
      <Button onClick={handleBack}>Back</Button>
    </div>
  )
}

export default ReviewFeedback;