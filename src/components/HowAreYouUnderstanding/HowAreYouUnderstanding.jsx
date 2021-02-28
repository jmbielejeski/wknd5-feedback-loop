import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';

// Material UI imports
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
// end Material UI imports

function HowAreYouUnderstanding() {

  // stuff for material UI
  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }));

  const classes = useStyles();
  // end stuff for material UI

  const dispatch = useDispatch();
  const history = useHistory();

// handle submit to send the chosen option value to Redux to store in state
const handleSubmit = (event) => {
  event.preventDefault();

  let understandingValue = document.getElementById("understandingInput").value;

   // check if input field has been selected
  if (understandingValue === '') {
    alert('Please select a number');
  } else {
    //dispatch chosen value to redux 
    dispatch({
      type: 'SET_UNDERSTANDING_FEEDBACK',
      payload: understandingValue
    })
    history.push('/supported')
  }
} // end handleSubmit

// button to go back to previous page so score can be updated/changed
const goBackToPreviousPage = (event) => {
  history.push('/');
} // end goBackToPreviousPage

  return (
  <>
    <h1>How well are you understanding the content?</h1>
      <FormControl variant="filled" className={classes.formControl}></FormControl>
        <InputLabel htmlFor="understandingInput"></InputLabel>
          <Select 
            native
            name="understandingInput" 
            id="understandingInput"
            >
            <option value="">Please choose a number</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Select>
        <Button onClick={handleSubmit}>Next</Button>
        <Button onClick={goBackToPreviousPage}>Back</Button>
  </>
  )
}

export default HowAreYouUnderstanding;