
const Letters = ({word}) => {
  
  const letterElements = word.split("").map((c,ind)=>{
    return (
      <span key={ind} className="letter">{c.toUpperCase()}</span>
    )
  })

  return (
    <div className='word-display-container'>
        {letterElements}
    </div>
  )
}

export default Letters