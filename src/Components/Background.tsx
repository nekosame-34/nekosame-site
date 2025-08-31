import React, { useEffect, useRef, useState } from "react";
import "./Background.css";
import imgNekosame from "../img/bg/nekosame.png";
import imgSayochi from "../img/bg/sayo.png";

type BackgroundProps = {
  sayoBgFlag: boolean;
}

const FallingBackgroundImages: React.FC<BackgroundProps> = ({sayoBgFlag}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const imageContainer = containerRef.current;
    if (!imageContainer) return;

    const createFallImage = () => {
      const fallImage = document.createElement("img");
      if(!sayoBgFlag) {
        fallImage.src = imgNekosame;
      } else {
        fallImage.src = imgSayochi;
      }
      fallImage.style.height = "auto";
      fallImage.className = "character";
      if(document.body.clientWidth > document.documentElement.clientHeight) {
        fallImage.style.width = "15%";
      } else {
        fallImage.style.width = "50%";
      }

      // x Position 
      fallImage.style.left = `${Math.random() * 90}vw`;

      // falling speed
      fallImage.style.animationDuration = `${6}s`; 
      fallImage.style.animationDelay = `-${0}s`;

      // rotate speed
      fallImage.style.setProperty("--rotate-speed", `${Math.random() * 720}deg`);

      imageContainer.appendChild(fallImage);

      fallImage.addEventListener("animationend", () => {
        fallImage.remove();
      });
    };

    if(document.body.clientWidth > document.documentElement.clientHeight) {
        const interval = setInterval(createFallImage, 750);
        return () => clearInterval(interval);
    } else {
        const interval = setInterval(createFallImage, 1500);
        return () => clearInterval(interval);
    }
  }, [sayoBgFlag]);

  return (
    <div ref={containerRef} className="falling-triangles-container">
    </div>
  );
};

export default FallingBackgroundImages;
