import React from "react";
import "./styles.css";
import { RandomPicker } from "./RandomPicker";

// Slot: https://codepen.io/AdrianSandu/pen/MyBQYz
// Wood Background: https://qiita.com/nakyos/items/c71dbd723b1df3492b9a

export default function App() {
  const items = [
    "What's the first thing you want to do after COVIT-19?",
    "How do you have fun at home these days?",
    "Do you cook your own meal? Where do you buy your foods?",
    "What is your recent favorite books, music or movie?",
    "What is the most expensive thing you bought recently?",
    "What things bother you these days?"
  ];
  return (
    <div className="App">
      <div className="background">
        <h1>Talk theme roulette</h1>
        <div className="content">
          <RandomPicker items={items} />
        </div>
      </div>
    </div>
  );
}
