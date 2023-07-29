// src/Login.js
import React, { useState } from 'react';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState("");

    // const handleLogin = () => {
    //     fetch('https://dummyjson.com/auth/login', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({
    //             username: username,
    //             password: password,
    //         }),
    //     })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data)
    //             if (data.status === 200) {
    //                 // Save the user data to localStorage and redirect to the profile page
    //                 console.log(data.email)
    //                 localStorage.setItem('user', JSON.stringify(data.user));
    //                 onLogin();
    //             } else {
    //                 // Handle the login error
    //                 alert(data.message);
    //             }
    //         })
    //         .catch((error) => {
    //             // Handle any network or other errors
    //             console.error('Error:', error);
    //         });
    // };
    const handleLogin = () => {
        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        })
            .then((res) => {
                console.log(res.status)
                if (!res.ok) {
                    throw new Error('Login failed. Please check your credentials.');
                }
                return res.json();
            })
            .then((data) => {
                // Save the user data to localStorage and redirect to the profile page
                localStorage.setItem('user', JSON.stringify(data));
                onLogin();
            })
            .catch((error) => {
                // Handle login errors
                // alert(error.message);
                setErr(error.message)
            });
    };

    return (
        <div className='container'>
            <div className='log-container'>
                <div className='log-heading'>
                    <p>Welcome back! 👋</p>
                    <h1>Sign in to your account</h1>
                </div>
                <div>
                    <label htmlFor="name">Your email</label>
                    <br />
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        id='name'
                    />
                </div>
                <div>
                    <label htmlFor="password">password</label>
                    <br />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        id='password'
                    />
                </div>
                <div>
                    {
                        err && 
                        <p className='login-err'>{err}</p>
                    }
                </div>
                <button onClick={handleLogin}>CONTINUE</button>
                <a href="/" className='forgot-password'>Forget your password?</a>
            </div>
            <div>
            <p className='signup-link'>Don’t have an account? <a href='/'>Sign up</a></p>
            </div>
        </div>
    )
};

export default Login;
