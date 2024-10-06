import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import Pages
import Home from './pages/Home';
import EditProfile from './pages/EditProfile';
import HistoryPembayaran from './pages/HistoryPembayaran';
import KelasKost from './pages/KelasKost';
import KostEkslusif from './pages/KostEkslusif';
import KostPerempuan from './pages/KostPerempuan';
import KostPria from './pages/KostPria';
import Login from './pages/Login';
import PremiumAcc from './pages/PremiumAcc';
import Promo from './pages/Promo';
import Register from './pages/Register';
import SandiBaru from './pages/SandiBaru';
import TentangKami from './pages/TentangKami';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <Navbar />

        {/* Routing untuk navigasi halaman */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/editprofile" element={<EditProfile />} />
          <Route path="/historypembayaran" element={<HistoryPembayaran />} />
          <Route path="/kelaskost" element={<KelasKost />} />
          <Route path="/kostekslusif" element={<KostEkslusif />} />
          <Route path="/kostperempuan" element={<KostPerempuan />} />
          <Route path="/kostpria" element={<KostPria />} />
          <Route path="/login" element={<Login />} />
          <Route path="/premiumacc" element={<PremiumAcc />} />
          <Route path="/promo" element={<Promo />} />
          <Route path="/register" element={<Register />} />
          <Route path="/sandibaru" element={<SandiBaru />} />
          <Route path="/tentangkami" element={<TentangKami />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
