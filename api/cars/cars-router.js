const Cars = require('./cars-model');
const router = require('express').Router();

// get cars
router.get('/', async (req, res, next) => {
   try{
        const cars = await Cars.getAll()
        res.json(cars);
   } catch(err) {
       next(err);
   }
});

// get car by id
router.get('/', (req, res, next) => {

})

// create car (&return new car)
router.get('/', (req, res, next) => {

})

module.exports = router;