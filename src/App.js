import { useState } from "react";
import "./App.css";

function App() {
  const [userQuery, setUserQuery] = useState("");

  const handleSearch = () => {
    window.open(`https://google.com/search?q=${userQuery}`, "_blank");
  };
  const handleUserQuery = (e) => {
    const {
      target: { value },
    } = e;
    setUserQuery(value);
  };

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      handleSearch();
    }
  }

  return (
    <div className="App">
      <h1>Hello Vijay</h1>
      <div className="form">
        <input
          type="text"
          value={userQuery}
          onChange={handleUserQuery}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
}

export default App;
