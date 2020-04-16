import React from "react";
import "./styles.css";
import { RandomPicker } from "./RandomPicker";

// Slot: https://codepen.io/AdrianSandu/pen/MyBQYz
// Wood Background: https://qiita.com/nakyos/items/c71dbd723b1df3492b9a

export default function App() {
  const items = [
    "What do you want to do first after Covid-19?",
    "Nowadays, how do you having fun at home?",
    "Do you cook your own food? Where do you shop?",
    "Introduce your recent favorite books, music or movie.",
    "What is the most expensive thing you bought?",
    "What are you annoyed at these days?"
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
