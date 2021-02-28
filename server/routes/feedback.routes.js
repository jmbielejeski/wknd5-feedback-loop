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

// GET route to grab feedback data from DB
router.get('/', (req, res) => {
  console.log('in get route');


  pool.query(`SELECT * FROM "feedback" ORDER BY "id" DESC`)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('error in GET feedback', error);
      res.sendStatus(500);
    })
}) // end GET route

// DELETE route to remove item from DB
router.delete('/:id', (req, res) => {

  let feedbackId = req.params.id;
  
  let sqlText = `DELETE FROM "feedback" WHERE id=$1`;

  pool.query(sqlText, [feedbackId]).then((result) => {
    res.sendStatus(200);
  })
  .catch((err) => {
    console.log('error in delete', err);
    res.sendStatus(500);
  })
})

module.exports = router;