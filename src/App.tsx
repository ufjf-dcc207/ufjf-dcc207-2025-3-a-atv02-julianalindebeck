import './App.css'
import Disciplina from './Disciplina';

function App() {
  return (
    <>
      <h1>Olá, mundo!</h1>
      <h2>Olá, React!</h2>
      <Disciplina codigo="DCC207" nome="Desenvolvimento Web Front-End"/>
      <Disciplina codigo="DCC206" nome="Desenvolvimento Web II"/>
      <Disciplina codigo="DCC202" nome="Desenvolvimento Web I"/>
    </>
  );
}

export default App
