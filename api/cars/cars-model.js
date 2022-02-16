const db = require('../../data/db-config');

const getAll = () => {
  console.log('getting all...')
  return db('cars');
}

const getById = id => {
  console.log('getting by id...')
  return db('cars')
  .where('id', id)
  .first();
}

const create = async car => {
  console.log('creating new car...')
  const [id] = await db('cars').insert(car);
  return getById(id);
};

module.exports = {
  getAll,
  getById,
  create
}
