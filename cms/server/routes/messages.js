var express = require('express');
var router = express.Router();

// The remaining content of these files will be completed in the next assignment.

router.get('/', (req, res, next) => {
  console.log('Hello from GET router')
})

router.post('/', (req, res, next) => {
  console.log('Hello from POST router')
})

router.put('/', (req, res, next) => {
  console.log('Hello from PUT router')
})

router.delete('/', (req, res, next) => {
  console.log('Hello from DELETE router')
})

module.exports = router;
