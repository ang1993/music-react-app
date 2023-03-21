import './App.css';
import { useSelector } from 'react-redux';

function App() {
  const {token, loadingPetition} = useSelector((state) => state.MusicReducer)
  console.log(token)
  console.log(loadingPetition)
  return (
    <div className="App">
        <h1>Hola</h1>
    </div>
  );
}

export default App;
