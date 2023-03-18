import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useAuth } from '../hooks';
import {Home} from '../pages';
import Loader from './Loader';
import Navbar from './Navbar';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Settings from '../pages/Setting';

const Error404 = ()=>{
    return (
      <h1>404 ERROR</h1>
    )
}

function App() {
  const auth = useAuth();
    if(auth.loading)
    {
      return <Loader />
    }
    

    return (
    <div className="App">
     
      <Router>
      <Navbar />
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='login' element={< Login/>}/>
        <Route path='signup' element={< Signup/>}/>
        <Route path='settings' element={< Settings/>}/>
      </Routes>
      </Router>
     
    </div>
  );
}

export default App;
