// import ReactDOM from 'react-dom'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'

import "./App.css";

import Card from "./components/Card/Card";

function App() {

  const pokemon = {
    name : "pikachu",
    image : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
  }

  return (
    <>
      <Card pokemon={pokemon} />
    </>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Home />}></Route>
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
