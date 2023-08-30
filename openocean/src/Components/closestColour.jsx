import { hex2rgb } from "./convertHextorgb";

export const closestColor = async (targetColor, colorArray) => {
  let closestDistance = 100000;
  let closestColor = [];


  // Convert target color from hex string to RGB values
  const [r1, g1, b1] = hex2rgb(targetColor).split(",");


  // Loop through the array of colors
  await colorArray.forEach((item) => {
    // Convert current color from hex string to RGB values
    const [r2, g2, b2] = hex2rgb(item.hex).split(",");

    // Calculate the Euclidean distance between the target color and current color
    const distance = Math.sqrt(
      (r1 - r2) ** 2 +
      (g1 - g2) ** 2 +
      (b1 - b2) ** 2
    );

    closestColor.push({ color: item.color, hex: item.hex, distance })

  });
  closestColor.sort(function(a, b){ return a.distance - b.distance })
  return closestColor;
}