const { Sequelize } = require ('sequelize');

const cc = new Sequelize({  
    dialect: 'postgres',
    host:'localhost',
    username: 'postgres',
    password:'bani12',
    database:'computer repair',
    logging: false,
});

module.exports = { cc };
