import axios from "axios";

const fetchMovies = async (title, setState) => {
  await axios
    .get(`http://www.omdbapi.com/?apikey=48fdc589&s=${title}&page=3`)
    .then(res => setState(res.data))
    .catch(err => console.log(err));
};

export { fetchMovies };
