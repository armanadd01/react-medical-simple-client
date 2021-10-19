
import './App.css';
import { BrowserRouter as Router, Switch, Route}  from 'react-router-dom';
import Home from './Components/Home/Home/Home';
import Header from './Components/Shared/Header/Header';
import PageNotFound from './Components/Shared/NotFound/NotFound';
import Footer from './Components/Shared/Footer/Footer';
import Services from './Components/Home/Services/Services';
import Doctors from './Components/Home/Doctors/Doctors';
import Login from './Components/Shared/Login/Login';
import AuthProvider from './Context/AuthProvider';
import DepartmentDetails from './Components/DepartmentDetails/DepartmentDetails';
import PrivateRoute from './Components/Shared/Login/PrivetRoute/PrivateRoute';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/doctors">
            <Doctors></Doctors>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/service/:serviceId">
              <DepartmentDetails></DepartmentDetails>
            </PrivateRoute>
          <Route exact path="*">
            <PageNotFound></PageNotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
