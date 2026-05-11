import { languages } from "../utils/languages";

const Programs = () => {

  const programElements = languages.map(lang=>{
    const elemStyle = {
        backgroundColor:lang.backgroundColor,
        color:lang.color
    }
    return(
      <span key={lang.name} style={elemStyle}>{lang.name}</span>
    )
})

  return (
    <section className='program-container'>
        {programElements}
    </section>
  )
}

export default Programs