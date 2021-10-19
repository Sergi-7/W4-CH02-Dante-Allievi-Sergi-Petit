import "./App.css";
import Letterbox from "./components/LetterBox/Letterbox";
import Hangman from "./components/Hangman/Hangman";
import { useEffect, useMemo, useState } from "react";
import Input from "./components/Input/Input.js";

function App() {
  const [letter, setLetter] = useState(null);

  const randomWord = useMemo(() => {
    const wordsArray = ["aguile"];
    return wordsArray[Math.floor(Math.random() * wordsArray.length)];
  }, []);
  const [failedLetters, setFailedLetters] = useState([]);
  const [correctLetters, setCorrectLetters] = useState([]);

  useEffect(() => {
    const included = randomWord.includes(letter);
    if (letter) {
      if (included) {
        setCorrectLetters([...correctLetters, letter]);
        setLetter("");
      } else {
        setFailedLetters([...failedLetters, letter]);
        setLetter("");
      }
    }
  }, [randomWord, letter]);

  return (
    <>
      <Hangman />
      <Input setLetter={setLetter} />
      <Letterbox lettersArray={failedLetters} />
      <Letterbox lettersArray={correctLetters} />
    </>
  );
}

export default App;
