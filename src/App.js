import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './views/Home.component';
import Authentication from './views/Auth/Authentication.component';
import Playlist from './views/Personal Playlist/PersonalPlaylist.component';
import IDPlaylist from './views/Personal Playlist/ID playlist/IDPlaylist.component';

function App() {
  return (
    <Routes>
      <Route index={true} element={<Home />} />
      <Route path='/authentication' element={<Authentication />} />
      <Route path='/playlist' element={<Playlist />} />
      <Route path={`/aplaylist/:id`} element={<IDPlaylist />} />
    </Routes>
  );
}

export default App;
