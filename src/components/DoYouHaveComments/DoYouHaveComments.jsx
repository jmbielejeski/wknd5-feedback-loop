import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function DoYouHaveComments() {

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
    <label for="commentsInput">Supported?</label>
      <input 
        required 
        type="text"
        name="commentsInput" id="commentsInput"
        placeholder="Enter comments here">
      </input>
    <button onClick={handleSubmit}>Next</button>
    <button onClick={handleBack}>Back</button>

</>
  )
}

export default DoYouHaveComments;