import React, { useEffect, useRef } from "react";

export default function TextCanvas(props) {
  const canvasRef = useRef();
  const stopID = useRef();
  const stopAnimation = props.stopAnimation;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!stopAnimation) {
      setTimeout(() => {
        const ctx = canvas.getContext("2d");
        canvas.width = 750;
        canvas.height = window.innerHeight;

        // Mouse interaction
        const mouse = {
          x: null,
          y: null,
        };
        canvas.addEventListener("mousemove", (e) => {
          mouse.x = e.layerX;
          mouse.y = e.layerY;
        });
        canvas.addEventListener("mouseout", (e) => {
          mouse.x = 0;
          mouse.y = 0;
        });
        window.addEventListener("resize", () => {
          // canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
        });

        /**** BUBBLE TEXT ***/
        let bubbleTextArray = [];
        ctx.font = "25px Script";
        ctx.fillText("Matt", 20, 67);
        ctx.fillText("Ericksen", 2, 92);
        let textCoordinates = ctx.getImageData(0, 0, 180, 100);

        class Particle {
          constructor(x, y) {
            this.x = x;
            this.y = y;
            this.size = 6;
            this.baseX = this.x;
            this.baseY = this.y;
            this.density = Math.random() * 15 + 1;
            this.distance = null;
          }
          getColor() {
            return this.distance < 100 ? "#00adb5" : "white";
          }
          draw() {
            ctx.fillStyle = this.getColor();
            ctx.beginPath();
            ctx.arc(this.x + 1, this.y - 1, this.size / 3, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fill();
          }
          update() {
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            this.distance = distance;
            let forceDirectionX = dx / distance;
            let forceDirectionY = dy / distance;
            let maxDistance = 100;
            let force = (maxDistance - distance) / maxDistance;
            let directionX = forceDirectionX * force * this.density;
            let directionY = forceDirectionY * force * this.density;

            if (distance < 100) {
              this.x -= directionX;
              this.y -= directionY;
            } else {
              if (this.x !== this.baseX) {
                let dx = this.x - this.baseX;
                this.x -= dx / 20;
              }
              if (this.y !== this.baseY) {
                let dy = this.y - this.baseY;
                this.y -= dy / 20;
              }
            }
          }
        }

        function init() {
          bubbleTextArray = [];
          for (let y = 0, y2 = textCoordinates.height; y < y2; y++) {
            for (let x = 0, x2 = textCoordinates.width; x < x2; x++) {
              if (
                textCoordinates.data[
                  y * 4 * textCoordinates.width + x * 4 + 3
                ] > 128
              ) {
                bubbleTextArray.push(new Particle(x * 8, y * 8));
              }
            }
          }
        }
        init();
        /** bubble text end **/

        // animation loop
        function animate() {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          for (let i = 0; i < bubbleTextArray.length; i++) {
            bubbleTextArray[i].draw();
            bubbleTextArray[i].update();
          }
          stopID.current = requestAnimationFrame(animate);
        }
        animate();
      }, 200);
    }
    return () => cancelAnimationFrame(stopID.current);
  });

  return <canvas ref={canvasRef}></canvas>;
}
