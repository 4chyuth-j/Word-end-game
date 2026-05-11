
const Letters = ({word,guessedLetters}) => {
  
  const letterElements = word.split("").map((c,ind)=>{
    const isFound = guessedLetters.includes(c.toUpperCase());
    return (
      <span key={ind} className="letter">
         {isFound?c.toUpperCase():""}
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