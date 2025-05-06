import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../api/login';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLogin(true)
    try {
      const token = await login(email, password);
      localStorage.setItem('token', token);
      navigate('/dashboard');
    } catch (err) {
      setError('Invalid credentials or server error');
      console.error(err);
    } finally {
      setIsLogin(false);
    }

  };

  return (
    <section className="relative container mx-auto pt-20 pb-10 md:pt-22 px-4 animate-fade-in h-auto max-w-[1000px] border-l-2 border-r-2  border-dashed border-gray-500 dark:border-gray-700">
      <div className="text-center">
        <h2 className="text-emerald-600 dark:text-gray-400 text-2xl font-bold animate-text mb-2">
          &lt; Login Here. /&gt;
        </h2>
        <h1 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4 animate-text">
          This Form is <br /> for Admins Only
        </h1>
      </div>
      <div className="flex flex-col justify-between items-center gap-5 mt-16">

        {/* <h2 className="text-3xl mb-6 animate-text font-semibold text-black dark:text-white">Login</h2> */}
        <form
          onSubmit={handleLogin}
          className="space-y-4 max-w-md"
        >

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 bg-gray-100 dark:bg-white/10 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-3 bg-gray-100 dark:bg-white/10 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />

          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}

          <button
            type="submit"
            className="w-full border border-gray-500 text-black dark:text-white font-semibold py-3 hover:bg-emerald-400 hover:text-white dark:hover:text-black transition disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLogin}>
            {isLogin ? 'Wait ...' : 'Login'}
          </button>
        </form>

      </div>
    </section>
  );
};

export default Login;
