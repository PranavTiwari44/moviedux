import React from 'react';
import '../styles.css';

export default function Header() {
  return (
    <div className="header">
      <img src="logo.png" alt="MovieDux Logo" className="logo" />
      <h2 className="app-subtitle">It's time for popcorn! Discover Your Next Favorite Movie</h2>
    </div>
  );
}
