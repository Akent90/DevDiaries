require('dotenv').config();

module.exports = {
    development: {
        database: process.env.DB_NAME,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        dialect: 'mysql',
    },
    test: {
        // Test environemnt config
    },
    production: {
        use_env_variable: 'DATABASE_URL',
    }
};