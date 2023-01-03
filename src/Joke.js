import React, { useEffect, useState } from "react";
function Joke() {
  const [joke, setJoke] = useState({});

  useEffect(() => {
    async function fetchJoke() {
      const response = await fetch(
        "https://official-joke-api.appspot.com/jokes/random",
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      const data = await response.json();
      setJoke(data);
    }

    fetchJoke();
  }, []);
  const { setup, punchline } = joke;
  return (
    <div>
      <h3>Joke</h3>
      <p>{setup}</p>
      <p>
        <em>{punchline}</em>
      </p>
    </div>
  );
}

export default Joke;
