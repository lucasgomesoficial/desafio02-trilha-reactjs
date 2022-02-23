import { Header } from "./Header";
import { MovieCard } from "./MovieCard";

type ContentProps = {
  title: string;
  movies: {
    imdbID: string;
    Title: string;
    Poster: string;
    Ratings: {
      Source: string;
      Value: string;
    }[];
    Runtime: string;
  }[]
}

export function Content({title, movies}: ContentProps) {
  return (
    <div className="container">
      <Header title={title} />

      <main>
        <div className="movies-list">
          {movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
