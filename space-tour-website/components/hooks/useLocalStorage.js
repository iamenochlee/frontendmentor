import React from "react";

export default function useLocalStorage(name) {
  const [index, setIndex] = React.useState(null);

  //saving index
  React.useEffect(() => {
    if (index === null) {
      setIndex(0);
    } else {
      localStorage.setItem(name, JSON.stringify(index));
    }
  }, [index]);

  //retrieving index

  React.useEffect(() => {
    const savedIndex = JSON.parse(localStorage.getItem(name));
    if (savedIndex === null) {
      setIndex(0);
    } else {
      setIndex(savedIndex);
    }
  }, []);

  return { index, setIndex };
}
