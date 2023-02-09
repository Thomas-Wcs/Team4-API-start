import React, { useState, useEffect } from 'react';
import NavBar from '../navBar/NavBar';
import Footer from '../footer/Footer';
import './HomePage.css';
import getMovies from './GetMovies';
import QuestionContainer from '../questionContainer/QuestionContainer';

const defaultPoster =
  'https://via.placeholder.com/500x750.png?text=Image+not+available';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  console.log(movies);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      const results = await getMovies(query);
      setMovies(results);
    };
    fetchMovies();
  }, [query]);

  return (
    <div>
      <NavBar />
      <h1 className='page-title'>Kesqu'onRegarde</h1>
      <div className='search-container'>
        <input
          className='search-input'
          type='text'
          placeholder='Cherchez votre film...'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className='question-section'>
        <QuestionContainer />
        <section className='movies-section'>
          {movies.map((movie) => (
            <article className='movie-card' key={movie.id}>
              <div className='movie-poster'>
                <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                      : defaultPoster
                  }
                  alt={movie.title}
                />
              </div>
              <p className='movie-title'>{movie.title}</p>
              {/* <p className='movie-title'>{movie.popularity}</p> */}
              {/* <p className='movie-title'>{movie.overview}</p> */}
            </article>
          ))}
        </section>
      </div>
      <Footer />
    </div>
  );
};
export default HomePage;
