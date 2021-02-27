import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function HowAreYouFeeling() {

  const dispatch = useDispatch();
  const history = useHistory();

// handle submit to send the chosen option value to Redux to store in state
const handleSubmit = (event) => {
  event.preventDefault();

  let feelingValue = document.getElementById("feelingInput").value;

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
    history.push('/understanding')
  }
}

  return (
    <>
      <h1>How are you feeling today?</h1>
        <label for="feelingInput">Feeling?</label>
          <select required name="feelingInput" id="feelingInput">
            <option value="">Please choose a number</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        <button onClick={handleSubmit}>Next</button>
    </>
  )
}

export default HowAreYouFeeling;

{/*  */}