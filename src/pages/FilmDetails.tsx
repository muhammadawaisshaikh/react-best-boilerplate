import { useQuery } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router-dom';
import { SINGLE_FILM_QUERY } from '../queries/films';

const FilmDetails: React.FC<any> = () => {
    const { id } = useParams();

    const { data, loading, error } = useQuery(SINGLE_FILM_QUERY, {
        variables: {
            filmId: id
        }
    });

    if (loading) return "Loading...";
    if (error) return <pre>{error.message}</pre>

    return (
        <div>
            {
                data?.film?.id ?
                    (<div>
                        <h2>{data?.film?.title}</h2>
                        <p><strong>Released At:</strong> {data?.film?.releaseDate}</p>
                        <p><strong>Director:</strong> {data?.film?.director}</p>
                        <p><strong>Opening Crawl:</strong> {data?.film?.openingCrawl}</p>
                        <p><strong>Producers:</strong> {data?.film?.producers.toString()}</p>
                    </div>)
                    :
                    (<p>{error}</p>)
            }
        </div>
    );
};

export default FilmDetails;