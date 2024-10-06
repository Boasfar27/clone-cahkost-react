import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const KostPerempuan = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const kostList = [
    {
      id: 1,
      title: 'Kost Wanita 1',
      price: 'Rp 500.000',
      facilities: 'Wi-Fi, Kamar Mandi Dalam, Parkir',
      img: 'https://picsum.photos/200',
      promo: true,
    },
    {
      id: 2,
      title: 'Kost Wanita 2',
      price: 'Rp 800.000',
      facilities: 'Wi-Fi, Kamar Mandi Dalam, Parkir, Dapur',
      img: 'https://picsum.photos/200',
    },
    {
      id: 3,
      title: 'Kost Wanita 3',
      price: 'Rp 1.000.000',
      facilities: 'Wi-Fi, Kamar Mandi Dalam, Parkir, Dapur, Laundry',
      img: 'https://picsum.photos/200',
    },
    {
      id: 4,
      title: 'Kost Wanita 4',
      price: 'Rp 1.200.000',
      facilities: 'Wi-Fi, Kamar Mandi Dalam, Parkir, Dapur, Laundry, TV',
      img: 'https://picsum.photos/200',
      promo: true,
    },
    // Add more kost items as needed based on the original list
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="font-sans antialiased bg-gray-100">
      

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Kost Wanita Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800">Kost Wanita</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {kostList.map((kost) => (
              <div key={kost.id} className="bg-white p-4 rounded-lg shadow hover:shadow-lg relative">
                <img src={kost.img} alt={kost.title} className="rounded-lg w-full" />
                {kost.promo && (
                  <div className="absolute top-0 left-0 bg-red-500 text-white px-2 py-1 rounded-br-lg">Promo</div>
                )}
                <h3 className="mt-4 text-lg font-bold text-gray-800">{kost.title}</h3>
                <p className="mt-2 text-gray-600">{kost.price} / bulan</p>
                <p className="mt-2 text-gray-600">{kost.facilities}</p>
                <a
                  href="#"
                  className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded-lg transition duration-300 hover:bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-[0_4px_12px_rgba(100,0,255,0.4)] hover:scale-105"
                >
                  Sewa
                </a>
              </div>
            ))}
          </div>
        </section>
      </main>

      
    </div>
  );
};

export default KostPerempuan;
