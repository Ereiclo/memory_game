import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import CardGrid from './components/CardGrid';

function App() {
  const [maxScore, setMaxScore] = useState(0);
  const [actualScore, setActualScore] = useState(0);
  const [newTry, setNewTry] = useState(false);

  const setNewScore = (score) => {
    if (score > maxScore) setMaxScore(score);

    setActualScore(score);

    if(score === 1 && newTry){
      setNewTry(false);
    }
    

  };

  return (
    <div className="App">
      <Header {...{ maxScore, actualScore }}></Header>
      <CardGrid {...{ actualScore, setNewScore, newTry, setNewTry }}></CardGrid>
    </div>
  );
}

export default App;
