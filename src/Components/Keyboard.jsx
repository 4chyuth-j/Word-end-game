import clsx from "clsx";

const Keyboard = ({clickHandler,guessedLetters,word}) => {
    const keyChar = [
        "A", "B", "C", "D", "E", "F", "G",
        "H", "I", "J", "K", "L", "M", "N",
        "O", "P", "Q", "R", "S", "T", "U",
        "V", "W", "X", "Y", "Z"
    ];

    const keyButtonElements = keyChar.map((char)=>{
       const isGuessed = guessedLetters.includes(char);
       const isCorrectGuess = isGuessed  && word.includes(char);
       const isWrongGuess = isGuessed && !word.includes(char);
       const generatedClass = clsx({
            'correct-char':isCorrectGuess,
            'wrong-char':isWrongGuess
       }); 

       return(
             <button className={generatedClass} onClick={()=>clickHandler(char)} key={char}>{char}</button>
       )
    });

    return (
        <div className='keyboard-container'>
            {keyButtonElements}
        </div>
    )
}

export default Keyboard