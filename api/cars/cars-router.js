const Cars = require('./cars-model');
const router = require('express').Router();
const { 
    checkCarId, 
    checkCarPayload, 
    checkVinNumberValid, 
    checkVinNumberUnique 
} = require('./cars-middleware');

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
router.get('/:id', checkCarId, async (req, res, next) => {
    res.json(req.car);
})

// create car (&return new car)
router.post('/', 
checkCarPayload, 
checkVinNumberValid, 
checkVinNumberUnique, 
async (req, res, next) => {
    console.log('posting new car')
    // try{
    //     const post = await Cars.create(req.body)
    //     res.status(201).json(post);
    // } catch(err) {
    //     next(err);
    // }
})

module.exports = router;