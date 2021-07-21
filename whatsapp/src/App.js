
import './Styles/chatBox.css'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import MainPage from './components/MainPage';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoginPage from './components/Login'
import { useSelector } from 'react-redux'

function App() {

  const user = useSelector(state => state.user.currentUser)

  if (Object.keys(user).length >= 2) {
    return <Router>
      <Route render={routerProps => <MainPage {...routerProps} />} exact path='/' />
    </Router>
  } else {

    return (
      <Router>
        <Route render={routerProps => <LoginPage {...routerProps} />} path='/login' />
        <Route render={routerProps => <MainPage {...routerProps} />} exact path='/' />
      </Router>
    );
  }


}

export default App;
