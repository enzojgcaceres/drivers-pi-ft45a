const { Driver, Team } = require('../../db');

const postDriver = async (forename,surname,description,image,nationality,dob, arrTeams) => {
    const existingDriver = await Driver.findOne({
        where: {
          forename,
          surname,
        },
      });
    
      if (existingDriver) {
        const error = new Error('The driver already exists');
        error.status = 409; // Conflict
        throw error;
      }
    
    const newDriver = await Driver.create({
        forename,
        surname,
        description,
        image,
        nationality,
        dob
    })

    for (const teamName of arrTeams) {
      const [team, created] = await Team.findOrCreate({
        where: { name: teamName },
      });
      await newDriver.addTeam(team);
    }

      return newDriver;
}

module.exports = postDriver;