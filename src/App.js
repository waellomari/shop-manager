
import './App.css';
import { useContext } from 'react'
//import ProductsProvider from "./context/ProductsProvider";
import ProductsPage from './components/pages/ProductsPage';
import ProductDetailsPage from './components/pages/ProductDetailsPage';
import HeaderPage from './components/pages/HeaderPage';
import FooterPage from './components/pages/FooterPage'
import LoginPage from './components/pages/LoginPage';
import { Switch, Route, Redirect } from 'react-router-dom';
import RegistrationForm from './components/pages/RegistrationForm';
import UsersContext from './context/UsersContext';
//import ProductsDetailsPage from './components/pages/ProductDetailsPage';


function App() {
  const { loggedIn, setLoggedIn } = useContext(UsersContext);
  
  const ProtectedRoute = (props) => {
    if (!loggedIn) return <Redirect to="/login" />
    return <Route {...props} />
  };

  return (
  <div>
    <HeaderPage loggedIn={loggedIn}/>
    
      <Switch>

        <Route path='/login'>
          <LoginPage loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        </Route>
        <Route path='/register' component={RegistrationForm}>
        </Route>
        <ProtectedRoute path='/products' component={ProductsPage} exact />
        <ProtectedRoute path='/products/:search' component={ProductDetailsPage} />
      </Switch>
    
    <FooterPage />
  </div>

  );
}



export default App;
