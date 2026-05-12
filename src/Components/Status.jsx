import clsx from "clsx";
import { languages } from "../utils/languages";
import { getFarewellText } from "../utils/fareWellTexts";
import { useEffect, useState } from "react";

const Status = ({ won, lost, wrongGuessCount }) => {

  const [farewellText, setFarewellText] = useState("");

  useEffect(() => {
    if (wrongGuessCount > 0 && !won && !lost) {
      setFarewellText(
        getFarewellText(
          languages[wrongGuessCount - 1].name
        )
      );
    }
  }, [wrongGuessCount])

  const generatedClass = clsx({
    "game-status": true,
    "won": won,
    "lost": lost,
    "hidden": wrongGuessCount === 0 && !won && !lost
  });

  const content = won ? (
    <>
      <h2>Game Won!</h2>
      <p>Well done!🎉</p>
    </>) : lost ? (
      <>
        <h2>Game Over!</h2>
        <p>You lose! Better start learning Assembly 😭</p>
      </>) : (
    <h2>{farewellText}</h2>
  )

  return (
    <div className={generatedClass}>
      {content}
    </div>
  );
  
}

export default Status