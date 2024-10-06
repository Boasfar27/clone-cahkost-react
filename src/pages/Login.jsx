import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [forgotPasswordModalOpen, setForgotPasswordModalOpen] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Simulasi penyimpanan user di localStorage
    const exampleUser = {
      email: 'admin123@gmail.com',
      password: 'admin123',
      name: 'Admin User',
    };
    localStorage.setItem('user', JSON.stringify(exampleUser));
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.email === email && user.password === password) {
      navigate('/home'); // Navigasi ke halaman beranda
    } else {
      alert('Email atau password salah');
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleForgotPasswordSubmit = (e) => {
    e.preventDefault();
    if (resetEmail) {
      alert(`Tautan reset password telah dikirim ke ${resetEmail}`);
      setForgotPasswordModalOpen(false); // Tutup modal setelah pengiriman
    } else {
      alert('Harap masukkan email Anda.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-600 to-blue-300">
      <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-lg">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-blue-500 text-center py-4 text-white rounded-t-lg">
          <h1 className="text-2xl font-bold">CahKost</h1>
          <p className="mt-2 text-lg">Masuk untuk menjelajah lebih dalam</p>
        </div>

        {/* Login dengan Google */}
        <div className="mt-6 space-y-4">
          <button className="w-full flex justify-center items-center py-2 px-4 border border-gray-500 rounded-md shadow-sm text-sm font-semibold text-gray-800 bg-white hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <img
              src="/assets/img/google 1.png"
              alt="Google"
              className="w-7 h-5 mr-2"
            />
            Masuk dengan Google
          </button>
        </div>

        <br />

        <div className="flex items-center justify-center">
          <span className="border-t border-gray-900 flex-grow mr-3"></span>
          <span className="text-gray-900">atau</span>
          <span className="border-t border-gray-900 flex-grow ml-3"></span>
        </div>

        {/* Form Login */}
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-900">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="name@company.com"
              className="mt-1 block w-full px-3 py-2 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-gray-900">
              Password
            </label>
            <div className="relative mt-1">
              <input
                id="password"
                type={isPasswordVisible ? 'text' : 'password'}
                className="block w-full px-3 py-2 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 hover:text-gray-700"
              >
                {isPasswordVisible ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18M12 6c4.67 0 8 6 8 6s-3.33 6-8 6-8-6-8-6 3.33-6 8-6zm0 10a4 4 0 100-8 4 4 0 000 8z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3C6.48 3 2 9 2 12s4.48 9 10 9 10-6 10-9-4.48-9-10-9zm0 12a3 3 0 100-6 3 3 0 000 6z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="remember_me" className="ml-2 block text-sm font-semi text-gray-800">
                Ingat saya
              </label>
            </div>
            <div className="text-sm">
              <button
                type="button"
                className="font-medium text-indigo-500 hover:text-indigo-400"
                onClick={() => setForgotPasswordModalOpen(true)}
              >
                Lupa password?
              </button>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-blue-500 hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Masuk
            </button>
          </div>
        </form>

        {/* Pendaftaran */}
        <p className="mt-6 text-center text-sm font-medium text-gray-500">
          Belum punya akun?
          <Link to="/register" className="text-indigo-500 hover:text-indigo-400">
            Daftar di sini
          </Link>
        </p>
      </div>

      {/* Modal Lupa Password */}
      {forgotPasswordModalOpen && (
        <div
          id="forgot-password-modal"
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        >
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
            {/* Tombol Tutup Modal */}
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 focus:outline-none"
              onClick={() => setForgotPasswordModalOpen(false)}
              aria-label="Close Modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Lupa Password?
            </h2>
            <p className="mb-4 text-gray-600">
              Masukkan email Anda untuk menerima tautan reset password.
            </p>
            <form onSubmit={handleForgotPasswordSubmit} className="space-y-4">
              <div>
                <label htmlFor="reset-email" className="block text-sm font-semibold text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="reset-email"
                  name="reset-email"
                  required
                  placeholder="name@company.com"
                  className="mt-1 block w-full px-3 py-2 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-blue-500 hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Kirim
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
