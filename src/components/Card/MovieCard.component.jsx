import { useContext } from 'react';
import { UserContext } from '../../context/user.context';

const MovieCard = () => {
  const { movieData } = useContext(UserContext);
  const { Title, Genre, Poster, Released } = movieData;
  console.log(movieData);

  return (
    <div>
      {movieData.Response === "False" ? (
        <div>Movie not found. Please check the name again.</div>
      ) : (
        <div className='flex flex-col items-center justify-center h-auto border-2 rounded-lg w-72'>
          <div className='flex flex-col items-center justify-center m-8'>
            <div>
              <img src={Poster} alt='' className='h-80' />
            </div>
            <p className='p-4 text-3xl text-center uppercase'>{Title}</p>
            <p className='p-3'>{Genre}</p>
            <p>{Released}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
