import React from 'react';
import '../styles.css';
import MovieCard from './MovieCard';

export default function WatchList( { movies, watchlist, addToWatchlist }) {
    return (
        <div>
            <h1 className="title">Your Watchlist</h1>
            <div className='watchlist'>{
                watchlist.map((movieId) => {
                    const movie = movies.find((m) => m.id === movieId);
                    return movie ? <MovieCard key={movie.id} movie={movie} amIInWatchlist={true} addToWatchlist={addToWatchlist} /> : null;
                })
            }</div>
        </div>
    )
}