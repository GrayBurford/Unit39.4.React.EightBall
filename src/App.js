
import './App.css';
import Eightball from './Eightball';
import answers from './answers';


function App() {
  return (
    <div className="App">
      <Eightball data={answers} />
    </div>
  );
}

export default App;
