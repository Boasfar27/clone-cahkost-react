import React, { useState } from 'react';

const Promo = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="font-sans antialiased bg-gray-100">
      

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800">Promo Kost</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Example Promo Items */}
            <PromoItem
              title="Kost Pria 1"
              originalPrice="Rp 500.000"
              discountedPrice="Rp 450.000"
              facilities="Wi-Fi, Kamar Mandi Dalam, Parkir"
              imgUrl="https://picsum.photos/200"
            />
            <PromoItem
              title="Kost Pria 4"
              originalPrice="Rp 1.000.000"
              discountedPrice="Rp 900.000"
              facilities="Wi-Fi, Kamar Mandi Dalam, Parkir, Dapur, Laundry, TV"
              imgUrl="https://picsum.photos/200"
            />
            {/* Add more promo items */}
          </div>
        </section>
      </main>

      
    </div>
  );
};

// PromoItem component
const PromoItem = ({ title, originalPrice, discountedPrice, facilities, imgUrl }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg relative">
      <img src={imgUrl} alt={title} className="rounded-lg w-full" />
      <div className="absolute top-0 left-0 bg-red-500 text-white px-2 py-1 rounded-br-lg promo-icon">
        Promo
      </div>
      <h3 className="mt-4 text-lg font-bold text-gray-800">{title}</h3>
      <p className="mt-2 text-gray-600">
        <span className="discounted-price">{originalPrice}</span> {discountedPrice} / bulan
      </p>
      <p className="mt-2 text-gray-600">Fasilitas: {facilities}</p>
      <a
        href="#"
        className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded-lg transition duration-300 hover:bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-[0_4px_12px_rgba(100,0,255,0.4)] hover:scale-105"
      >
        Sewa
      </a>
    </div>
  );
};

export default Promo;
