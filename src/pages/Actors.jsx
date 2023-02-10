import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieAct } from 'API/MovieAPI';
import { Loader } from 'components/Loader/Loader';
import { ActorsBlock } from 'components/ActorsList/ActorsBlock';

const Actors = () => {
  const [status, setStatus] = useState('idle');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const { itemId } = useParams();
  useEffect(() => {
    async function fetchData() {
      try {
        setStatus('pending');
        const data = await fetchMovieAct(itemId);
        if (!data) {
          return await Promise.reject(new Error('Try another name'));
        } else {
          setData(data);
        }
        setStatus('resolve');
      } catch (error) {
        setStatus('rejected');
        setError(error.message);
      }
    }
    fetchData();
  }, [itemId]);

  if (status === 'idle') {
    return <p>idle</p>;
  }
  if (status === 'pending') {
    return <Loader />;
  }
  if (status === 'resolve') {
    return <ActorsBlock data={data} />;
  }
  if (status === 'rejected') {
    return <h3>{error}</h3>;
  }
};
export default Actors;
