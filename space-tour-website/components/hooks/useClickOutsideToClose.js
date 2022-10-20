import React from "react";

const useClickOutsideToClose = (setState) => {
  const node = React.useRef(null);

  React.useEffect(() => {
    function handleClickOutside(e) {
      if (!node.current?.contains(e.target)) {
        setState(false);
      }
    }
    window.addEventListener("mousedown", handleClickOutside);
    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, [node]);

  return node;
};

export default useClickOutsideToClose;
