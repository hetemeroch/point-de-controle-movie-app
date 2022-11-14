import logo from './logo.svg';
import './App.css';
import Myroute from './mycompoments/route';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { addMovie, showMovie } from './redux/reducer/reducer';

function App() {

  const dispatch = useDispatch()
  const movie = useSelector((state) => state.Add)
  return (
    <div className="App">
       <Myroute/>
       
    </div>
  );
}

export default App;
