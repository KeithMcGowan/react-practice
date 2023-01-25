// React
import React, { useState, useCallback, useMemo } from "react";

// Functional Components
import DemoList from "./components/Demo/DemoList";

// UI Components
import Button from "./components/UI/Button/Button";

// Styles
import "./App.css";

function App() {
  const [listTitle, setListTitle] = useState("My List");

  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title");
  }, []);

  const listItems = useMemo(() => {
    return [5, 3, 1, 10, 9];
  }, []);

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
    </div>
  );
}

export default App;
