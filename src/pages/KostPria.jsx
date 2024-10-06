import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const KostPria = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [facilitiesModalOpen, setFacilitiesModalOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [currentKost, setCurrentKost] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "https://picsum.photos/600/400?random=1",
    "https://picsum.photos/600/400?random=2",
    "https://picsum.photos/600/400?random=3",
    "https://picsum.photos/600/400?random=4",
    "https://picsum.photos/600/400?random=5",
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const openModal = (kostId) => {
    setCurrentKost(kostId);
    setCurrentImageIndex(0); // Reset to first image
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const openFacilitiesModal = () => setFacilitiesModalOpen(true);
  const closeFacilitiesModal = () => setFacilitiesModalOpen(false);

  const openBookingModal = () => setBookingModalOpen(true);
  const closeBookingModal = () => setBookingModalOpen(false);

  const openPaymentModal = () => {
    setPaymentModalOpen(true);
    setBookingModalOpen(false); // Close previous modal
  };

  const closePaymentModal = () => setPaymentModalOpen(false);

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (currentImageIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="font-sans antialiased bg-gray-100">
      {/* Header */}
      

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Kost Pria Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800">Kost Pria</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg relative">
              <img src="https://picsum.photos/150" alt="Kost Pria 1" className="rounded-lg w-full" />
              <div className="absolute top-0 left-0 bg-red-500 text-white px-2 py-1 rounded-br-lg">Promo</div>
              <h3 className="mt-4 text-lg font-bold text-gray-800">Kost Pria 1</h3>
              <p className="mt-2 text-gray-600">Rp 500.000 / bulan</p>
              <a
                href="#"
                className="mt-4 inline-block bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded-lg transition duration-300 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-600"
                onClick={() => openModal('kost-1')}
              >
                Sewa
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Main Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative">
            <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={closeModal}>✖</button>

            <h3 className="text-xl font-bold text-gray-800">Kost Pria 1</h3>
            <p className="text-gray-600">Kota: Surabaya</p>
            <p className="text-gray-600">Alamat lengkap: Jl. Kost Aman, No. 123</p>

            {/* Image Slider */}
            <div className="mt-4 relative">
              <img src={images[currentImageIndex]} alt="Kost" className="w-full h-48 object-cover" />

              <button className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full focus:outline-none" onClick={prevImage}>
                &#10094;
              </button>

              <button className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full focus:outline-none" onClick={nextImage}>
                &#10095;
              </button>
            </div>

            {/* Buttons */}
            <button className="mt-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-lg transition duration-300 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-500 focus:outline-none" onClick={openFacilitiesModal}>
              Fasilitas
            </button>
            <button className="mt-4 bg-gradient-to-r from-green-400 to-green-600 text-white py-2 px-4 rounded-lg transition duration-300 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-700 focus:outline-none" onClick={openBookingModal}>
              Mulai Sewa
            </button>
          </div>
        </div>
      )}

      {/* Facilities Modal */}
      {facilitiesModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative">
            <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={closeFacilitiesModal}>✖</button>

            <h3 className="text-xl font-bold text-gray-800">Fasilitas</h3>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="flex items-center">
                <i className="fa-solid fa-wifi text-gray-600 text-xl"></i>
                <span className="ml-2 text-gray-600">Wi-Fi</span>
              </div>
              <div className="flex items-center">
                <i className="fa-solid fa-bath text-gray-600 text-xl"></i>
                <span className="ml-2 text-gray-600">Kamar Mandi Dalam</span>
              </div>
              <div className="flex items-center">
                <i className="fa-solid fa-square-parking text-gray-600 text-xl"></i>
                <span className="ml-2 text-gray-600">Parkir</span>
              </div>
              <div className="flex items-center">
                <i className="fa-solid fa-air-conditioner text-gray-600 text-xl"></i>
                <span className="ml-2 text-gray-600">AC</span>
              </div>
              <div className="flex items-center">
                <i className="fa-solid fa-jug-detergent text-gray-600 text-xl"></i>
                <span className="ml-2 text-gray-600">Laundry</span>
              </div>
              <div className="flex items-center">
                <i className="fa-solid fa-tv text-gray-600 text-xl"></i>
                <span className="ml-2 text-gray-600">TV</span>
              </div>
              <div className="flex items-center">
                <i className="fa-solid fa-water text-gray-600 text-xl"></i>
                <span className="ml-2 text-gray-600">Kolam Renang</span>
              </div>
              <div className="flex items-center">
                <i className="fa-solid fa-dumbbell text-gray-600 text-xl"></i>
                <span className="ml-2 text-gray-600">Gym</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Booking Modal */}
      {bookingModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative">
            <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={closeBookingModal}>✖</button>

            <h3 className="text-xl font-bold text-gray-800">Form Sewa</h3>
            <form className="mt-4 space-y-4">
              <div>
                <label className="block text-gray-600">Nama Lengkap</label>
                <input type="text" className="w-full px-4 py-2 border rounded-lg" placeholder="Masukkan nama lengkap" />
              </div>
              <div>
                <label className="block text-gray-600">Nomor Telepon</label>
                <input type="text" className="w-full px-4 py-2 border rounded-lg" placeholder="Masukkan nomor telepon" />
              </div>
              <div>
                <label className="block text-gray-600">Durasi Sewa (bulan)</label>
                <select className="w-full px-4 py-2 border rounded-lg">
                  {[...Array(12)].map((_, index) => (
                    <option key={index} value={index + 1}>{`${index + 1} bulan`}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-gray-600">Upload KTP</label>
                <input type="file" className="w-full px-4 py-2 border rounded-lg" accept="image/*" />
              </div>

              <button type="button" className="w-full bg-green-500 text-white py-2 px-4 rounded-lg" onClick={openPaymentModal}>
                Lanjutkan ke Pembayaran
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Payment Modal */}
      {paymentModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative">
            <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={closePaymentModal}>✖</button>

            <h3 className="text-xl font-bold text-gray-800">Pembayaran</h3>
            <p className="text-gray-600">Pilih metode pembayaran:</p>
            <div className="mt-4 space-y-2">
              <div className="flex items-center space-x-2">
                <img src="/assets/img/bankbca.png" alt="Bank BCA" className="h-8" />
                <button className="w-full text-black py-2 px-4 rounded-lg border border-black">Transfer Bank BCA</button>
              </div>
              <div className="flex items-center space-x-2">
                <img src="/assets/img/bankmandiri.png" alt="Bank Mandiri" className="h-8" />
                <button className="w-full text-black py-2 px-4 rounded-lg border border-black">Transfer Bank Mandiri</button>
              </div>
            </div>
          </div>
        </div>
      )}

      
    </div>
  );
};

export default KostPria;
