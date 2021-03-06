
import './App.css';
import { BrowserRouter as Router, Switch, Route}  from 'react-router-dom';
import Home from './Components/Home/Home/Home';
import Header from './Components/Shared/Header/Header';
import Footer from './Components/Shared/Footer/Footer';
import Services from './Components/Home/Services/Services';
import Doctors from './Components/Home/Doctors/Doctors';
import Login from './Components/Shared/Login/Login';
import AuthProvider from './Context/AuthProvider';
import DepartmentDetails from './Components/DepartmentDetails/DepartmentDetails';
import PrivateRoute from './Components/Shared/Login/PrivetRoute/PrivateRoute';
import Page404 from './Components/Shared/404/404';
import DoctorDetails from './Components/DoctorDetails/DoctorDetails';

function App() {
  return (
    <div className="App">
      {/* Auth provider */}
      <AuthProvider>
        {/* React Router */}
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
          {/* Private Route */}
          <PrivateRoute path="/service/:serviceId">
              <DepartmentDetails></DepartmentDetails>
          </PrivateRoute>
          <PrivateRoute path="/doctor/:doctorId">
              <DoctorDetails></DoctorDetails>
          </PrivateRoute>
          <Route exact path="*">
            <Page404></Page404>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
