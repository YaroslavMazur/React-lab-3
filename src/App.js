import './App.css';
import ToDoList from './Pages/ToDoList/ToDoList';
import Header from './components/Header/Header';
import Profile from './Pages/Profile/Profile.jsx';
import Login from './Pages/Login/Login.jsx';
import News from './Pages/News/News.jsx';
import {Navigate, Route,Routes} from 'react-router-dom';

function App() {

  const isLogged = localStorage.getItem("userData") === "true";


  return (
      <div className='App'>
        <Header/>
          <Routes>
            <Route element = {<ToDoList/>} path='/'></Route>
            <Route element = {isLogged? <Profile/>: <Navigate to = "/login"/>} path='/profile'></Route>
            <Route element = {<News/>} path='/news'></Route>
            <Route element = {<Login/>} path='/login'></Route>
          </Routes>
      </div>
    
  );
}

export default App;
