import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';


function HowWellAreYouSupported() {

  const dispatch = useDispatch();
  const history = useHistory();

// handle submit to send the chosen option value to Redux to store in state
const handleSubmit = (event) => {
  event.preventDefault();

  let supportedValue = document.getElementById("supportedInput").value;

  // check if input field has been selected
  if (supportedValue === '') {
    alert('Please select a number');
  } else {
    //dispatch chosen value to redux 
    dispatch({
      type: 'SET_SUPPORTED_FEEDBACK',
      payload: supportedValue
    })
    history.push('/comments')
  }
}

// button to go back to previous page so score can be updated/changed
const handleBack = (event) => {
  history.push('/understanding');
}


  return (
    <>
      <h1>How well are you being supported?</h1>     
      <label for="supportedInput">Supported?</label>
        <select required name="supportedInput" id="supportedInput">
          <option value="">Please choose a number</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      <Button onClick={handleSubmit}>Next</Button>
      <Button onClick={handleBack}>Back</Button>
  </>
  )
}

export default HowWellAreYouSupported;