import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route}  from 'react-router-dom';
import Home from './Components/Home/Home/Home';
import Navbar from './Components/Shared/Navbar/Navbar';
import Header from './Components/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
