const { Router } = require('express');

const allDriversHandler = require('../handlers/drivers/allDriversHandler');
const driversByIdHandler = require('../handlers/drivers/driversByIdHandler');
const driversByNameHandler = require('../handlers/drivers/driversByNameHandler');
const postDriversHandler = require('../handlers/drivers/postDriversHandler');
const deleteDriverHandler = require('../handlers/drivers/deleteDriverHandler');
const updateDriverHandler = require('../handlers/drivers/updateDriverHandler');


const driversRouter = Router()
driversRouter.get('/', allDriversHandler);
driversRouter.get('/name', driversByNameHandler);
driversRouter.get('/:id', driversByIdHandler);
driversRouter.post('/', postDriversHandler)
driversRouter.delete('/:id', deleteDriverHandler)
driversRouter.put('/:id', updateDriverHandler)

module.exports = driversRouter;