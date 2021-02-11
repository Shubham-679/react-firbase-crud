import { Route, Switch, Redirect} from 'react-router-dom';
import './App.css';
import Home from './components/home';
import NavBar from './components/navbar';
import updatePost from './components/updatePost';

function App() {
  return (
    <div className="App">
      <main>
        <NavBar/>
        <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/update/:id" component={updatePost} exact/>
          <Redirect from="/" to="/home" ></Redirect>
        </Switch>
      </main>
    </div>
  );
}

export default App;
