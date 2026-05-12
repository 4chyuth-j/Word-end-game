import { languages } from "../utils/languages";
import clsx from "clsx";

const Programs = ({ wrongGuessCount }) => {

  

  const programElements = languages.map((lang,ind )=> {

    const generatedClass = clsx({
      chip:true,
      lost:ind<wrongGuessCount,
    })

    const elemStyle = {
      backgroundColor: lang.backgroundColor,
      color: lang.color
    }

    return (
      <span
        className={generatedClass}
        key={lang.name}
        style={elemStyle}
      >
        {lang.name}
      </span>
    )
  });


  return (
    <section className='program-container'>
      {programElements}
    </section>
  )
}

export default Programs