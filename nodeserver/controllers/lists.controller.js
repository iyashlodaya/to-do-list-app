const db = require('../models')

const List = require = db.lists;
const Op = db.Sequelize.Op;

exports.create = async (req, res) => {
    const record = await List.create(req.body);
    console.log(`Record -> ${record}`);
    return res.json(record);
}