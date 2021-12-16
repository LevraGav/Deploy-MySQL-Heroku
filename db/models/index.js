const Sequelize = require('sequelize');

const sequelize = new Sequelize('mysql://sql6459425:XrAVS23p9f@sql6.freemysqlhosting.net:3306/sql6459425');

module.exports = {
    sequelize,
    Hewan: require('./Hewan')(sequelize)
}
