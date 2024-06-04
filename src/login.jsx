// import React, { useState } from 'react'
// import { signInAccount } from './api';
// import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';
// const Login = () => {
//     let toastId;
//     const navigate = useNavigate();
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     async function handleSubmit() {
//         if (email.trim().length > 0 && password.trim().length > 0) {
//             try {
//                 toastId = toast.loading("Loading Please Wait...");
//                 const loggedIn = await signInAccount({ email, password });
//                 console.log(loggedIn)
//                 if (loggedIn) {
//                     toast.dismiss()
//                     navigate("/")
//                 } else {
//                     toast.update(toastId, { isLoading: false, render: "Invalid Email/Password", type: "error", hideProgressBar: false, closeButton: true, delay: 500, autoClose: true });
//                 }
//             } catch (err) {
//                 console.log(err)
//                 toast.error("Something went wrong")
//             } 
//         } else {
//             toast.warning("Enter all fields")

//         }
//     }

//     return (
//         <div className='login'>
//             <h1 className=''>Login</h1>
//             <form action="" onSubmit={(e) => e.preventDefault()}>
//                 <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /> <br /> <br />
//                 <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} /> <br />
//                 <button className='btn-primary' type="submit" onClick={handleSubmit}>login</button>

//             </form>
//         </div>
//     )
// }

// export default Login