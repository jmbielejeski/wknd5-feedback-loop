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

function HowAreYouFeeling() {

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

  let feelingValue = document.getElementById("feeling-input").value;

  // check if input field has been selected
  // if input is not selected then alert them to select a number
  if (feelingValue === '') {
    alert('Please select a number');
  } else {
    //dispatch chosen value to redux 
    dispatch({
      type: 'SET_FEELING_FEEDBACK',
      payload: feelingValue
    })
    // navigate to understanding page
    history.push('/understanding')
  }
} // end handleSubmit

  return (
    <>
      <h1>How are you feeling today?</h1>
        <FormControl variant="filled" className={classes.formControl}></FormControl>
          <InputLabel htmlFor="feeling-input"></InputLabel>
            <Select 
              native 
              name="feeling-input" 
              id="feeling-input"
            >
              <option value="">Please choose a number</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </Select>
          <Button onClick={handleSubmit}>Next</Button>
    </>
  )
}

export default HowAreYouFeeling;
