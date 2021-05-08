import { useState, useCallback } from "react";

function useChangeInput(initalValue) {
  const [data, setData] = useState(initalValue);

  const handler = useCallback((e) => {
    const { value, name } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  }, []);
  return [data, handler];
}

export default useChangeInput;
