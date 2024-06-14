const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('work', { page: '1' });
});

module.exports = router;
