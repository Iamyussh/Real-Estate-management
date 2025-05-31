import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const InputField = ({ label, type, name, value, onChange, error }) => (
  <div className="relative z-0 w-full mb-6 group">
    <input
      type={type}
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      className={`block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 ${
        error ? 'border-red-500' : 'border-gray-600'
      } appearance-none focus:outline-none focus:ring-0 focus:border-emerald-400 peer`}
      placeholder=" "
    />
    <label
      htmlFor={name}
      className="absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
      {label}
    </label>
    {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
  </div>
);

const AgentAuth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState('');
  const navigate = useNavigate();

  const handleTabChange = (tab) => {
    setIsLogin(tab === 'login');
    setFormData({
      name: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
    });
    setErrors({});
    setApiError('');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
    setApiError('');
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (!isLogin) {
      if (!formData.name) newErrors.name = 'Name is required';
      if (!formData.phone) {
        newErrors.phone = 'Phone number is required';
      } else if (!/^\d{10}$/.test(formData.phone)) {
        newErrors.phone = 'Phone must be exactly 10 digits';
      }
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      if (isLogin) {
        // Login API
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/agents/login`, {
          email: formData.email,
          password: formData.password,
        });
        localStorage.setItem('user', JSON.stringify(response.data));
        console.log('Login successful:', response.data);
        navigate('/dashboard');
      } else {
        // Register API
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/agents/register`, {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          password: formData.password,
        });
        console.log('Registration successful:', response.data);
        navigate('/login'); // or login automatically if you want
      }
    } catch (error) {
      setApiError(error.response?.data?.message || 'Operation failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f0f0f] px-4">
      <div className="w-full max-w-md p-8 bg-gray-800 rounded-2xl shadow-lg border border-gray-700">
        
        {/* Tabs */}
        <div className="flex mb-6 bg-gray-700 rounded-lg overflow-hidden">
        <button
            onClick={() => handleTabChange('login')}
            className={`w-1/2 py-3 text-md font-semibold transition ${
            isLogin ? 'bg-emerald-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
        >
            Login
        </button>
        <button
            onClick={() => handleTabChange('register')}
            className={`w-1/2 py-3 text-md font-semibold transition ${
            !isLogin ? 'bg-emerald-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
        >
            Register
        </button>
        </div>


        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-white mb-6">
          {isLogin ? 'Welcome Back' : 'Create an Agent Account'}
        </h2>

        {/* API Error */}
        {apiError && <p className="text-red-400 text-sm text-center mb-4">{apiError}</p>}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <>
              <InputField
                label="Name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
              />
              <InputField
                label="Phone number"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                error={errors.phone}
              />
            </>
          )}
          <InputField
            label="Email address"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />
          <InputField
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
          />
          {!isLogin && (
            <InputField
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              error={errors.confirmPassword}
            />
          )}

          <button
            type="submit"
            className="w-full py-2 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-lg transition duration-300"
          >
            {isLogin ? 'Sign In' : 'Register'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AgentAuth;