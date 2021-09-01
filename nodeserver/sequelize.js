const Sequelize = require('Sequelize');
const sequelize = (() => {
    let instance;

    function createInstance() {
        const options = {
            host: process.env.DB_HOST,
            dialect: process.env.DB_DIALECT,
            pool: {
                max: 10,
                min: 0,
                acquire: 30000,
                idle: 10000
            }
        }

        const object = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, options);

        object.authenticate()
        .then(() => {
            console.log(`Connection to DB has been established successfully!`);
        })
        .catch((err)=> {
            console.log(`Error Occured during connecting to DB - ${err}`);
            return err;
        })

        return object;
    }

    return {
        getInstance: () => {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    }
})();

module.exports = sequelize;