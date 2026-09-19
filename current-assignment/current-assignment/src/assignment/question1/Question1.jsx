import { useState } from "react";

const Question1 = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h2>Question 1: Show / Hide Message</h2>

      <p>Name: Rijan Ghorsaini</p>
      <p>Roll No: YOUR_ROLL_NUMBER</p>

      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button>

      {show && <p>Hello! Welcome to React.</p>}
    </div>
  );
};

export default Question1;