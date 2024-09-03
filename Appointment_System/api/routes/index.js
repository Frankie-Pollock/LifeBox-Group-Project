var express = require('express');
var router = express.Router();

/* GET home page. */
//router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
//});

const ObjectId = require('mongodb').ObjectId

// GET route to get all appointments

router.get('/appointments', (req, res, next) => {
  req.collection.find({})
  .toArray()
  .then(results => res.json(results))
})

// POST route to make all appointments

router.post('/appointments', (req, res, next) => {
  const {firstName, lastName, email, phoneNumber, appointmentDate} = req.body;
  if (! firstName || !lastName || !email || !phoneNumber || !appointmentDate) {
    return res.status(400).json({
      message: "All fields require data. Please try again."
    })
  }


  const payload = {firstName, lastName, email, phoneNumber, appointmentDate};
  req.collection.insertOne(payload)
  .then(result => res.json(result))
})


// DELETE route to cancel and delete appointments

router.delete('/appointments/:id', (req, res, next) => {
  const {id} = req.params;
  const _id = ObjectId(id);

  req.collection.deleteOne({_id})
  .then(result => res.json(result));
})

module.exports = router;
