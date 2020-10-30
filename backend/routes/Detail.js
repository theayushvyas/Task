const router = require('express').Router();
const Detail = require('../models/Detail.model');

router.route('/').get((req, res) => {
  Detail.find()
    .then(Detail => res.json(Detail))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/').post((req, res) => {
  const Firstname = req.body.Firstname;
  const Lastname  = req.body.Lastname;
  const address = req.body.address;
  const email = req.body.email;

  const detail = new Detail({
    Firstname,
    Lastname,
    address,
    email,
  });
detail.save()
  .then(() => res.json('User added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Detail.findById(req.params.id)
    .then(Detail => res.json(Detail))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Detail.findByIdAndDelete(req.params.id)
    .then(() => res.json('User deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Detail.findById(req.params.id)
    .then(detail => {
      detail.Firstname = req.body.Firstname;
      detail.Lastname = req.body.Lastname;
      detail.address = req.body.address;
      detail.email = req.body.email;

      detail.save()
        .then(() => res.json('User updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;