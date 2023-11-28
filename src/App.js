import React, { useState } from "react";
import './App.css';

const App = () => {
  
  const gridSize = 300; // Size of the grid
  const blocksize = 50; // Size of the moving block
  const step = 10; // Step move in pixels
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const moveBlock = (direction) => {
    setPosition((prevPosition) => {
      let { x, y } = prevPosition;
      switch (direction) {
        case "up":
          y = y - step >= 0 ? y - step : y;
          break;
        case "down":
          y = y + step <= gridSize - blocksize ? y + step : y;
          break;
        case "left":
          x = x - step >= 0 ? x - step : x;
          break;
        case "right":
          x = x + step <= gridSize - blocksize ? x + step : x;
          break;
        default:
          break;
      }
      return { x, y };
    });
  };

  return (
    <div className="app">
      <div className="horizontal-layout">
        <button
          className="vertical-button left"
          onClick={() => moveBlock("left")}
        >
          Left
        </button>
        <div
          className="grid"
          style={{ width: gridSize, height: gridSize, position: "relative" }}
        >
          <div
            className="block"
            style={{
              width: blocksize,
              height: blocksize,
              position: "absolute",
              left: position.x,
              top: position.y,
              backgroundColor: "green",
            }}
          />
        </div>
        <button
          className="vertical-button right"
          onClick={() => moveBlock("right")}
        >
          Right
        </button>
      </div>
      <div className="controls">
        <button onClick={() => moveBlock("up")}>Up</button>
        <button onClick={() => moveBlock("down")}>Down</button>
      </div>
    </div>
  );
          }  
export default App;
