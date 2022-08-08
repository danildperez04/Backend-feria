const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('<h2>Router</h2>');
});

router.route('/').get().post();

router.route('/:id').get().patch().delete();

module.exports = router;
