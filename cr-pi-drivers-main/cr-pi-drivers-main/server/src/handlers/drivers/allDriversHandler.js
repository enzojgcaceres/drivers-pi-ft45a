const getAllDrivers = require('../../controllers/drivers/getAllDrivers');

const allDriversHandler = async (req, res) => {
    try {
        const allDrivers = getAllDrivers();
        res.status(200).json(allDrivers);
    } catch (error) {
        res.status(400).json ({ error: error.message });
    }
}

module.exports = allDriversHandler