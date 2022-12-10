const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')




router.get('/:id', (req, res) => {
  // Add query to get all genres


  const query = `SELECT genres.name FROM movies
  JOIN movies_genres ON movies.id = movies_genres.movie_id
  JOIN genres ON movies_genres.genre_id = genres.id
  WHERE movies.id = $1;`;
  pool.query(query, [req.params.id])
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all movies', err);
      res.sendStatus(500)
    })

  console.log('in get genre router',req.params.id);


});


module.exports = router;