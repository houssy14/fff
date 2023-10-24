import React, { useState } from 'react';
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register=()=>{
    const [username,setusername]=useState('')
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
    
    const Registerfunction=(e)=>{
        e.preventDefault();

        axios.post("http://localhost:8080/auth/register",{
            username,password,email
        })
        .then(
            ()=>{
                console.log("welcome new user")
            }
        )
        }
        const notify = () => toast("Welcom new user");

    return(
        <>
        <br></br>
        <br></br>
        <h2>Register Form</h2>
        <br></br>
        <form onSubmit={Registerfunction}>
            <div>
                <label htmlFor='username'>username</label>
                <input type="username" name="username" id="username"
                onChange={(e)=> setusername(e.target.value)}
                />
            </div>
            <br></br>
            <div>
                <label htmlFor='email'>email</label>
                <input type="email" name="email" id="email"
                onChange={(e)=> setemail(e.target.value)}

                />
               
            </div>
            <br></br>
            <div>
                <label htmlFor='password'>password</label>
                <input type="password" name="password" id="password"
                onChange={(e)=> setpassword(e.target.value)}

                />
            </div>
            <br></br>
            <div>
            <input type='submit'onClick={notify}/>
            <ToastContainer />
            </div>

        </form>
    

        </>
    )
}
export default Register