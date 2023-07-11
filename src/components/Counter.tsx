import useCounter from "../hooks/useCounter";

const Counter = () => {
  const {count, onSetCount} = useCounter();
  return (
    <>
      <div>Counter</div>
      <hr />
      <div>
        <h4>{count}</h4>
      </div>
      <button onClick={() => onSetCount(1)}> +1 </button>
      <button onClick={() => onSetCount(-1)}> -1 </button>
    </>
  );
};

export default Counter;
