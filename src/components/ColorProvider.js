import { createContext, useState, useContext } from "react";
import { v4 } from "uuid";
import colorsData from "../data/color-data.json";

export const ColorContext = createContext();
export const useColors = () => useContext(ColorContext);

export default function ColorProvider({ children }) {
  const [colors, setColors] = useState(colorsData);

  const addColor = (title, color) =>
    setColors([
      {
        id: v4(),
        title,
        color,
        rating: 0
      },
      ...colors
    ]);

  const rateColor = (id, rating) =>
    setColors(
      colors.map((color) => (color.id === id ? { ...color, rating } : color))
    );

  const removeColor = (id) =>
    setColors(colors.filter((color) => color.id !== id));

  return (
    <ColorContext.Provider value={{ colors, addColor, rateColor, removeColor }}>
      {children}
    </ColorContext.Provider>
  );
}
