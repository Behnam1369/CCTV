import React from 'react';
import Main from './components/Main';

export const AppContext = React.createContext();

function App() {
  return (
    <>
      <Main />
    </>
  );
}

export default App;
