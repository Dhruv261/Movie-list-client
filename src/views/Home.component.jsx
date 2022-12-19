import { useContext } from 'react';
import AddToPlaylist from '../components/HomePlaylistButtons/AddToPlaylist.component';
import CreatePlaylist from '../components/HomePlaylistButtons/CreatePlaylist.component';
import Navigation from '../components/Navigation/Navigation.component';
import SearchBar from '../components/Search Bar/Search-bar.component';
import MovieCard from '../components/Card/MovieCard.component';
import { UserContext } from '../context/user.context';

const Home = () => {
  const { userLogged, movieData } = useContext(UserContext);

  return (
    <div>
      <Navigation />
      <SearchBar />
      <div className='flex w-full h-rex justify-evenly place-items-center'>
        {movieData && (
          <div>
            <MovieCard />
          </div>
        )}
        {userLogged && (
          <div className='w-80'>
            <div className='m-5'>
              <AddToPlaylist />
            </div>
            <div className=''>
              <CreatePlaylist />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
