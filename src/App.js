import logo from './logo.svg';
import {useState, useEffect} from 'react';
import './App.css';
import './styles.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MoviesGrid from './components/MoviesGrid';
import WatchList from './components/WatchList';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';

function App() {
  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  
    useEffect(() => {
        fetch("movies.json")
        .then((response) => response.json())
        .then((data) => setMovies(data));
    }, []);
    
    const addToWatchlist = (movieId) => {
      setWatchlist((prev) => prev.includes(movieId) ? prev.filter((id) => id !== movieId) : [...prev, movieId]);
    };

  return (
    <div className="App">
      <div className = "container">
        <Header />
      </div>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/watchlist">Watchlist</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<MoviesGrid movies={movies} watchlist={watchlist} addToWatchlist={addToWatchlist} />} />
          <Route path="/watchlist" element={<WatchList movies={movies} watchlist={watchlist} addToWatchlist={addToWatchlist} />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
