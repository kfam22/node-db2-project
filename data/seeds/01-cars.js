// STRETCH
const cars = [
    {
        vin: 'JH4KA3160JC002842',
        make: 'bmw',
        model: 'x5',
        mileage: 4000,
        title: 'like new bmw x5',
        transmission: 'automatic',
    },
    {
        vin: 'WD2YD241825356884',
        make: 'mercedes',
        model: 'g 550',
        mileage: 16000,
        title: 'classic g-wagon',
        transmission: 'automatic',
    },
    {
        vin: 'JH4DB2380PS000019',
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