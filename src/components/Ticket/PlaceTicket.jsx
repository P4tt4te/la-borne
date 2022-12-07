import React, { useEffect, useRef } from "react";
import background from "../../assets/background_ticket.svg";
import bbg from "../../assets/bg_ticket.png";

export const PlaceTicket = ({ name }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
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
      ctx.fillText(name, 20, -150);
      ctx.font = "32px Gulax";
      ctx.fillText("10", 235, -20);
      ctx.fillText("10", 283, -20);
      ctx.font = "24px Gulax";
      ctx.fillStyle = "grey";
      ctx.fillText("9 / 12 / 2022", 25, -120);
    };
  }, []);

  return <canvas ref={canvasRef} />;
};
