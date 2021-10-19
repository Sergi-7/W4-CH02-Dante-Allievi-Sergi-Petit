const Letterbox = ({ lettersArray }) => {
  return (
    <div>
      {/*console.log(lettersArray, randomWord)}
      {randomWord.split("").map((letter, i) => {
        return (
          <span key={i}>{lettersArray.includes(letter) ? letter : ""}</span>
        );
      })*/}
      {lettersArray.map((letter) => (
        <span key={letter}>{letter}</span>
      ))}
    </div>
  );
};
export default Letterbox;
