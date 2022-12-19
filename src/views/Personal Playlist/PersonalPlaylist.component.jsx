import { useEffect, useState } from 'react';
import Navigation from '../../components/Navigation/Navigation.component';

const Playlist = () => {
  const [playlistList, setPlaylistList] = useState()

  useEffect(() => {
    const getPlaylist = async () => {
      const sessionToken = sessionStorage.getItem('token');
      fetch('http://localhost:3001/playlist-list', {
        method: 'GET', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
          token: 'Bearer' + sessionToken,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setPlaylistList(data);
        });
    };

    getPlaylist();
  }, []);

  return (
    <div>
      <Navigation />
      <div className='grid content-center justify-center w-full place-items-center h-dingdong'>
        <div className='flex flex-col w-72'>
          {playlistList &&
            playlistList.map((data) => {
              return (
                <a
                  href={`/aplaylist/${data._id}`}
                  className='p-4 m-3 text-center border hover:bg-slate-300 active:bg-slate-400'
                  key={data._id}
                >
                  {data.title}
                </a>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Playlist;
