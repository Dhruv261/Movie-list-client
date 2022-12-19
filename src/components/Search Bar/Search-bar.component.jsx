import { useContext } from 'react';
import { useState } from 'react';
import { UserContext } from '../../context/user.context';

const SearchBar = () => {
  const [movieName, setMovieName] = useState('');
  const { setMovieData } = useContext(UserContext);
  const data = { movieName };
  const searchMovie = async (e) => {
    e.preventDefault();
    // console.log(e.key)
    // if(e.key === 'Enter') {
    fetch('http://localhost:3001/movie', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => setMovieData(data))
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className='flex justify-center m-8'>
      <form onSubmit={searchMovie}>
        <input
          type='text'
          placeholder='Search Movie'
          className='px-8 py-4 text-2xl text-center border-2 border-gray-400 rounded-lg outline-0 cursor active:outline-cyan-500'
          onChange={(e) => setMovieName(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchBar;
