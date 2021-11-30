const bookStall = require('./bookstall');

const router = require('express').Router();

router.use('/api',bookStall);

module.exports = router;