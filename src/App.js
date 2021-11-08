import React from 'react';
import Registration from './pages/Registration';
import Login from './pages/Login';
import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';
class App extends React.Component {

  constructor() {
    super();
  }

  render() {

    return (

      <Router>
        <div className='App'>
          <Registration></Registration>
          <Routes>
            <Route path='/' component={Registration} />
            <Route path='/registration' component={Registration} />
            <Route path='/login' component={Login}></Route>
          </Routes>
        </div>
      </Router>
    )
  }
}

export default App;