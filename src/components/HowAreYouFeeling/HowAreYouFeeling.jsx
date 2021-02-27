import { Link } from 'react-router-dom';

function HowAreYouFeeling() {
  return (
    <>
      <h1>How are you feeling today?</h1>
      <form>
        <label for="dropdown">Feeling?</label>
        <select id="dropdown">
          <option value ='1'>1</option>
          <option value ='2'>2</option>
          <option value ='3'>3</option>
          <option value ='4'>4</option>
          <option value ='5'>5</option>
        </select>
        <Link to="/understanding">Next</Link>
      </form>
    </>
  )
}

export default HowAreYouFeeling;