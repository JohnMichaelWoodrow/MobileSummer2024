import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import MovieList from './components/MovieList'
import moviesData from './movies.json'

function App() {
  return (
    <div className="App">
      <NavBar />
      <MovieList movies={moviesData.movies} />
    </div>
  );
}

export default App;
