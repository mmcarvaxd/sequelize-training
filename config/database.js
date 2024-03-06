let sequelizeConfig = {
    username: 'root',
    password: '@MedPortal@#',
    database: 'empresa',
    host: 'mysql-treinamento',
    port: '3306',
    dialect: 'mysql',
    logging: true,
    dialectOptions: {
        multipleStatements: true,
    }
}

module.exports = sequelizeConfig
