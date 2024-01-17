const { postDriversController } = require("../controllers/postDriversController");

const postDriversHandler = async (req, res) => {
  try {
    const { forename, surname, description, image, nationality, dob, teams } = req.body;
    const response = await postDriversController(
      forename,
      surname,
      description,
      image,
      nationality,
      dob,
      teams
    );

   return res.status(201).json(response);
  } catch (error) {
    res.status(409).send({ error: error.message });
  }
};

module.exports = { postDriversHandler };