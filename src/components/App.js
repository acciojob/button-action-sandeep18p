import React, { useState, useRef, useEffect } from "react";
import "./../styles/App.css";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const paraRef = useRef(null);

  const toggleVisibility = () => {
    setIsVisible((prevVisible) => !prevVisible);
  };

  useEffect(() => {
    // Accessing the inner HTML of the paragraph element
    console.log(paraRef.current.innerHTML);
    if (isVisible) {
      paraRef.current.innerHTML =
        "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy";
    } else {
      paraRef.current.innerHTML = "";
    }
  }, [isVisible]);

  return (
    <div id="main">
      <p id="para" className={isVisible ? "show" : "hide"} ref={paraRef}></p>
      <button id="click" onClick={toggleVisibility}>
        Click Me
      </button>
    </div>
  );
};

export default App;
