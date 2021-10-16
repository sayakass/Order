import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import ResetPassword from './pages/ResetPassword';
import UserMenus from './pages/UserMenus';
import UserRegister from './pages/UserRegister';
import SignIn from './pages/SignIn';
import AdminAddMenu from './pages/AdminAddMenu';
import AdminOrder from './pages/AdminOrder';
import AdminOrders from './pages/AdminOrders';
import AdminProfile from './pages/AdminProfile';
import UserCheckOut from './pages/UserCheckOut';
import UserProfileSetting from './pages/UserProfileSetting';
import UserThankyou from './pages/UserThankyou';
import AdminMenus from './pages/AdminMenus';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/admin-menus" component={AdminMenus} />
          <Route exact path="/user-thankyou" component={UserThankyou} />
          <Route exact path="/user-profile-setting" component={UserProfileSetting} />
          <Route exact path="/user-check-out" component={UserCheckOut} />
          <Route exact path="/admin-profile" component={AdminProfile} />
          <Route exact path="/admin-orders" component={AdminOrders} />
          <Route exact path="/admin-order" component={AdminOrder} />
          <Route exact path="/admin-add-menu" component={AdminAddMenu} />
          <Route exact path="/user-menus" component={UserMenus} />
          <Route exact path="/reset-password" component={ResetPassword} />
          <Route exact path="/user-register" component={UserRegister} />
          <Route exact path="/sign-in" component={SignIn} />
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
