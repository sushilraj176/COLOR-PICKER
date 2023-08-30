export const hex2rgb = (hex) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return `${r},${g},${b}`;
};



export const rgbToHex = (r, g, b) => '#' + [parseInt(r), parseInt(g), parseInt(b)].map(x => {
  const hex = x.toString(16)
  return hex.length === 1 ? '0' + hex : hex
}).join('')