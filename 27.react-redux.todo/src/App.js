import React from 'react';
import { BalanceDisplay } from './components/BalanceDisplay';
import { BalanceForm } from './components/BalanceForm';
import ListContainer from './components/ListContainer';
import "./styles/style.scss"
function App() {
  return (
    <main>
      {/* <BalanceDisplay />
      <BalanceForm /> */}
      <ListContainer/>
    </main>
  );
}

export default App;
