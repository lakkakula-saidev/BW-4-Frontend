
import './Styles/chatBox.css'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import MainPage from './components/MainPage';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoginPage from './components/Login'
import { useSelector } from 'react-redux'
import axios from 'axios';



function App() {

  axios.defaults.withCredentials = true
  const user = useSelector(state => state.user)

  if (!user.currentUser._id) {
    return <Router>
      <Route render={routerProps => <LoginPage {...routerProps} />} path='/' />
    </Router>
  } else {

    return (
      <Router>
        <Route render={routerProps => <MainPage {...routerProps} />} exact path='/' />
      </Router>
    );
  }


}

export default App;
