const express = require('express');
const router = express.Router();
// const router = express();
const distanceInWords = require('date-fns/formatDistanceToNow');  // date distance in words utility

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    createdOn: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    createdOn: new Date()
  }
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages, formatDate: distanceInWords });
});


router.get('/new', (req, res) => {
  res.render('form');
})


router.post('/new', (req, res) => {
  messages.push({ text: req.body.message, user: req.body.author, createdOn: new Date() })
  res.redirect('/');
})

// router.listen(8000,"127.0.0.1");

module.exports = router;
