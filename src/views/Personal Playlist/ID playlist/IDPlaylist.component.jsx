import { useParams } from 'react-router-dom';
import Navigation from '../../../components/Navigation/Navigation.component';
import { useEffect } from 'react';
import { useState } from 'react';

const IDPlaylist = () => {
  const [incomingData, setIncomingData] = useState('');
  const [incomingDataTitle, setIncomingDataTitle] = useState('');
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      fetch(`http://localhost:3001/aplaylist/${params.id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          token: 'Bearer' + sessionStorage.getItem('token'),
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setIncomingData(data.content);
          setIncomingDataTitle(data.title);
        });
    };
    fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <Navigation />
      <div className='grid content-center justify-center w-full place-items-center h-dingdong'>
        <div className='text-5xl uppercase p-7'>{incomingDataTitle}</div>
        <div className='flex flex-col w-72'>
          {incomingData &&
            incomingData.map((data) => {
              return (
                <div className='p-4 m-3 text-center border' key={data._id}>
                  {data.title}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default IDPlaylist;
