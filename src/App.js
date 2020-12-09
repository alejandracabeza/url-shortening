import './App.css';
import Menu from './components/menu'
import Main from './components/main'
import Shortener from './components/shortener'

function App() {
  return (
    <div className="App">
      <Menu />
      <Main />
      <Shortener />
    </div>
  );
}

export default App;
