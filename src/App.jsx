import { useState } from "react";
import Confetti from "react-confetti-boom";
import Keyboard from "./Components/Keyboard";
import Letters from "./Components/Letters";
import Programs from "./Components/Programs";
import Status from "./Components/Status";
import {words} from "./utils/words.js"



function App() {

  const [currentWord, setCurrentWord] = useState(()=>{
    const randomInd = Math.floor(Math.random() * words.length);
    return words[randomInd];
  });
  const [guessedLetters, setGuessedLetters] = useState([]);

  

  const wrongGuessCount = guessedLetters.filter(char => (
    !currentWord.includes(char.toLowerCase())
  )).length;

  const isGameWon = currentWord.split("").every(char=>guessedLetters.includes(char.toUpperCase()));
  // const isGameWon = true;
  const isGameLost = wrongGuessCount==8?true:false;


  function handleKeyboardClick(letter) {
    setGuessedLetters(curr => (
      curr.includes(letter) ? curr : [...curr, letter]
    ));
  }

  function handleNewGame(){
    const randomInd = Math.floor(Math.random() * words.length);
    setCurrentWord( words[randomInd]);
    setGuessedLetters([]);
  }

  return (
    <main>
      <header>
        <h1>Assembly: Endgame</h1>
        <p>Guess the word within 8 attempts to keep the programming world safe from Assembly!</p>
      </header>
      {isGameWon && <Confetti mode="fall" colors={['#e91849', '#eed181', '#f3a616', '#1e2be2']} /> }
      <Status
          won={isGameWon}
          lost={isGameLost}
          wrongGuessCount={wrongGuessCount}
      />

      <Programs
        wrongGuessCount={wrongGuessCount}
      />

      <Letters
        word={currentWord}
        guessedLetters={guessedLetters}
        isGameLost={isGameLost}
      />

      <Keyboard
        isGameOver={isGameLost||isGameWon}
        guessedLetters={guessedLetters}
        clickHandler={handleKeyboardClick}
        word={currentWord.toUpperCase()}
      />

      {(isGameLost || isGameWon) && <button onClick={handleNewGame} className="newgame-button">New Game</button>}
    </main>
  )
}

export default App
