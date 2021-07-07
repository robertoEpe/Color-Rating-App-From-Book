import React from "react";
import "./styles.css";
import ColorList from "./components/ColorList";
import AddColorForm from "./components/AddColorForm";
import ColorProvider from "./components/ColorProvider";

export default function App() {
  return (
    <ColorProvider>
      <AddColorForm />
      <ColorList />
    </ColorProvider>
  );
}
