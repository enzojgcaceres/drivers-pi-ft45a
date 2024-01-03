const axios = require("axios");
const { Driver, Team } = require('../../db');
const noImg = "https://i.imgur.com/Ks7SbZt.png"

let allDrivers = []

const getAllDrivers = async (name) => {

    const allDriversDb = await Driver.findAll({
        include: {
            model: Team,
            attributes: ["name"],
            through: {
                attributes: []
            },
        }
    });

    const peticion = (await axios("http://localhost:5000/drivers")).data;
    const allDriversApi = peticion.map((driver)=>{
        return {
            id: driver.id,
            forename: driver.name.forename,
            surname: driver.name.surname,
            description: driver.description || "",
            image: driver.image.url || noImg,
            nationality: driver.nationality,
            dob: driver.dob,
            teams: driver.teams,
        }
    })

    allDrivers = [...allDriversApi, ...allDriversDb];

    if (name) {
        driversByName = allDrivers.filter((driver)=>
       driver.forename.toLowerCase().startsWith(name.toLowerCase()));
       if(driversByName.length) {
        return driversByName.slice(0, 15);
       } else {
        throw new Error(`No match found for name: ${name}`);
       }
    }

    return allDrivers

}

module.exports = getAllDrivers;