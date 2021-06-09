import { useState, useEffect } from "react";

export default function usePersistedState(key, initialState) {
  const [state, setState] = useState(() => {
    const storagedValue = localStorage.getItem(`@MyHealt:${key}`);

    if (storagedValue) {
      return JSON.parse(storagedValue);
    } else {
      return initialState;
    }
  });

  useEffect(() => {
    localStorage.setItem(`@MyHealt:${key}`, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}
