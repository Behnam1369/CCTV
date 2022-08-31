import "./App.css";
import Main from "./components/Main";
import React from "react";

export const AppContext = React.createContext();

function App() {
  return (
    <div>
      <Main />
    </div>
  );
}

export default App;
