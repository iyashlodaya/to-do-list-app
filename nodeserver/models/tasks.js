
module.exports = (sequelize, Sequelize) => {
    return sequelize.define('List', {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        list_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        created_at: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: sequelize.fn('now')
        },
        updated_at: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: sequelize.fn('now')
        }
    }, {
        tableName: 'lists',
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    });
};