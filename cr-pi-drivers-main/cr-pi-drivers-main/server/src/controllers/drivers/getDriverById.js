const axios = require("axios"); 
const { Driver, Team } = require("../../db")

const getDriverById = async (id)=>{
    let driverById;

    if(isNaN(id)) {
        driverById = await Driver.findByPk(id, { include: Team });
        if(!driverById) {
            throw new Error(`The Driver with ID ${id} not found in the db`);
        }
    } else {
        try {
            const response = await axios.get(`http://locahost:5000/drivers/${id}`);
            driverById = response.data; 
        } catch (error) {
            throw new Error(`Driver with ID ${id} not found in the API`);
        }
    }

    return driverById;
}

module.exports = getDriverById;