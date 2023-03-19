//@desc Get all Movies
//@route GET /api/Movies
//@access public
const getMovies = (req, res) => {
  res.status(200).json({ message: "Get all movies" });
};

//@desc create new Movie
//@route POST /api/Movies
//@access public
const createMovie = (req, res) => {
  console.log(req.body);
  //   const { name, email, phone } = req.body;
  //   if (!name || !email || !phone) {
  //     res.status(400);
  //     throw new Error("All feilds are required");
  //   }
  res.status(200).json({ message: "Create movie" });
};

//@desc get Movie
//@route GET /api/Movies/:id
//@access public
const getMovie = (req, res) => {
  res.status(200).json({ message: `Get movie for ${req.params.id}` });
};

//@desc update Movie
//@route PUT /api/Movies/:id
//@access public
const updateMovie = (req, res) => {
  res.status(200).json({ message: `Update movie for ${req.params.id} ` });
};

//@desc delete Movie
//@route DELETE /api/Movies/:id
//@access public
const deleteMovie = (req, res) => {
  res.status(200).json({ message: `delete movie for ${req.params.id} ` });
};

module.exports = {
  getMovies,
  getMovie,
  createMovie,
  updateMovie,
  deleteMovie,
};
