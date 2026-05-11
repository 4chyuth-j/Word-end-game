import { useState } from "react";
import Keyboard from "./Components/Keyboard";
import Letters from "./Components/Letters";
import Programs from "./Components/Programs";
import Status from "./Components/Status";




function App() {

  const [currentWord,setCurrentWord] = useState("react");
  const [guessedLetters,setGuessedLetters] = useState([]);
  console.log(guessedLetters);

  function handleKeyboardClick(letter){
    setGuessedLetters(curr=>(
      curr.includes(letter) ? curr : [...curr,letter]
    ));
  }

  return (
    <main>
      <header>
        <h1>Assembly: Endgame</h1>
        <p>Guess the word within 8 attempts to keep the programming world safe from Assembly!</p>
      </header>
      <Status />
      <Programs />
      <Letters word={currentWord} />
      <Keyboard clickHandler={handleKeyboardClick} />
      <button className="newgame-button">New Game</button>
    </main>
  )
}

export default App
