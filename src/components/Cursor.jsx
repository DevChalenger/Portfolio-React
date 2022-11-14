import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../redux/selector";

import "../styles/css/app/cursor.css";

const Cursor = () => {
  const [position, setPosition] = useState({ x: null, y: null });
  const theme = useSelector(selectTheme);
  useEffect(() => {
    const cursorHandler = (event) => {
      const { clientX, clientY } = event;
      setPosition({ x: clientX, y: clientY });
    };
    document.addEventListener("mousemove", cursorHandler);

    return () => {
      document.removeEventListener("mousemove", cursorHandler);
    };
  }, []);

  return (
    <div
      className={`app-cursor ${"" ? "hover" : ""}`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    >
      <div
        className={`app-cursor-center ${theme === "light" ? "light" : "night"}`}
      ></div>
    </div>
  );
};

export default Cursor;
