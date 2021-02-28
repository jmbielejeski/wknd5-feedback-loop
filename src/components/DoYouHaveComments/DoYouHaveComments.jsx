import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';

// material UI imports
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';


function DoYouHaveComments() {

  // material ui 
  const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));
  // end material ui

  const dispatch = useDispatch();
  const history = useHistory();

// handle submit to send the value to Redux to store in state
const handleSubmit = (event) => {
  event.preventDefault();

  let commentsValue = document.getElementById("commentsInput").value;

  //dispatch chosen value to redux 
  dispatch({
    type: 'SET_COMMENTS_FEEDBACK',
    payload: commentsValue
  })
  history.push('/reviewFeedback')
}

const handleBack = (event) => {
  history.push('/supported');
}
  return (
    <>
    <h1>Any comments you want to leave?</h1>
    <label for="commentsInput"></label>
      <TextField 
        name="commentsInput" 
        id="commentsInput"
        placeholder="Enter comments here">
      </TextField>
    <Button onClick={handleSubmit}>Next</Button>
    <Button onClick={handleBack}>Back</Button>

</>
  )
}

export default DoYouHaveComments;