import { useState } from "react";

const Input = ({ setLetter }) => {
  const [inputValue, setInputValue] = useState("");

  const handleButtonSubmit = () => {
    setLetter(inputValue);
    setInputValue("");
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <>
      <input
        type="text"
        required
        onChange={(event) => handleInputChange(event)}
        maxLength="1"
      />
      <button onClick={handleButtonSubmit}>Enviar</button>
    </>
  );
};
export default Input;
