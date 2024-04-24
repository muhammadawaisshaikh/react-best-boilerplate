import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { ALL_FILMS_QUERY } from '../queries/films';

const AllFilms: React.FC<any> = () => {
    const { data, loading, error } = useQuery(ALL_FILMS_QUERY);

    if (loading) return "Loading...";
    if (error) return <pre>{error.message}</pre>

    return (
        <div className="row">
            {
                data.allFilms.films.map((film: any, index: number) => (
                    <div className="col-md-4 col-12 my-3" key={index}>
                        <div className='card p-4'>
                            <h5>{film.title}</h5>
                            <p className='mb-0'>Director: {film.director}</p>
                            <p className='mb-3'>Released At: {film.releaseDate}</p>

                            <Link to={`/film-detail/${film.id}`} className='btn btn-success'>View Details</Link>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default AllFilms;