import { useState } from 'react';
import styles from '../styles/login.module.css';
// import { login } from '../api';
// import { useToasts } from 'react';
import  {useToasts}  from 'react-toast-notifications';
import { useAuth } from '../hooks';
import { Navigate } from 'react-router-dom';

const Login = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [loggingIn,setLoggingIn] = useState(false);
  const { addToast } = useToasts();
  const auth = useAuth();
  console.log(auth);

  const handleSubmit = async(e)=>{
    e.preventDefault();
    // console.log("erroororonnn");
    setLoggingIn(true);

    if(!email || !password){
      return addToast('please enter email as well as password',{
        appearance:'error'
      })
    }
    const response = await auth.login(email,password);
    if(response.success){
       addToast('login successfully',{
        appearance:'success'
      })
    }
    else{
       addToast('login email and password was not matched',{
        appearance:'error'
      })
    }
    setLoggingIn(false);
  }
  if(auth.user){
    return <Navigate to='/'/>;
  }

  return (
    <form className={styles.loginForm} onSubmit={handleSubmit}>
      <span className={styles.loginSignupHeader}>Log In</span>

      <div className={styles.field}>
        <input type="email" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
      </div>

      <div className={styles.field}>
        <input type="password" placeholder="Paasword" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
      </div>

      <div className={styles.field} >
        <button disabled={loggingIn}>
          {loggingIn ? 'logging In...':'Log in'}</button>
      </div>
    </form>
  );
};

export default Login;