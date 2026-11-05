import React, {useState} from 'react';
import '../styles.css';
import MovieCard from './MovieCard';

export default function MoviesGrid({ movies, watchlist, addToWatchlist }) {
    
    const [searchTerm, setSearchTerm] = useState('');
    const [genreFilter, setGenreFilter] = useState('All genres');
    const [ratingFilter, setRatingFilter] = useState('All ratings');


    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    }

    const handleGenreFilter = (event) => {
        setGenreFilter(event.target.value);
    }

    const handleRatingFilter = (event) => {
        setRatingFilter(event.target.value);
    }

    const matchesGenre = (movie, genre) => {
        return genre === 'All genres' || movie.genre.toLowerCase() === genre.toLowerCase();
    };

    const matchesRating = (movie, rating) => {
        if (rating === 'All ratings') {
            return true;
        } else if (rating === 'Good') {
            return movie.rating >= 8;
        } else if (rating === 'Okay') {
            return movie.rating >= 6 && movie.rating < 8;
        }   else if (rating === 'Bad') {  
            return movie.rating < 6;
        } else {
            return false;
        }
    };
    
    const matchesSearchTerm = (movie, searchTerm) => {
        return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
    }

    const filteredMovies = movies.filter((movie) =>
        matchesGenre(movie, genreFilter) &&
        matchesSearchTerm(movie, searchTerm) &&
        matchesRating(movie, ratingFilter)
    );
    return (
        <div>
            <div>
                <input
                    type="text"
                    placeholder="Search movies..."
                    className="search-input"
                    value={searchTerm}  
                    onChange={handleSearch}
                />
                <div className="filter-bar">
                    <div className="filter-slot">
                        <label>Genre:</label>
                        <select className="filter-dropdown" value={genreFilter} onChange={handleGenreFilter}>
                            <option>All genres</option>
                            <option>Action</option>
                            <option>Fantasy</option> 
                            <option>Drama</option>
                            <option>Horror</option>
                        </select>
                    </div>
                    <div className="filter-slot">
                        <label>Rating:</label>
                        <select className="filter-dropdown" value={ratingFilter} onChange={handleRatingFilter}>
                            <option>All ratings</option>
                            <option>Good</option>
                            <option>Okay</option> 
                            <option>Bad</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='movies-grid'>{
                filteredMovies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} amIInWatchlist={watchlist.includes(movie.id)} addToWatchlist={addToWatchlist} />
                ))
            }</div>
        </div>
    );
}