import axios from "axios";

const fetchMovies = async (title, setState, page) => {
  await axios
    .get(`http://www.omdbapi.com/?apikey=48fdc589&s=${title}&page=${page}`)
    .then(res => setState(res.data))
    .catch(err => console.log(err));
};

export { fetchMovies };
