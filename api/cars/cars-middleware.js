const Cars = require('./cars-model');
const vinValidator = require('vin-validator');

const checkCarId = async (req, res, next) => {
  try{
    const car = await Cars.getById(req.params.id)
    if(!car){
      next({status: 404, message: `car with id ${req.params.id} is not found`})
    } else{
      req.car = car
      next()
    }
  } catch(err){
    next(err)
  }
}


const checkCarPayload = (req, res, next) => {
  if(!req.body.vin) return next({
    status: 400, message: 'vin is missing'
  })
  if(!req.body.make) return next({
    status: 400, message: 'make is missing'
  })
  if(!req.body.model) return next({
    status: 400, message: 'model is missing'
  })
  if(!req.body.mileage) return next({
    status: 400, message: 'mileage is missing'
  })
  next()
}

const checkVinNumberValid = async (req, res, next) => {
  const { vin } = req.body
  if(vinValidator.validate(vin)){
    next()
  } else {
    next({ status: 400, message: `vin ${vin} is invalid`})
  }
}

const checkVinNumberUnique = async (req, res, next) => {
  try{
    const vinExists = await Cars.getByVin(req.body.vin)
    if(!vinExists){
      next()
    } else {
      next({ status: 400, message: `vin ${req.body.vin} already exists`})
    }
  } catch(err){
    next(err)
  }
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
}

// - `checkCarPayload` returns a status 400 with a `{ message: "<field name> is missing" }` if any required field is missing.

//   - `checkVinNumberValid` returns a status 400 with a `{ message: "vin <vin number> is invalid" }` if the vin number is [invalid](https://www.npmjs.com/package/vin-validator).

//   - `checkVinNumberUnique` returns a status 400 with a `{ message: "vin <vin number> already exists" }` if the vin number already exists in the database.

