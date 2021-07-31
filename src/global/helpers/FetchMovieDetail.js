import axios from "axios";

const fetchOneMovie = async (title, setState) => {
  await axios
    .get(`http://www.omdbapi.com/?apikey=48fdc589&i=${title}&plot=full`)
    .then(res => setState(res.data))
    .catch(err => console.log(err));
};

export { fetchOneMovie };
