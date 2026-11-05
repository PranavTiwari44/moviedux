<div align="center">
  <img src="public/logo.png" alt="MovieDux" width="220" />
  <p><strong>It's time for popcorn! Discover your next favorite movie.</strong></p>

  ![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
  ![React Router](https://img.shields.io/badge/React_Router-6-CA4245?logo=reactrouter&logoColor=white)
  ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
</div>

## About

A simple movie browsing app I built with React. Search for a movie, filter by genre or rating, and add the ones you like to your watchlist.

## Features

- Search movies by title
- Filter by genre and rating
- Add or remove movies from your watchlist

## Run it locally

```bash
git clone <your-repo-url>
cd moviedux
npm install
npm start
```

Then open [localhost:3000](http://localhost:3000).

## Movie data

The movies come from `public/movies.json` and the posters are in `public/images/`. To add a movie, drop in a poster and add an entry:

```json
{
  "id": 21,
  "title": "Your Movie",
  "image": "21.jpg",
  "genre": "drama",
  "rating": "8.0"
}
```

## To do

- Save the watchlist so it survives a page refresh
