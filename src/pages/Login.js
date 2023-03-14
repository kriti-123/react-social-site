// import { useState } from 'react';
// import styles from '../styles/login.module.css';
// import { useToasts } from 'react';
// // import  {useToasts}  from 'react-toast-notifications';

// const Login = () => {
//   const [email,setEmail] = useState('');
//   const [password,setPassword] = useState('');
//   const [loggingIn,setLoggingIn] = useState(false);
//   const [addToast] = useToasts;

//   const handleSubmit = (e)=>{
//     e.preventDefault();
//     console.log("erroororonnn");
//     setLoggingIn(true);

//     if(!email || !password){
//       return addToast('please enter email and password', {appearance: 'success'})
//     }
//   }

//   return (
//     <form className={styles.loginForm} onSubmit={handleSubmit}>
//       <span className={styles.loginSignupHeader}>Log In</span>

//       <div className={styles.field}>
//         <input type="email" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
//       </div>

//       <div className={styles.field}>
//         <input type="password" placeholder="Paasword" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
//       </div>

//       <div className={styles.field} disabled={loggingIn}>
//         <button>
//           {loggingIn ? 'logging In...':'Log in'}</button>
//       </div>
//     </form>
//   );
// };

// export default Login;
const Login = ()=>{
  return (
    <h1>hiiji</h1>
  )
}
export default Login;
