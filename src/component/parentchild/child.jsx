import Child1 from "./Child1";

const Child = ({ value }) => {
  return (
    <div>
      <h1>Child Component</h1>
      <p>Message from Parent: {value}</p>
      <Child1 value={value} />

    </div>
  );
};

export default Child;