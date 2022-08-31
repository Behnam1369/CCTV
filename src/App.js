import './App.css';
import React from 'react';
import Main from './components/Main';

export const AppContext = React.createContext();

function App() {
  return (
    <div>
      <Main />
    </div>
  );
}

export default App;
