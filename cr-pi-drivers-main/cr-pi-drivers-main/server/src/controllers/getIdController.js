const axios = require("axios");
const { Driver, Team } = require("../db");

const getIdController = async (id) => {
  if (isNaN(id)) {
    const user = await Driver.findByPk(id, {
      include: {
        model: Team,
        attributes: ["teams"],
        through: {
          attributes: [],
        },
      },
    });
    const { image: url, 
      surname, 
      forename, 
      description, 
      Teams, 
      dob,
      nationality  
    } = user;
    return {
      description, 
      teams: Teams.map(item => item.teams).join(', '),
      name: {forename, surname,}, 
      image: {url},
      dob,
      nationality
    };
  }
  const response = await axios.get(`http://localhost:5000/drivers/${id}`);
  const user = response.data;
  return user;
};

module.exports = { getIdController };
