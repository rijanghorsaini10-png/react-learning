import { useState } from "react";

const Question2 = () => {
  const [name, setName] = useState("");

  return (
    <div>
      <h2>Question 2: Name Display Program</h2>

      <p>Name: Rijan Ghorsaini</p>
      <p>Roll No: YOUR_ROLL_NUMBER</p>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h3>Entered Name: {name}</h3>
    </div>
  );
};

export default Question2;