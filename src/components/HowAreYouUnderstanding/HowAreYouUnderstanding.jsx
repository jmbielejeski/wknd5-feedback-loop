import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function HowAreYouUnderstanding() {

  const dispatch = useDispatch();
  const history = useHistory();

// handle submit to send the chosen option value to Redux to store in state
const handleSubmit = (event) => {
  event.preventDefault();

  let understandingValue = document.getElementById("understandingInput").value;

  //dispatch chosen value to redux 
  dispatch({
    type: 'SET_UNDERSTANDING_FEEDBACK',
    payload: understandingValue
  })
  history.push('/supported')
}

  return (
    
    <>
      <h1>How well are you understanding the content?</h1>
      <label for="understandingInput">Understanding?</label>
        <select required name="understandingInput" id="understandingInput">
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

export default HowAreYouUnderstanding;