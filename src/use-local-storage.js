import { useState, useEffect } from "react";

export default function useLocalStorage(keyName, initialValue) {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(keyName)) || initialValue
  );

  useEffect(() => {
    localStorage.setItem(keyName, JSON.stringify(value));
  }, [value, keyName]);

  return [value, setValue];
}
