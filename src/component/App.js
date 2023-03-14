import { useEffect, useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { getPosts } from '../api';
import {Home} from '../pages';
import Loader from './Loader';
import Navbar from './Navbar';
import Login from '../pages/Login';

const Error404 = ()=>{
    return (
      <h1>404 ERROR</h1>
    )
}

function App() {
  const [posts,setPosts] = useState([]);
  const [loading,setLoadiing] = useState(true);
    useEffect(() => {
      const fetchPosts = async () => {
        const response = await getPosts();
        console.log('response', response);
        if(response.success){
        setPosts(response.data.posts)
        }
        setLoadiing(false);
      };
  
      fetchPosts();
    }, []);
    if(loading)
    {
      return <Loader />
    }
    

    return (
    <div className="App">
     
      <Router>
      <Navbar />
      <Routes>
        <Route path='/'element={<Home posts={posts}/>}/>
        <Route path='login' element={< Login/>}/>
      </Routes>
      </Router>
     
    </div>
  );
}

export default App;
