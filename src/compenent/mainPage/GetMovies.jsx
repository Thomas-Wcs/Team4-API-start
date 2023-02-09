import axios from 'axios';

const getMovies = async (query = '') => {
  const defaultQuery = 'lover';
  query = query.trim() || defaultQuery;
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=e5952f2708f5284e252d4e51b51aec21&query=${query}`
    );
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};

export default getMovies;
