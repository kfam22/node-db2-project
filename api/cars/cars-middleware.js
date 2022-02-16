const Cars = require('./cars-model');

const checkCarId = async (req, res, next) => {
  console.log('checking car id...')
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
  console.log('checking car payload...')
}

const checkVinNumberValid = (req, res, next) => {
  console.log('validating vin number...')
}

const checkVinNumberUnique = (req, res, next) => {
  console.log('checking vin number uniqueness...')
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

