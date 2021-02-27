import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Button } from '@material-ui/core';


function ReviewFeedback() {

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
    <>
      <h1>Review Your Feedback</h1>
      <ul key={feedbackObject.id}>
        <li>Feelings: {feedbackObject.Feeling}</li>
        <li>Understanding: {feedbackObject.Understanding}</li>
        <li>Support: {feedbackObject.Supported}</li>
        <li>Comments: {feedbackObject.Comments}</li>
      </ul>
      <Button onClick={handleSubmit}>Next</Button>
      <Button onClick={handleBack}>Back</Button>
    </>
  )
}

export default ReviewFeedback;