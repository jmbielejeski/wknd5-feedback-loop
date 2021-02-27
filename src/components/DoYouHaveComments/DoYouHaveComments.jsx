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
  return (
    <>
    <h1>Any comments you want to leave?</h1>
    <label for="commentsInput">Supported?</label>
      <input 
      required 
      type="text"
      name="commentsInput" id="commentsInput">
      </input>
    <button onClick={handleSubmit}>Next</button>
</>
  )
}

export default DoYouHaveComments;