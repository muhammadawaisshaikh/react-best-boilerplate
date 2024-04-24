import { gql } from "@apollo/client";

export const ALL_FILMS_QUERY = gql`
    query {
        allFilms {
            films {
                id
                title
                director
                releaseDate
            }
        }
    }
`;

export const SINGLE_FILM_QUERY = gql`
  query Film($filmId: ID!) {
    film(id: $filmId) {
      id
      title
      created
      director
      producers
      releaseDate
      openingCrawl
      episodeID
    }
  }
`;