import React, { useState }from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import SignUpPage from './pages/SignUpPage'
import About from './pages/About';
import LoginPage from './pages/LoginPage'


const Routes = () => {
  const baseURL = process.env.PUBLIC_URL;

  const [username, setUsername] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <Router>
      <Switch>
        <Route exact path={baseURL + '/'} render={(props) => <SignUpPage {...props} username={username} setUsername={setUsername} setLoggedIn={setLoggedIn} />} />
        <Route path = {baseURL + '/login'} render={(props) => <LoginPage {...props} username={username} setUsername={setUsername} setLoggedIn={setLoggedIn} />} />
        <Route path={baseURL + '/dash'} render={(props) => loggedIn ? 
            <DashboardPage {...props} username={username} /> : <SignUpPage {...props} username={username} setUsername={setUsername} setLoggedIn={setLoggedIn} />} />
        <Route path={baseURL + '/about'} component={About} />
      </Switch>
    </Router>
  );
  }

export default Routes;



// return (
//   <Router>
//     <Switch>
//       <Route exact path={baseURL + '/'} component={SignUpPage} />
//       <Route path = {baseURL + '/login'} component={LoginPage} />
//       <Route path={baseURL + '/dash'} component={DashboardPage} />
//       <Route path={baseURL + '/about'} component={About} />
//     </Switch>
//   </Router>
// );
// }