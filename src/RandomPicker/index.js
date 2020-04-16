import React from "react";
import "./styles.css";

const RandomPicker = ({ items }) => {
  const seed = Math.round(Math.random() * 100) % 6;
  const deg = 360 / items.length;
  const height = 180;
  const ulStyle = {
    height: `${height}px`,
    animation: `4.5s ease 0s 1 normal forwards running spin-${seed}`
  };
  return (
    <div className="frame">
      <ul className="ring" style={ulStyle}>
        {items.map((item, index) => {
          const x = index * deg;
          const z = (height / 2) * Math.sqrt(3); // when 6 items
          const style = {
            height: `${height}px`,
            transform: `rotateX(${x}deg) translateZ(${z}px)`
          };

          return (
            <li key={item} className="panel" style={style}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export { RandomPicker };
