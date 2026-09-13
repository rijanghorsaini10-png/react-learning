import Child from "./child";

const Parent = () => {
  const message = "Hello from Parent!";

  return (
    <div>
      <h1>Parent Component</h1>
      <Child value={message} />
    </div>
  );
};

export default Parent;