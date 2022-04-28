const { DataTypes } = require ('sequelize');
const { cc } = require ('../utils/database');

const Repair = cc.define ('repairs' , {
    id: {
        primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
},
date: {
    type: DataTypes.DATE,
    allowNull: false,
},
status: {
    type: DataTypes.STRING,
    defaultValue: 'pending',
},

userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});
module.exports = { Repair };

//repairs - valuedefault: pending

