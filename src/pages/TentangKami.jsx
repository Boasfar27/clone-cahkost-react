import React from 'react';

const TentangKami = () => {
  // Function to toggle mobile menu visibility
  const toggleMenu = () => {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
  };

  // Show and hide dropdown menu on hover
  const handleMouseEnter = (e) => {
    const menu = e.currentTarget.querySelector('.dropdown-menu');
    menu.classList.remove('hidden');
  };

  const handleMouseLeave = (e) => {
    const menu = e.currentTarget.querySelector('.dropdown-menu');
    menu.classList.add('hidden');
  };

  return (
    <div className="font-sans antialiased bg-gray-100">
      

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800">Tentang Kami</h2>
          <p className="mt-4 text-gray-600">
            {/* Isi konten tentang kami */}
            Selamat datang di <strong>CahKost</strong>, solusi terbaik bagi mahasiswa baru <strong>Universitas Negeri Surabaya (UNESA)</strong>...
          </p>
          {/* Add all the other content as needed */}
        </section>
      </main>

     
    </div>
  );
};

export default TentangKami;
