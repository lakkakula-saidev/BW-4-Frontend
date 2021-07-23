
import './Styles/chatBox.css'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import MainPage from './components/MainPage';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoginPage from './components/Login'
import { useSelector } from 'react-redux'
import axios from 'axios';
import { RefreshToken } from './components/RefreshToken';
import { useEffect } from 'react';



function App() {

  axios.defaults.withCredentials = true
  const user = useSelector(state => state.user)
  const endpoint = process.env.REACT_APP_BACK_URL;
  useEffect(() => {
    setInterval(() => {
      axios.post(endpoint + "/users/refreshToken", { withCredentials: true });
      console.log("beep")
    }, 1000 * 60 * 5);
  }, [])



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
