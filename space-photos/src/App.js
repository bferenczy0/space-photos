import './App.css';
import Potd from './potd'
import Search from './search';

function App() {

  return (
    <div className="App">
      <h1 id='header'>Welcome to Space Photos!</h1><br></br>
      <span>Search for a random photo from an astromical object or look at today's special photo of the day</span><br></br>
      <Search />
      <Potd />
    </div>
  );
}

export default App;
