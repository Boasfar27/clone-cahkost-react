import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory

const Register = () => {
  const [email, setEmail] = useState("");
  const [faculty, setFaculty] = useState("");
  const [password, setPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const navigate = useNavigate(); // Use this to redirect users

  const handleSubmit = (event) => {
    event.preventDefault();

    // Simpan data pengguna ke localStorage
    localStorage.setItem(
      "user",
      JSON.stringify({ email, faculty, password, name: "Nama Lengkap" })
    );

    // Redirect to the home page or dashboard
    navigate("/home");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-600 to-blue-300">
      <div className="w-full max-w-md p-8 bg-gray-900 rounded-lg shadow-lg">
        {/* Header */}
        <div className="text-center py-4 bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-t-lg">
          <h1 className="text-2xl font-bold">CahKost</h1>
          <p className="mt-2">Buat Akun Gratis Anda</p>
        </div>

        <div className="mt-8 space-y-6">
          {/* Google Sign Up Button */}
          <button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium bg-white text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <img
              src="/assets/img/google 1.png"
              alt="Google"
              className="h-5 w-7 mr-2"
            />
            Daftar dengan Google
          </button>

          <div className="flex items-center justify-center">
            <span className="border-t border-gray-300 flex-grow mr-3"></span>
            <span className="text-gray-400">atau</span>
            <span className="border-t border-gray-300 flex-grow ml-3"></span>
          </div>

          {/* Register Form */}
          <form id="register-form" className="space-y-6" onSubmit={handleSubmit}>
            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="name@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Faculty Selection */}
            <div>
              <label
                htmlFor="faculty"
                className="block text-sm font-medium text-gray-300"
              >
                Fakultas
              </label>
              <select
                id="faculty"
                name="faculty"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={faculty}
                onChange={(e) => setFaculty(e.target.value)}
              >
                <option value="">Pilih fakultas</option>
                <option value="Fakultas Matematika dan Ilmu Pengetahuan Alam">
                  Fakultas Matematika dan Ilmu Pengetahuan Alam
                </option>
                <option value="Fakultas Teknik">Fakultas Teknik</option>
                <option value="Fakultas Ekonomi dan Bisnis">
                  Fakultas Ekonomi dan Bisnis
                </option>
                <option value="Fakultas Ilmu Sosial dan Politik">
                  Fakultas Ilmu Sosial dan Politik
                </option>
                <option value="Fakultas Hukum">Fakultas Hukum</option>
                <option value="Fakultas Vokasi">Fakultas Vokasi</option>
              </select>
            </div>

            {/* Password Input */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-300"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter password"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                checked={termsAccepted}
                onChange={() => setTermsAccepted(!termsAccepted)}
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-300">
                Dengan mendaftar, Anda membuat akun CahKost, dan Anda setuju
                dengan{" "}
                <a
                  href="/assets/img/Syarat dan Penggunaan CahKost (1).pdf"
                  download
                  className="text-indigo-400 hover:text-indigo-300"
                >
                  Syarat Penggunaan
                </a>{" "}
                dan{" "}
                <a
                  href="/assets/img/Kebijakan Privasi CahKost.pdf"
                  download
                  className="text-indigo-400 hover:text-indigo-300"
                >
                  Kebijakan Privasi
                </a>{" "}
                CahKost.
              </label>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium bg-gradient-to-r from-indigo-600 to-blue-500 text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Buat Akun
              </button>
            </div>
          </form>

          {/* Already have an account */}
          <p className="mt-6 text-center text-sm text-gray-400">
            Sudah punya akun?{" "}
            <a
              href="/login"
              className="font-medium text-indigo-400 hover:text-indigo-300"
            >
              Masuk di sini
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
