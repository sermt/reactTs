import { useState } from "react";

const useCounter = (initial = 0) => {
  const [count, setCount] = useState(initial);
  const onSetCount = (numb: number) => setCount((pcount) => pcount + numb);

  return { count, onSetCount };
};

export default useCounter;
