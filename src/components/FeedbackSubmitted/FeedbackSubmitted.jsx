import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';



function FeedbackSubmitted() {

  const history = useHistory();
  const dispatch = useDispatch();


  // on button click reset state and send back to first page
  const handleSubmit = (event) => {
    history.push('/');
    dispatch({
      type: 'CLEAR_FEEDBACK_REDUCER',
    })
  }

  return (
    <>
      <h1>Feedback Submitted!</h1>
      <div>
        <h2>Thank you!</h2>
        <Button onClick={handleSubmit}>Leave New Feedback</Button>
      </div>
    </>  
  )
}

export default FeedbackSubmitted;