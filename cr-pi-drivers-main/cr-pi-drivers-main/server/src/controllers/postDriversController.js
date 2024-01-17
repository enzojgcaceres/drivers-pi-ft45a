const { Driver } = require("../db");

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
    console.log("texto")
    // let driverDB = await Driver.findAll();
    // const id = 508 + driverDB.length;
    const createDriver = await Driver.create({
      // id,
      forename,
      surname,
      description,
      image,
      nationality,
      dob,
    });

    
    
      
    // const teamsEntity = await teams.findByPk(teams[0])


    await createDriver.addTeams(teams);

    return createDriver;
  } catch (error) {
    throw error;
  }
};

module.exports = { postDriversController };