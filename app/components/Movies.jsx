"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Loading from "../loading";
import AddMovie from "./AddMovie";

async function getMovies() {
  const response = await fetch("/api/movies");
  const movies = await response.json();
  return movies;
}

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    getMovies().then((m) => {
      setMovies(m);
      setLoading(false);
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`/api/movies/search?query=${query}`);
    const newMovies = await response.json();
    setMovies(newMovies);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search movies here"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="input input-bordered w-full max-w-xs"
        />
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>
      <AddMovie />

      {movies.map((movie) => (
        <div className="card w-96 bg-base-100 shadow-xl" key={movie.id}>
          <figure>
            <img src={movie.image} alt={movie.title} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{movie.title}</h2>
            <p>{movie.description}</p>
            <div className="card-actions justify-end">
              <Link className="btn btn-primary" href={movie.link}>
                More
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Movies;
