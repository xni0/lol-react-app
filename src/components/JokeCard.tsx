import { useState } from 'react'; // Quitamos 'React' de aquí
import type { Joke } from '../services/api';

// Define what props this component receives
interface Props {
  jokeData: Joke;
}

export const JokeCard = (props: Props) => {
  // State to know if the punchline is visible or not
  const [isRevealed, setIsRevealed] = useState(false);
  
  // State to save the random number for the GIF
  const [randomNum, setRandomNum] = useState(0);

  // Function to show the answer and pick a random GIF
  const showAnswer = () => {
    // Math logic from the original project
    const number = Math.round(Math.random() * 6);
    setRandomNum(number);
    setIsRevealed(true); // Change state to true
  };

  return (
    <div className="result-container">
      {/* 1. The Setup (Question) */}
      <p id="setup-container" style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
        {props.jokeData.setup}
      </p>

      {/* 2. The Button OR The Answer (Conditional Rendering) */}
      {!isRevealed ? (
        <button className="button" onClick={showAnswer}>
          Reveal Punchline
        </button>
      ) : (
        <div className="punch-container">
          <p className="punchline-text">{props.jokeData.punchline}</p>
          
          {/* Image from public/img folder using the random number */}
          <img 
            src={`/img/lol${randomNum}.gif`} 
            alt="Funny GIF" 
            style={{ borderRadius: '10px', marginTop: '10px' }}
          />
        </div>
      )}
    </div>
  );
};