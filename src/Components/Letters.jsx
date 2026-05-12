import clsx from "clsx";

const Letters = ({word,guessedLetters,isGameLost}) => {
  
  const letterElements = word.split("").map((c,ind)=>{
    const isFound = guessedLetters.includes(c.toUpperCase());
    const letterClassName = clsx({
      "letter":true,
      "missed-letter":isGameLost && !isFound,
    })
    
    return (
      <span key={ind} className={letterClassName}>
         {isFound || isGameLost?c.toUpperCase():""}
      </span>
    )
  })

  return (
    <div className='word-display-container'>
        {letterElements}
    </div>
  )
}

export default Letters