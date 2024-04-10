import React from "react";
import ReactDOM from "react-dom/client";
import { Button } from "./components/base/button/button";
// include main.css

import "./main.css";

const App: React.FC = () => {
  return (
    <div>
      <Button variant={"default"}>Hello</Button>
    </div>
  );
};

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}
