
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AddService from './Components/AddService/AddService';
import Blogs from './Components/Blogs/Blogs';
import Contact from './Components/Contact/Contact';
import DetailService from './Components/DetailService/DetailService';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import ManageOrder from './Components/Manage Orders/ManageOrder';
import Myorder from './Components/MyOrders/Myorder';
import Notfound from './Components/Notfound.js/Notfound';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Services from './Components/Services/Services';
import TopNav from './Components/TopNav/TopNav';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <TopNav></TopNav>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <PrivateRoute exact path='/services/:_id'>
              <DetailService></DetailService>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <PrivateRoute exact path='/myorder'>
              <Myorder></Myorder>
            </PrivateRoute>
            <Route exact path='/blogs'>
              <Blogs></Blogs>
            </Route>
            <Route path='/Allorder'>
              <ManageOrder></ManageOrder>
            </Route>
            <Route exact path='/addservice'>
              <AddService></AddService>
            </Route>
            <Route exact path='/contact'>
              <Contact></Contact>
            </Route>
            <Route exact path='/services'>
              <Services></Services>
            </Route>
            <Route path='*'>
              <Notfound></Notfound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
