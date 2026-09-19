import { useState } from "react";

const Question3 = () => {
  const [likes, setLikes] = useState(0);

  return (
    <div>
      <h2>Question 3: Simple Like Button</h2>

      <p>Name: Rijan Ghorsaini</p>
      <p>Roll No: YOUR_ROLL_NUMBER</p>

      <h3>Likes: {likes}</h3>

      <button onClick={() => setLikes(likes + 1)}>
        Like
      </button>

      <button onClick={() => setLikes(0)}>
        Reset
      </button>
    </div>
  );
};

export default Question3;