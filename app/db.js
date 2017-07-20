module.exports = require('knex')(require('./knexfile')[process.env.NODE_ENV || 'development']);
console.log(process.env.NODE_ENV);
console.log(process.env.DATABASE_URL);
