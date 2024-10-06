import React, { useState } from "react";
import { Link } from "react-router-dom";

const EditProfile = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  // Function to toggle modal visibility
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  // Dummy function for document upload
  const handleUpload = (e) => {
    e.preventDefault();
    console.log("Dokumen berhasil diupload");
    setModalOpen(false);
  };

  return (
    <div className="bg-gradient-to-r from-indigo-600 to-blue-300 min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-gray-900 rounded-lg shadow-lg overflow-hidden">
        <div className="text-center py-6 bg-gradient-to-r from-indigo-600 to-blue-500 text-white">
          <h1 className="text-2xl md:text-3xl font-bold">CahKost</h1>
          <p className="mt-2">Edit Profil Anda</p>
        </div>

        <div className="p-6 md:p-8">
          {/* Edit Photo Section */}
          <div className="mb-8 flex flex-col items-center">
            <label className="block mb-2 text-sm font-bold text-gray-300">
              Edit Photo
            </label>
            <div className="flex flex-col sm:flex-row items-center">
              <img
                className="w-24 h-24 rounded-full object-cover mb-4 sm:mb-0 sm:mr-4"
                src="https://via.placeholder.com/150"
                alt="Profile"
              />
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition duration-300">
                Change Photo
              </button>
            </div>
          </div>

          <form id="profile-form" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Kolom Kiri */}
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                    Nama Lengkap
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent hover:border-gradient-to-r hover:from-indigo-500 hover:to-blue-500 transition duration-300"
                    placeholder="Masukkan Nama Lengkap"
                  />
                </div>

                <div>
                  <label htmlFor="gender" className="block text-sm font-medium text-gray-300">
                    Jenis Kelamin
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    required
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent hover:border-gradient-to-r hover:from-indigo-500 hover:to-blue-500 transition duration-300"
                  >
                    <option value="">Pilih Jenis Kelamin</option>
                    <option>Laki-laki</option>
                    <option>Perempuan</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="faculty" className="block text-sm font-medium text-gray-300">
                    Fakultas
                  </label>
                  <select
                    id="faculty"
                    name="faculty"
                    required
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent hover:border-gradient-to-r hover:from-indigo-500 hover:to-blue-500 transition duration-300"
                  >
                    <option value="">Pilih fakultas</option>
                    <option>Fakultas Matematika dan Ilmu Pengetahuan Alam</option>
                    <option>Fakultas Teknik</option>
                    <option>Fakultas Ekonomi dan Bisnis</option>
                    <option>Fakultas Ilmu Sosial dan Politik</option>
                    <option>Fakultas Hukum</option>
                    <option>Fakultas Vokasi</option>
                  </select>
                </div>
              </div>

              {/* Kolom Kanan */}
              <div className="space-y-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
                    Nomor Telepon
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent hover:border-gradient-to-r hover:from-indigo-500 hover:to-blue-500 transition duration-300"
                    placeholder="Masukkan Nomor Telepon"
                  />
                </div>

                <div className="relative">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                    Kata Sandi Lama
                  </label>
                  <input
                    id="password"
                    name="password"
                    type={passwordVisible ? "text" : "password"}
                    required
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent hover:border-gradient-to-r hover:from-indigo-500 hover:to-blue-500 transition duration-300"
                    placeholder="Masukan Kata Sandi Lama"
                  />
                  <svg
                    onClick={togglePasswordVisibility}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 absolute right-3 top-9 cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={
                        passwordVisible
                          ? "M3 3l18 18M12 6c4.67 0 8 6 8 6s-3.33 6-8 6-8-6-8-6 3.33-6 8-6zm0 10a4 4 0 100-8 4 4 0 000 8z"
                          : "M12 3C6.48 3 2 9 2 12s4.48 9 10 9 10-6 10-9-4.48-9-10-9zm0 12a3 3 0 100-6 3 3 0 000 6z"
                      }
                    />
                  </svg>
                </div>

                <div className="relative">
                  <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-300">
                    Konfirmasi Kata Sandi
                  </label>
                  <input
                    id="confirm-password"
                    name="confirm-password"
                    type={confirmPasswordVisible ? "text" : "password"}
                    required
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent hover:border-gradient-to-r hover:from-indigo-500 hover:to-blue-500 transition duration-300"
                    placeholder="Konfirmasi Kata Sandi Baru"
                  />
                  <svg
                    onClick={toggleConfirmPasswordVisibility}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 absolute right-3 top-9 cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={
                        confirmPasswordVisible
                          ? "M3 3l18 18M12 6c4.67 0 8 6 8 6s-3.33 6-8 6-8-6-8-6 3.33-6 8-6zm0 10a4 4 0 100-8 4 4 0 000 8z"
                          : "M12 3C6.48 3 2 9 2 12s4.48 9 10 9 10-6 10-9-4.48-9-10-9zm0 12a3 3 0 100-6 3 3 0 000 6z"
                      }
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Akses Premium */}
            <div className="mt-8">
              <label htmlFor="premium" className="block text-sm font-medium text-gray-300">
                Premium Account
              </label>
              <div
                className="flex items-center justify-center bg-gray-700 p-4 rounded-lg cursor-pointer"
                onClick={toggleModal}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-yellow-400"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 .587l3.668 7.431L24 9.587l-6 5.853L19.334 24 12 20.137 4.666 24 6 15.44 0 9.587l8.332-1.569L12 .587z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-400"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 .587l3.668 7.431L24 9.587l-6 5.853L19.334 24 12 20.137 4.666 24 6 15.44 0 9.587l8.332-1.569L12 .587z" />
                </svg>
              </div>
            </div>

            {/* Modal */}
            {modalOpen && (
              <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center">
                <div className="bg-white rounded-lg shadow-lg p-4 w-1/2 relative">
                  <button
                    onClick={toggleModal}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 transition duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                  <h2 className="text-lg font-bold mb-4">Upload Dokumen</h2>
                  <p className="text-sm text-gray-600 mb-4">
                    Silakan upload dokumen KTP dan selfie wajah Anda untuk meningkatkan keamanan akun.
                  </p>
                  <form id="upload-form" className="space-y-4" onSubmit={handleUpload}>
                    <div>
                      <label htmlFor="ktp" className="block text-sm font-medium text-gray-700">
                        Upload KTP
                      </label>
                      <input
                        id="ktp"
                        name="ktp"
                        type="file"
                        required
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent hover:border-gradient-to-r hover:from-indigo-500 hover:to-blue-500 transition duration-300"
                      />
                    </div>
                    <div>
                      <label htmlFor="selfie" className="block text-sm font-medium text-gray-700">
                        Upload Selfie Wajah
                      </label>
                      <input
                        id="selfie"
                        name="selfie"
                        type="file"
                        required
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent hover:border-gradient-to-r hover:from-indigo-500 hover:to-blue-500 transition duration-300"
                      />
                    </div>
                    <br />
                    <button
                      id="upload-btn"
                      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition duration-300"
                      type="submit"
                    >
                      Upload Dokumen
                    </button>
                  </form>
                </div>
              </div>
            )}

            {/* Save Button */}
            <div className="mt-8 text-center">
              <button
                id="save-btn"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium bg-gradient-to-r from-indigo-600 to-blue-500 text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-600 focus:outline-none focus:ring -2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Save Changes
              </button>
            </div>
          </form>

          <p className="mt-6 text-center text-sm text-gray-400">
            Kembali ke{" "}
            <Link
              to="/"
              className="font-medium text-indigo-400 hover:text-indigo-300"
            >
              Beranda
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
