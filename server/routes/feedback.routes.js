const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// POST route to take feedback from submission and send to DB
router.post('/', function (req, res) {
  console.log('in post route');
  const feedbackItem = req.body;
  const queryText =
    `INSERT INTO "feedback"
      ("feeling", "understanding", "support", "comments")
      VALUES
      ($1, $2, $3, $4)`;
  
    pool.query(queryText, [feedbackItem.feeling, feedbackItem.understanding, feedbackItem.support, feedbackItem.comments])
      .then((res) => {
        console.log('res', res);
        res.sendStatus(200);
      })
      .catch((err) => {
        console.log('error posting feedback', err);
        res.sendStatus(500);
      })
}); // end post route

module.exports = router;