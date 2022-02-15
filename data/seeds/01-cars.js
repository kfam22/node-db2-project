// STRETCH
const cars = [
    {
        vin: '1111111111111',
        make: 'bmw',
        model: 'x5',
        mileage: 4000,
        title: 'like new bmw x5',
        transmission: 'automatic',
    }
    {
        vin: '1111111111111',
        make: 'mercedes',
        model: 'g 550',
        mileage: 16000,
        title: 'classic g-wagon',
        transmission: 'automatic',
    }
    {
        vin: '1111111111111',
        make: 'tesla',
        model: 'model x',
        mileage: 41000,
    }
]
//async, await
exports.seed = async function(knex){
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}

//.then method
// exports.seed = function(knex){
//     return knex('cars')
//     .truncate().then(()=>{
//         return knex('cars').insert(cars)
//     })
// }