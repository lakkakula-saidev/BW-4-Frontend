
import './Styles/chatBox.css'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import MainPage from './components/MainPage';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoginPage from './components/Login'


function App() {


  return (
    <Router>
      <Route render={routerProps => <LoginPage {...routerProps} />} path='/login' />
      <Route render={routerProps => <MainPage {...routerProps} />} exact path='/' />
    </Router>
  );
}

export default App;
