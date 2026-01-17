// Define the shape of a Joke object (Type everything)
export interface Joke {
  id: number;
  type: string;
  setup: string;
  punchline: string;
}

// Function to get a random joke from the API
export const fetchJoke = async (): Promise<Joke> => {
  console.log("Calling the API..."); // Log to check if it works
  
  const response = await fetch("https://official-joke-api.appspot.com/random_joke");
  
  // Check if the connection is okay
  if (!response.ok) {
    throw new Error("Error connecting to API");
  }

  const data = await response.json();
  return data;
};