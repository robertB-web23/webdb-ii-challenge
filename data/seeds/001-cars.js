exports.seed = function(knex) {
  return knex('cars').insert([
    {
      make: 'chevy',
      model: 'impala',
      year: 1964,
      mileage: 145000
    },
    {
      make: 'ford',
      model: 'focus',
      year: 2016,
      mileage: 45000
    },
    {
      make: 'cadillac',
      model: 'escalade',
      year: 2018,
      mileage: 15000
    },
    {
      make: 'honda',
      model: 'accord',
      year: 2006,
      mileage: 195000
    }
  ]);
};


