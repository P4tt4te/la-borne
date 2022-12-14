import React, { useEffect, useRef } from "react";
import bbg from "../../assets/bg_ticket.png";

export const PlaceTicket = ({ name }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    let filmText = name;
    if (filmText.length > 15) {
      filmText = filmText.slice(0, 16);
      filmText = filmText + "...";
    }
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const template = new Image();
    template.src = bbg;

    canvas.width = 209;
    canvas.height = 426.11;

    template.onload = function () {
      console.log("chargé");
      ctx.drawImage(template, 0, 0, 209, 426.11);
      ctx.font = "48px Gulax";
      ctx.rotate(Math.PI / 2);
      ctx.fillText(filmText, 20, -150);
      ctx.font = "32px Gulax";
      ctx.fillText((Math.floor(Math.random() * 30) + 10).toString(), 235, -20);
      ctx.fillText((Math.floor(Math.random() * 9) + 1).toString(), 292, -20);
      ctx.font = "24px Gulax";
      ctx.fillStyle = "grey";
      ctx.fillText("9 / 12 / 2022", 25, -120);
    };
  }, []);

  return <canvas ref={canvasRef} />;
};
