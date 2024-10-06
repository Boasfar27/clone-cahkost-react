import React, { useState } from 'react';

const PremiumAccount = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-gray-100">
      {/* Button to Open Modal */}
      <div className="fixed-icon" onClick={openModal} style={iconStyle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 12h14M12 5l7 7-7 7"
          />
        </svg>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          id="premiumModal"
          className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50"
        >
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full">
            <h2 className="text-2xl font-bold mb-4">Premium Account Information</h2>
            <p className="mb-4">
              Manfaat dari akun premium termasuk peningkatan visibilitas, akses ke fitur promosi eksklusif, dan laporan analitik tentang kost Anda.
            </p>

            {/* Formulir Upload Kost */}
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Nama Kost</label>
                <input
                  type="text"
                  className="border border-gray-300 p-2 rounded w-full"
                  placeholder="Nama Kost"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Deskripsi Kost</label>
                <textarea
                  className="border border-gray-300 p-2 rounded w-full"
                  rows="4"
                  placeholder="Deskripsi lengkap kost"
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Harga Sewa</label>
                <input
                  type="number"
                  className="border border-gray-300 p-2 rounded w-full"
                  placeholder="Harga Sewa"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Kategori Kost</label>
                <select className="border border-gray-300 p-2 rounded w-full">
                  <option>Kost Putra</option>
                  <option>Kost Putri</option>
                  <option>Kost Campur</option>
                </select>
              </div>
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Submit
              </button>
            </form>

            <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <section className="max-w-7xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Premium Account</h1>

        <div className="bg-white shadow-md rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Informasi Akun Premium</h2>
          <p className="mb-4">
            Manfaat dari akun premium seperti peningkatan visibilitas, akses ke fitur promosi eksklusif, dan laporan analitik tentang seberapa sering kost Anda dilihat.
          </p>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Harga Langganan:</h3>
            <p>Rp 300.000/bulan atau Rp 3.000.000/tahun</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Fitur Utama:</h3>
            <ul className="list-disc pl-6">
              <li>Unggah lebih banyak gambar</li>
              <li>Penempatan di posisi lebih atas dalam pencarian</li>
              <li>Fitur iklan di halaman depan</li>
              <li>Penanda premium yang membuat kost terlihat lebih profesional</li>
            </ul>
          </div>
        </div>

        {/* Section: Formulir Upload Kost */}
        <div className="bg-white shadow-md rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Formulir Upload Kost</h2>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Nama Kost</label>
              <input
                type="text"
                className="border border-gray-300 p-2 rounded w-full"
                placeholder="Nama Kost"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Deskripsi Kost</label>
              <textarea
                className="border border-gray-300 p-2 rounded w-full"
                rows="4"
                placeholder="Deskripsi lengkap kost"
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Upload Gambar</label>
              <input
                type="file"
                className="border border-gray-300 p-2 rounded w-full"
                multiple
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Lokasi Kost</label>
              <input
                type="text"
                className="border border-gray-300 p-2 rounded w-full"
                placeholder="Google Maps link"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Harga Sewa (per bulan)</label>
              <input
                type="number"
                className="border border-gray-300 p-2 rounded w-full"
                placeholder="Harga Sewa"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Kategori Kost</label>
              <select className="border border-gray-300 p-2 rounded w-full">
                <option>Kost Putra</option>
                <option>Kost Putri</option>
                <option>Kost Campur</option>
                <option>Kost dengan AC</option>
                <option>Kost dengan Kamar Mandi Dalam</option>
              </select>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
              Submit
            </button>
          </form>
        </div>

        {/* Section: Fitur Promosi */}
        <div className="bg-white shadow-md rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Fitur Promosi</h2>
          <ul className="list-disc pl-6">
            <li>
              Pilihan Iklan Berbayar: Tingkatkan promosi dengan iklan yang ditampilkan di halaman utama atau dalam pencarian terkait.
            </li>
            <li>
              Voucher Promosi: Buat penawaran atau diskon bagi calon penyewa kost.
            </li>
          </ul>
        </div>

        {/* Section: Analitik & Statistik */}
        <div className="bg-white shadow-md rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Analitik & Statistik</h2>
          <ul className="list-disc pl-6">
            <li>
              Jumlah Pengunjung: Tampilkan statistik berapa banyak orang yang melihat iklan kost.
            </li>
            <li>
              Konversi: Lacak berapa banyak orang yang menghubungi pemilik kost setelah melihat iklan.
            </li>
          </ul>
        </div>

        {/* Section: Fitur Kustomisasi */}
        <div className="bg-white shadow-md rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Fitur Kustomisasi</h2>
          <ul className="list-disc pl-6">
            <li>Custom Template: Pilih template atau tema khusus agar tampilan promosi lebih menarik.</li>
            <li>Video Tour: Unggah video tur virtual tentang kost Anda.</li>
          </ul>
        </div>

        {/* Section: Ulasan & Testimoni */}
        <div className="bg-white shadow-md rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Ulasan & Testimoni</h2>
          <ul className="list-disc pl-6">
            <li>Ulasan Penyewa: Ruang bagi penyewa sebelumnya untuk memberikan ulasan tentang kost.</li>
            <li>Rating: Sistem rating dari pengguna lain yang pernah melihat atau menyewa kost.</li>
          </ul>
        </div>

        {/* Section: Dukungan & FAQ */}
        <div className="bg-white shadow-md rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Dukungan & FAQ</h2>
          <ul className="list-disc pl-6">
            <li>Bantuan dan Layanan Pelanggan: Hubungi layanan pelanggan jika butuh bantuan teknis atau panduan.</li>
            <li>FAQ: Pertanyaan umum terkait cara menggunakan fitur premium.</li>
          </ul>
        </div>

        {/* Section: Integrasi Pembayaran */}
        <div className="bg-white shadow-md rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Integrasi Pembayaran</h2>
          <p>
            Opsi pembayaran untuk berlangganan akun premium melalui berbagai metode seperti kartu kredit, transfer bank, dan e-wallet.
          </p>
        </div>
      </section>
    </div>
  );
};

// CSS untuk ikon tetap
const iconStyle = {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  backgroundColor: '#4f46e5',
  color: 'white',
  padding: '15px',
  borderRadius: '50%',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
  cursor: 'pointer',
  zIndex: '50',
};

export default PremiumAccount;
