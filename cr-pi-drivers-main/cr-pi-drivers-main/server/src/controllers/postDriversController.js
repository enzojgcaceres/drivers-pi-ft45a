const { Driver, Team } = require("../db");
const axios = require("axios");

const postDriversController = async (
  forename,
  surname,
  description,
  image,
  nationality,
  dob,
  teams
) => {
  try {
    if (!forename || !surname || !description || !image || !nationality || !dob)
      throw new Error("Data missing");

    let driverDB = await Driver.findAll();
    const id = 508 + driverDB.length;
    const createDriver = await Driver.create({
      id: id,
      forename,
      surname,
      description,
      image,
      nationality,
      dob,
    });

    await createDriver.addTeams(teams);

    return createDriver;
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = { postDriversController };