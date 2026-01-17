import { useState } from 'react';
import { fetchJoke, type Joke } from './services/api'; 

import { JokeCard } from './components/JokeCard';
import { ErrorMessage } from './components/ErrorMessage';
import './App.css';

function App() {
  // VARIABLES (STATE) 
  // Save the joke data here
  const [currentJoke, setCurrentJoke] = useState<Joke | null>(null);
  
  // Save if there is an error
  const [hasError, setHasError] = useState(false);
  
  // Save if we are loading
  const [isLoading, setIsLoading] = useState(false);

  //  FUNCTIONS 
  const handleNewJoke = async () => {
    // 1. Reset everything before starting
    setIsLoading(true);
    setHasError(false);
    setCurrentJoke(null); // Clear previous joke

    try {
      // 2. Call the service
      const data = await fetchJoke();
      console.log("Data received:", data); // Check data in console
      setCurrentJoke(data);
    
    } catch (error) {
      console.error("Oops, something failed", error);
      setHasError(true);
    
    } finally {
      // 3. Stop loading
      setIsLoading(false);
    }
  };

  // HTML (JSX) 
  return (
    <div className="app" style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>LOL Generator</h1>
      
      {/* Main Button */}
      <button 
        id="new-joke" 
        className="button" 
        onClick={handleNewJoke}
        disabled={isLoading} // Disable button while loading
      >
        {isLoading ? "Loading..." : "Get Joke"}
      </button>

      {/* CONDITIONAL RENDERING */}
      
      {/* If there is an error, show the Error Component */}
      {hasError && <ErrorMessage />}

      {/* If we have a joke, show the Card Component */}
      {currentJoke && (
        /* We use key to force React to reset the component when ID changes */
        <JokeCard key={currentJoke.id} jokeData={currentJoke} />
      )}
    </div>
  );
}

export default App;