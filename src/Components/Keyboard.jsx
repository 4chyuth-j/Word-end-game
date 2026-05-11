
const Keyboard = ({clickHandler}) => {
    const keyChar = [
        "A", "B", "C", "D", "E", "F", "G",
        "H", "I", "J", "K", "L", "M", "N",
        "O", "P", "Q", "R", "S", "T", "U",
        "V", "W", "X", "Y", "Z"
    ];

    const keyButtonElements = keyChar.map((char)=>(
        <button onClick={()=>clickHandler(char)} key={char}>{char}</button>
    ))
    return (
        <div className='keyboard-container'>
            {keyButtonElements}
        </div>
    )
}

export default Keyboard