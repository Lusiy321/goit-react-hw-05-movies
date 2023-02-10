import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieRev } from 'API/MovieAPI';
import { RevList } from 'components/RevList/RevList';
import { Loader } from 'components/Loader/Loader';

const Reviews = () => {
  const [status, setStatus] = useState('idle');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const { itemId } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        setStatus('pending');
        const data = await fetchMovieRev(itemId);
        if (!data) {
          return await Promise.reject(new Error('Try another name'));
        } else {
          setData(data);
        }
        setStatus('resolved');
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
  if (status === 'resolved') {
    return data.total_results !== 0 ? (
      <RevList data={data.results} />
    ) : (
      <p>We don't have any reviews for this movie</p>
    );
  }

  if (status === 'rejected') {
    return <h2>{error}</h2>;
  }
};

export default Reviews;
