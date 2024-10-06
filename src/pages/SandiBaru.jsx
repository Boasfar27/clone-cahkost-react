import React, { useState } from "react";

const SandiBaru = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (newPassword !== confirmPassword) {
      setErrorMessage("Kata sandi tidak cocok. Harap masukkan kembali.");
    } else {
      // Simulasi penyimpanan kata sandi baru
      alert("Kata sandi baru berhasil disimpan.");
      setErrorMessage(""); // Reset pesan error
      // Implementasi penyimpanan kata sandi sesuai kebutuhan (misalnya kirim ke server)
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-500">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6">Buat Kata Sandi Baru</h1>

        <form id="reset-password-form" className="space-y-6" onSubmit={handleSubmit}>
          {/* Input Kata Sandi Baru */}
          <div>
            <label htmlFor="new-password" className="block text-sm font-medium text-gray-700">
              Kata Sandi Baru
            </label>
            <input
              type="password"
              id="new-password"
              name="new-password"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>

          {/* Input Konfirmasi Kata Sandi */}
          <div>
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
              Konfirmasi Kata Sandi
            </label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          {/* Error Message */}
          {errorMessage && (
            <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
          )}

          {/* Tombol Submit */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-blue-500 hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Simpan Kata Sandi Baru
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SandiBaru;
