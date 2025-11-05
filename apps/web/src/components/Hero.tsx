import "../styles/hero.css";

import {
  Button,
} from "@pixkit/react";
import baqa from "../assets/images/baqa.png";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-title">
        <h1>PixelArt UI kit</h1>
        <h3>Inspired by kits like shadcn/ui</h3>
        <img src={baqa} alt="" />
        <div className="hero-actions">
          <a href="#components">
            <Button>Get Started</Button>
          </a>
          <Button variant="primary" onClick={() => window.open("https://github.com/shayaqhmetov/pixkit", "_blank")}>GitHub</Button>
        </div>
      </div>
    </div>
  );
}