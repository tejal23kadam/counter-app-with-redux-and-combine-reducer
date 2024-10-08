import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import TwoContainer from './components/TwoContainer';
import FiveContainer from './components/FiveContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TwoContainer />
        <br />
        <FiveContainer />
      </div>
    </Provider>
  );
}

export default App;
