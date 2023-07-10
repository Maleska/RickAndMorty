// import logo from './logo.svg';
import imagenRickMortyh from './img/rick-morty.png';
import './App.css';
import { useState } from 'react';
import characters from './components/Characters';
import Characters from './components/Characters';

function App() {
  const [characters, setCharacters] = useState(null);
  const reqApi = async() =>{
    // console.log("Clicking");
    const api = await fetch('https://rickandmortyapi.com/api/character');
    const characeterApi = await api.json();
    console.log(characters);

    setCharacters(characeterApi.results);
    
  };

  return (
    <div className="App">
      <header className="App-header">
      <h1 className="title">Rick & Morty</h1>
      {characters ? (
        <Characters characters={characters} setCharacters={setCharacters}/>

      ) :(
        <>
          <img src={imagenRickMortyh} alt ="Rick & Morty" className='img-home'  />
          <button onClick={reqApi} className='btn-search'>Buscar personajes</button>
        </>
      )}

        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
