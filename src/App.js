import './App.css';
import Home from './components/home';
import NavBar from './components/navbar';

function App() {
  return (
    <div className="App">
      <main>
        <NavBar/>
       <Home></Home>
      </main>
    </div>
  );
}

export default App;
