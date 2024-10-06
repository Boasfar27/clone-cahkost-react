import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import gojekLogo from '../assets/img/gojek.png';
import grabLogo from '../assets/img/Grab Official.jpeg';
import unesaLogo from '../assets/img/unesa.png';
import surabayaLogo from '../assets/img/Kota Surabaya 1.png';
import bankBTNLogo from '../assets/img/bankbtn.png';
import bankBCALogo from '../assets/img/bankbca.png';
import bankMandiriLogo from '../assets/img/bankmandiri.png';

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonialCurrentIndex, setTestimonialCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showChatPanel, setShowChatPanel] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    AOS.init({
      once: false,
      mirror: true,
    });

    const slideInterval = setInterval(() => {
      handleSlide(1); // Auto-slide every 3 seconds
    }, 3000);

    return () => clearInterval(slideInterval);
  }, [currentIndex]);

  useEffect(() => {
    let testimonialSlideInterval;

    if (!isHovered) {
      testimonialSlideInterval = setInterval(() => {
        handleTestimonialSlide(1); // Auto-slide every 5 seconds for testimonials
      }, 5000);
    }

    return () => {
      if (testimonialSlideInterval) {
        clearInterval(testimonialSlideInterval);
      }
    };
  }, [testimonialCurrentIndex, isHovered]);

  const handleMenuButton = () => {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
  };

  const handleDropdown = (e) => {
    const menu = e.target.querySelector('.dropdown-menu');
    menu.classList.toggle('hidden');
  };

  const handleSlide = (direction) => {
    const sliderContainer = document.querySelector('.slides');
    const slides = sliderContainer.children;
    const totalSlides = slides.length;
    const slideWidth = slides[0].offsetWidth;
  
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + direction;
      
      // Temporarily allow the index to go out of bounds to show the duplicate slide
      sliderContainer.style.transition = 'transform 0.5s ease';
      sliderContainer.style.transform = `translateX(-${newIndex * slideWidth}px)`;
  
      // If we're at the duplicated last slide (index == totalSlides - 1)...
      if (newIndex === totalSlides - 1) {
        setTimeout(() => {
          // Instantly jump to the real first slide (index == 1), without the transition
          sliderContainer.style.transition = 'none';
          setCurrentIndex(1); // Update index to the real first slide
          sliderContainer.style.transform = `translateX(-${slideWidth}px)`; // Move to the first real slide
        }, 500); // Wait for the transition to finish (500ms)
      }
  
      // If we're at the duplicated first slide (index == 0)...
      if (newIndex === 0) {
        setTimeout(() => {
          // Instantly jump to the real last slide (index == totalSlides - 2), without the transition
          sliderContainer.style.transition = 'none';
          setCurrentIndex(totalSlides - 2); // Update index to the real last slide
          sliderContainer.style.transform = `translateX(-${(totalSlides - 2) * slideWidth}px)`; // Move to the last real slide
        }, 500); // Wait for the transition to finish (500ms)
      }
  
      // Update the index normally within bounds
      return newIndex;
    });
  };
  

  const handleTestimonialSlide = (direction) => {
    const testimonialSliderContainer = document.querySelector('.slider-content');
    const testimonialSlides = testimonialSliderContainer.children;
    const totalTestimonialSlides = testimonialSlides.length;
    const testimonialSlideWidth = testimonialSlides[0].offsetWidth;

    setTestimonialCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + direction;
      if (newIndex >= totalTestimonialSlides) newIndex = 0;
      if (newIndex < 0) newIndex = totalTestimonialSlides - 1;
      return newIndex;
    });

    testimonialSliderContainer.style.transition = 'transform 0.5s ease';
    testimonialSliderContainer.style.transform = `translateX(-${testimonialCurrentIndex * testimonialSlideWidth}px)`;
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleToggleChatPanel = () => {
    setShowChatPanel(!showChatPanel);
  };

  const handleQuestionSelect = (e) => {
    setSelectedQuestion(e.target.value);
    let response = '';

    switch (e.target.value) {
      case 'harga':
        response = '<p>Harga sewa di CahKost berkisar antara Rp 500.000 hingga Rp 5.000.000 per bulan, tergantung tipe kamar dan fasilitas yang Anda pilih.</p>';
        break;
      case 'fasilitas':
        response = '<p>CahKost menyediakan fasilitas seperti Wi-Fi berkecepatan tinggi, AC, kamar mandi dalam, dapur bersama, laundry, dan keamanan 24 jam.</p>';
        break;
      case 'lokasi':
        response = '<p>Kantor CahKost terletak di Kecamatan Gayungan, Surabaya Selatan.</p>';
        break;
      case 'kontak':
        response = '<p>Anda dapat menghubungi CahKost melalui telepon di 0851-5844-2747 atau email di unesacahkost@gmail.com</p>';
        break;
      case 'kebijakan_tamu':
        response = '<p>Tamu diperbolehkan berkunjung hingga pukul 22.00 WIB. Namun, tamu tidak diperkenankan menginap kecuali ada izin khusus dari pengelola.</p>';
        break;
      case 'pembayaran':
        response = '<p>Kami menerima pembayaran melalui transfer bank, dan dompet digital seperti OVO , Gopay, Dana dan Qris. Pembayaran bulanan dilakukan sebelum tanggal 5 setiap bulannya.</p>';
        break;
      case 'kebijakan_refund':
        response = '<p>Jika Anda membatalkan sewa sebelum masa kontrak habis, biaya sewa bulan berjalan tidak dapat dikembalikan. Namun, Anda dapat mendapatkan pengembalian sebagian dari deposit tergantung pada kondisi kamar saat diserahterimakan.</p>';
        break;
      case 'aturan':
        response = '<p>Beberapa aturan umum di CahKost antara lain: Dilarang membawa hewan peliharaan dan dilarang membuat keributan yang mengganggu penghuni lain.</p>';
        break;
      default:
        response = '<p>Silakan pilih pertanyaan di atas untuk mendapatkan informasi lebih lanjut.</p>';
    }

    setResponse("<p>Sedang mengetik...</p>");
    setTimeout(() => {
      setResponse(response);
    }, 5000);
  };

  return (
    
    <div>
      {/* Icon Tambah Produk */}
<div className="fixed bottom-10 right-10 flex flex-col space-y-5 z-50">
  <div
    className="bg-purple-600 hover:bg-blue-600 cursor-pointer p-4 rounded-full shadow-lg transition-colors"
    onClick={handleOpenModal}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-9 w-9 text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M3 12l9-9 9 9M9 21V9h6v12"
      />
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 9v6m-3-3h6"
      />
    </svg>
  </div>

  {/* Icon Live Chat */}
<div
  className="bg-purple-600 hover:bg-blue-600 cursor-pointer p-4 rounded-full shadow-lg transition-colors"
  onClick={handleToggleChatPanel}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-9 w-9 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    {/* Ikon Chat */}
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M8 10h.01M12 10h.01M16 10h.01M21 16.2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2h14l4 4V16.2z"
    />
  </svg>
</div>
</div>
      

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="relative bg-cover bg-center text-center text-white py-20 rounded-b-[50px] overflow-hidden">
          {/* Background image with border-radius */}
          <div className="absolute inset-0" style={{
            backgroundImage: 'url(https://picsum.photos/1920/1080)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '0px 0px 50px 50px',
            zIndex: 0,
          }}></div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-shadow">
              Anggaplah Ini Sebagai<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 hover:from-yellow-400 hover:to-yellow-600 transition-colors duration-300">
                Rumah
              </span>
              Sendiri di Mana Pun Anda Pergi
            </h1>
            <p className="mt-4 text-2xl text-shadow">
              Raihlah kehangatan di mana pun Anda berada. Baik di kota yang ramai maupun di hutan.
            </p>
          </div>
        </section>

        {/* Informasi Kost Anda */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800 text-center">
            kualitas kost
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 hover:from-yellow-400 hover:to-yellow-600 transition-colors duration-300">
              CahKost
            </span>
            yang terjamin nyaman
          </h2>

          {/* slider section */}
          <div className="slider mt-8 relative overflow-hidden">
            <div className="slides flex transition-transform duration-700 ease-in-out" id="slider">
              <div className="slide flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-2 transform hover:scale-105 transition-transform duration-500 ease-in-out">
                <img src="https://picsum.photos/1000/400?random=1" alt="Slide 1" className="w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-500 ease-in-out" />
              </div>

              <div className="slide flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-2 transform hover:scale-105 transition-transform duration-500 ease-in-out">
                <img src="https://picsum.photos/1000/400?random=2" alt="Slide 2" className="w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-500 ease-in-out" />
              </div>

              <div className="slide flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-2 transform hover:scale-105 transition-transform duration-500 ease-in-out">
                <img src="https://picsum.photos/1000/400?random=3" alt="Slide 3" className="w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-500 ease-in-out" />
              </div>

              <div className="slide flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-2 transform hover:scale-105 transition-transform duration-500 ease-in-out">
                <img src="https://picsum.photos/1000/400?random=4" alt="Slide 4" className="w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-500 ease-in-out" />
              </div>

              <div className="slide flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-2 transform hover:scale-105 transition-transform duration-500 ease-in-out">
                <img src="https://picsum.photos/1000/400?random=5" alt="Slide 5" className="w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-500 ease-in-out" />
              </div>
            </div>
          </div>
        </section>

        {/* Di mana Anda ingin tinggal di CahKost? */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800">
            Di mana Anda ingin tinggal di CahKost?
          </h2>
          <form className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Lokasi */}
            <div>
              <label htmlFor="location" className="block text-gray-600">
                Pilih Lokasi Kost
              </label>
              <input type="text" id="location" placeholder="Masukkan lokasi, contoh: Jakarta, Bandung" className="w-full px-4 py-2 border rounded" />
            </div>
            {/* Tipe Kost */}
            <div>
              <label htmlFor="kost-type" className="block text-gray-600">
                Tipe Kost
              </label>
              <select id="kost-type" className="w-full px-4 py-2 border rounded">
                <option value="">Pilih tipe kost</option>
                <option value="pria">Kost Pria</option>
                <option value="wanita">Kost Wanita</option>
                <option value="eksklusif">Kost Eksklusif</option>
              </select>
            </div>
            {/* Tombol Pencarian */}
            <div className="md:col-span-2">
              <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Cari Kost
              </button>
            </div>
          </form>
        </section>

        {/* Updates Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800 text-center"
          class="text-2xl font-bold text-gray-800 text-center mt-8"
          data-aos="fade-up">
            Promo Terbaru dari
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 hover:from-yellow-400 hover:to-yellow-600 transition-colors duration-300">
               CahKost
            </span>
          </h2>
          <p className="text-gray-600 mt-2 text-center"
          data-aos="fade-up"
          data-aos-delay="100">
            Manfaatkan promo terbaik dari CahKost! Dapatkan diskon spesial untuk penyewaan kost dan nikmati kenyamanan dengan harga yang terjangkau. Promo terbatas, jangan sampai terlewatkan!
          </p>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Promo 1 */}
            <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 card hover:bg-gradient-to-r from-blue-400 to-purple-500"
            data-aos="fade-up"
            data-aos-delay="200">
              <div className="overflow-hidden">
                <img src="https://picsum.photos/400/300?random=1" alt="Promo 1" className="rounded-lg w-full transition-transform duration-500 transform hover:scale-110" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-gray-800">
                Diskon 20% untuk Kost Eksklusif
              </h3>
              <p className="mt-2 text-gray-600">
                Dapatkan diskon spesial 20% untuk kost eksklusif di pus at kota dengan fasilitas lengkap! Kesempatan terbatas.
              </p>
            </div>

            {/* Promo 2 */}
            <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 card hover:bg-gradient-to-r from-blue-400 to-purple-500"
            data-aos="fade-up"
            data-aos-delay="300">
              <div className="overflow-hidden">
                <img src="https://picsum.photos/400/300?random=2" alt="Promo 2" className="rounded-lg w-full transition-transform duration-500 transform hover:scale-110" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-gray-800">
                Gratis Biaya Sewa Bulan Pertama
              </h3>
              <p className="mt-2 text-gray-600">
                Nikmati gratis biaya sewa bulan pertama untuk kost pilihan Anda di CahKost. Promo ini berlaku untuk 10 pendaftar pertama!
              </p>
            </div>

            {/* Promo 3 */}
            <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 card hover:bg-gradient-to-r from-blue-400 to-purple-500"
            data-aos="fade-up"
            data-aos-delay="400">
              <div className="overflow-hidden">
                <img src="https://picsum.photos/400/300?random=3" alt="Promo 3" className="rounded-lg w-full transition-transform duration-500 transform hover:scale-110" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-gray-800">
                Diskon 50% untuk Pelajar dan Mahasiswa
              </h3>
              <p className="mt-2 text-gray-600">
                Khusus pelajar dan mahasiswa, dapatkan diskon hingga 50% untuk kost pilihan Anda! Tunjukkan kartu pelajar atau mahasiswa saat pendaftaran.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800 text-center"
          data-aos="fade-up"
          data-aos-delay="700">
            Temukan Solusi Sempurna untuk Setiap Kebutuhan Anda di
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 hover:from-yellow-400 hover:to-yellow-600 transition-colors duration-300">
              CahKost
            </span>
          </h2>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Feature 1 */}
            <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 card hover:bg-gradient-to-r from-blue-500 to-purple-600"
            data-aos="fade-up"
            data-aos-delay="800">
              <img src="https://picsum.photos/200" alt="Feature 1" className="rounded-lg w-full" />
              <h3 className="mt-4 text-lg font-bold text-gray-800">
                Kost Eksklusif di Pusat Kota
              </h3>
              <p className="mt-2 text-gray-600">
                Pilih kost eksklusif di pusat kota dengan fasilitas lengkap, akses mudah ke tempat strategis, dan lingkungan nyaman. Cocok untuk profesional dan mahasiswa.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 card hover:bg-gradient-to-r from-blue-500 to-purple-600"
            data-aos="fade-up"
            data-aos-delay="900">
              <img src="https://picsum.photos/200" alt="Feature 2" className="rounded-lg w-full" />
              <h3 className="mt-4 text-lg font-bold text-gray-800">
                Kost Budget-Friendly
              </h3>
              <p className="mt-2 text-gray-600">
                Temukan kost dengan harga terjangkau tanpa mengorbankan kenyamanan. Ideal untuk para pelajar yang mencari tempat tinggal praktis dan hemat.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 card hover:bg-gradient-to-r from-blue-500 to-purple-600"
            data-aos="fade-up"
            data-aos-delay="1000">
              <img src="https://picsum.photos/200" alt="Feature 3" className="rounded-lg w-full" />
              <h3 className="mt-4 text-lg font-bold text-gray-800">
                Kost Keluarga Nyaman
              </h3>
              <p className="mt- 2 text-gray-600">
                Nikmati kost yang nyaman untuk keluarga kecil dengan ruang luas dan fasilitas lengkap. Lokasi aman, dekat sekolah, dan pusat perbelanjaan.
              </p>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800"
          data-aos="fade-right"
          data-aos-delay="1000">
            Pencarian alamat untuk kost
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 hover:from-yellow-400 hover:to-yellow-600 transition-colors duration-300">
              CahKost
            </span>
          </h2>
          {/* New location iframe */}
          <div className="mt-4"
          data-aos="zoom-in-up"
          data-aos-delay="1500">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34295.990949995474!2d112.70612782875789!3d-7.328062531525581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fb67f8d1bc05%3A0xd7be60ef6890936e!2sKec.%20Gayungan%2C%20Surabaya%2C%20Jawa%20Timur!5e1!3m2!1sid!2sid!4v1727022760565!5m2!1sid!2sid" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </section>

        {/* partnership */}
        <section className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-800"
          data-aos="fade-up"
          data-aos-delay="1700">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 hover:from-yellow-400 hover:to-yellow-600 transition-colors duration-300">
              Partnership
            </span>
          </h2>
          <p className="mt-4 text-gray-600"
          data-aos="fade-right"
          data-aos-delay="1900">
            Terimakasih Kepada Para Partnership Telah Bekerja Sama Dengan CahKost!!!
          </p>

          <div className="mt-8 flex justify-center flex-wrap gap-8">
  <a href="#" className="w-1/3 sm:w-1/4 md:w-1/6"
  data-aos="zoom-in-up"
  data-aos-delay="2000">
    <img src={gojekLogo} alt="Gojek" className="h-16 md:h-20 mx-auto animated-logo" />
  </a>

  <a href="https://www.grab.com/id/" className="w-1/3 sm:w-1/4 md:w-1/6"
  data-aos="zoom-in-up"
  data-aos-delay="2200">
    <img src={grabLogo} alt="Grab" className="h-16 md:h-20 mx-auto animated-logo" />
  </a>

  <a href="#" className="w-1/3 sm:w-1/4 md:w-1/6"
  data-aos="zoom-in-up"
  data-aos-delay="2300">
    <img src={unesaLogo} alt="Unesa" className="h-16 md:h-20 mx-auto animated-logo" />
  </a>

  <a href="#" className="w-1/3 sm:w-1/4 md:w-1/6"
  data-aos="zoom-in-up"
  data-aos-delay="2500">
    <img src={surabayaLogo} alt="Surabaya" className="h-16 md:h-20 mx-auto animated-logo" />
  </a>

  <a href="#" className="w-1/3 sm:w-1/4 md:w-1/6"
  data-aos="zoom-in-up"
  data-aos-delay="2700">
    <img src={bankBTNLogo} alt="Bank BTN" className="h-16 md:h-20 mx-auto animated-logo" />
  </a>

  <a href="#" className="w-1/3 sm:w-1/4 md:w-1/6"
  data-aos="zoom-in-up"
  data-aos-delay="2800">
    <img src={bankBCALogo} alt="Bank BCA" className="h-16 md:h-20 mx-auto animated-logo" />
  </a>

  <a href="#" className="w-1/3 sm:w-1/4 md:w-1/6"
  data-aos="zoom-in-up"
  data-aos-delay="3000">
    <img src={bankMandiriLogo} alt="Bank Mandiri" className="h-16 md:h-20 mx-auto animated-logo" />
  </a>
</div>

        </section>

        {/* Testimonial Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800 text-left">
            Testimoni dari pengguna
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 hover:from-yellow-400 hover:to-yellow-600 transition-colors duration-300"> CahKost</span>
          </h2>
          <p className="mt-4 text-gray-600 text-left">Berikut adalah testimoni dari para penghuni yang pernah tinggal di CahKost.</p>

          <div className="relative mt-8">
            {/* Slider Container */}
            <div id="testimonial-slider" className="overflow-hidden">
              <div className="flex transition-transform duration-500 ease-in-out slider-content" style={{ width: '333.33%' }}>
                {/* Testimoni 1 */}
                <div
                  className="w-1/3 px-4 shrink-0"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-yellow-400 transition duration-300 ease-in-out">
                    <img src="https://picsum.photos/100" alt="User 1" className="rounded-full w-16 h-16 mx-auto" />
                    <p className="mt-4 text-gray-600">"CahKost memberikan pengalaman tinggal yang nyaman dan bersih."</p>
                    <p className="mt-2 text-gray-600 font-bold">- Amanda</p>
                  </div>
                </div>

                {/* Testimoni 2 */}
                <div
                  className="w-1/3 px-4 shrink-0"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-yellow-400 transition duration-300 ease-in-out">
                    <img src="https://picsum.photos/101" alt="User 2" className="rounded-full w-16 h-16 mx-auto" />
                    <p className="mt-4 text-gray-600">"Kamar sangat bersih, fasilitas lengkap, dan suasana sangat tenang. Sangat puas!"</p>
                    <p className="mt-2 text-gray-600 font-bold">- Budi</p>
                  </div>
                </div>

                {/* Testimoni 3 */}
                <div
                  className="w-1/3 px-4 shrink-0"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-yellow-400 transition duration-300 ease-in-out">
                    <img src="https://picsum.photos/102" alt="User 3" className="rounded-full w-16 h-16 mx-auto" />
                    <p className="mt-4 text-gray-600">"Saya merasa sangat nyaman tinggal di CahKost. Lokasi sangat strategis."</p>
                    <p className="mt-2 text-gray-600 font-bold">- Citra</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800">
            Pertanyaan yang Sering Diajukan
          </h2>
          <div className="mt-4">
            <details className="mb-4">
              <summary className="font-bold text-gray-600">
                Apakah harga sewa sudah termasuk biaya listrik dan air?
              </summary>
              <p className="mt-2 text-gray-600">
                "Harga sewa bulanan yang kami tawarkan sudah termasuk biaya air, namun biaya listrik akan dikenakan berdasarkan penggunaan masing-masing kamar. Setiap kamar dilengkapi dengan meteran listrik sendiri sehingga Anda dapat memantau penggunaan secara mandiri."
              </p>
            </details>
            <details className="mb-4">
              <summary className="font-bold text-gray-600">
                Apa saja fasilitas yang tersedia di kost ini?
              </summary>
              <p className="mt-2 text-gray-600">
                "Fasilitas yang kami sediakan meliputi tempat tidur, lemari pakaian, meja belajar, dan AC di setiap kamar. Selain itu, kami juga memiliki akses Wi-Fi, dapur bersama, ruang tamu, serta area parkir yang cukup luas untuk kendaraan pribadi."
              </p>
            </details>
            <details className="mb-4">
              <summary className="font-bold text-gray-600">
                Apakah ada jam malam atau aturan khusus untuk penghuni?
              </summary>
              <p className="mt-2 text-gray-600">
                "Kami tidak memberlakukan jam malam yang ketat, namun demi kenyamanan bersama, kami mengharapkan penghuni untuk menjaga ketenangan setelah pukul 10 malam. Selain itu, kami juga memiliki aturan dasar seperti tidak merokok di dalam ruangan dan menjaga kebersihan area bersama."
              </p>
            </details>
            <details className="mb-4">
              <summary className="font-bold text-gray-600">
                Apakah ada uang jaminan atau deposit yang perlu dibayarkan?
              </summary>
              <p className="mt-2 text-gray-600">
                "Ya, kami meminta uang deposit sebesar satu bulan sewa yang akan dikembalikan saat Anda pindah, asalkan tidak ada kerusakan pada properti dan seluruh tagihan telah dilunasi. Uang deposit ini sebagai bentuk jaminan selama masa tinggal."
              </p>
            </details>
            <details className="mb-4">
              <summary className="font-bold text-gray-600">
                Bagaimana prosedur pembayaran sewa kost?
              </summary>
              <p className="mt-2 text-gray-600">
                "Pembayaran sewa dapat dilakukan secara bulanan melalui transfer bank atau pembayaran tunai. Kami juga memberikan fleksibilitas untuk pembayaran di awal bulan atau di akhir bulan, sesuai dengan perjanjian yang telah disepakati."
              </p>
            </details>
          </div>
        </section>
      </main>

      

      {/* Modal */}
      {showModal && (
        <div id="premiumModal" className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full">
            <h2 className="text-2xl font-bold mb-4">
              Premium Account Information CahKost
            </h2>
            <p className="mb-4">
              Manfaat dari akun premium di CahKost termasuk peningkatan visibilitas, akses ke fitur promosi eksklusif, dan laporan analitik tentang kost Anda.
            </p>

            {/* Formulir Upload Kost */}
            <form id="kostForm">
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Nama Kost
                </label>
                <input type="text" className="border border-gray-300 p-2 rounded w-full" placeholder="Nama Kost" />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Deskripsi Kost
                </label>
                <textarea className="border border-gray-300 p-2 rounded w-full" rows={4} placeholder="Deskripsi lengkap kost" />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Harga Sewa
                </label>
                <input type="number" className="border border-gray-300 p-2 rounded w-full" placeholder="Harga Sewa" />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Kategori Kost
                </label>
                <select className="border border-gray-300 p-2 rounded w-full">
                  <option>Kost Putra</option>
                  <option>Kost Putri</option>
                  <option>Kost Campur</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Upload Foto Kost
                </label>
                <input type="file" id="kostPhotos" name="photos" className="border border-gray-300 p-2 rounded w-full" multiple accept="image/*" />
                <p className="text-sm text-gray-500">
                  Maksimal 10 foto
                </p>
              </div>
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Submit
              </button>
            </form>

            <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded" onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </div>
      )}

     {/* Live Chat */}
{showChatPanel && (
  <div id="chatPanel" className="fixed top-0 right-0 h-full w-96 bg-white shadow-lg transition-all duration-300 overflow-hidden z-50">
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">
        CahKost: Pertanyaan Umum
      </h2>

      {/* Pilihan Pertanyaan */}
      <select id="questionSelect" className="border p-2 rounded w-full mb-4" onChange={handleQuestionSelect}>
        <option value="">-- Pilih Pertanyaan --</option>
        <option value="harga">
          Berapa harga sewa per bulan di CahKost?
        </option>
        <option value="fasilitas">
          Apa saja fasilitas yang tersedia di CahKost?
        </option>
        <option value="lokasi">
          Di mana lokasi CahKost?
        </option>
        <option value="kontak">
          Bagaimana cara menghubungi CahKost?
        </option>
        <option value="kebijakan_tamu">
          Apakah ada kebijakan terkait tamu yang berkunjung?
        </option>
        <option value="pembayaran">
          Metode pembayaran apa saja yang diterima di CahKost?
        </option>
        <option value="kebijakan_refund">
          Bagaimana kebijakan refund jika saya membatalkan sewa?
        </ option>
        <option value="aturan">
          Apakah ada aturan kost yang perlu diketahui penyewa?
        </option>
      </select>

      {/* Area untuk menampilkan jawaban */}
      <div id="responseArea" className="mb-4" dangerouslySetInnerHTML={{ __html: response }}></div>

      <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={handleToggleChatPanel}>
        Tutup
      </button>
    </div>
  </div>
)}
    </div>
  );
}

export default Home;