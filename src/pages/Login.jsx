import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { assets } from '../assets/assets'; // Assuming your logo is properly imported from assets

const Login = () => {
  const [currentState, setCurrentState] = useState('Login'); // Initially 'Login'
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Check if user exists in localStorage on component mount
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData) {
      setCurrentState('Login');
    } else {
      setCurrentState('Sign up');
    }
  }, []);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (currentState === 'Sign up') {
      if (storedUser && storedUser.email === email) {
        toast.error('User already exists. Please login.');
        setCurrentState('Login');
        return;
      }

      const user = { name, email, password };
      localStorage.setItem('user', JSON.stringify(user));
      toast.success('Account created successfully. Redirecting to home.');
      navigate('/home');
    } else if (currentState === 'Login') {
      if (storedUser) {
        if (storedUser.email === email && storedUser.password === password) {
          toast.success('Login successful. Redirecting to home.');
          navigate('/home');
        } else {
          toast.error('Incorrect email or password.');
        }
      } else {
        toast.error('User not found. Please sign up.');
        setCurrentState('Sign up');
      }
    }
  };

  return (
    <>
      <form
        onSubmit={onSubmitHandler}
        className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 bg-white shadow-lg shadow-gray-500/50 rounded-lg border border-gray-300 px-10 py-10'
      >
        {/* Render the logo above the form */}
        <img src={assets.logo} alt="Logo" className="w-[50%]" />

        <div className="inline-flex items-center gap-2 mb-2 mt-5">
          <p className="prata-regular text-3xl">{currentState}</p>
          <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
        </div>

        {/* Name input for signup */}
        {currentState === 'Sign up' && (
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-800"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        )}
        <input
          type="email"
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <div className="w-full flex justify-between text-sm mt-[-8px]">
          <p className="cursor-pointer">Forgot your password?</p>
          {currentState === 'Login' ? (
            <p onClick={() => setCurrentState('Sign up')} className="cursor-pointer">
              Create account
            </p>
          ) : (
            <p onClick={() => setCurrentState('Login')} className="cursor-pointer">
              Login Here
            </p>
          )}
        </div>

        <button className="bg-black rounded-[6px] text-white my-8 px-10 py-3">
          {currentState === 'Login' ? 'Login' : 'Sign Up'}
        </button>
      </form>

      <ToastContainer />
    </>
  );
};

export default Login;
