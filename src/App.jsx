import React, { useState } from 'react';
import { 
  Coffee, 
  MapPin, 
  Clock, 
  Phone, 
  Sparkles, 
  Wifi, 
  Calendar, 
  Compass,
  CheckCircle,
  AlertCircle,
  Share2
} from 'lucide-react';
import ContactModal from './components/ContactModal';
import SignatureMenu from './components/SignatureMenu';
import AboutWarkop from './components/AboutWarkop';
import Articles from './components/Articles';

export default function App() {
  // Navigation / Tab State
  const [activeTab, setActiveTab] = useState('home'); // home, signature, about, articles

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Toast State
  const [toasts, setToasts] = useState([]);

  // Toast Helper
  const addToast = (message, type = 'success') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4000);
  };

  // Modal successful reservation handler
  const handleReservationSuccess = (name, guests) => {
    addToast(`Reservasi atas nama "${name}" (${guests}) berhasil diajukan! WhatsApp konfirmasi akan segera dikirim.`);
  };

  // Handle active navigation click
  const handleNavClick = (tab, e) => {
    e.preventDefault();
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Navigation */}
      <nav>
        <div className="wrap">
          <div className="brand" style={{ cursor: 'pointer' }} onClick={(e) => handleNavClick('home', e)}>
            <span className="dot"></span>Warkop 1001cc
          </div>
          <div className="navlinks">
            <a 
              href="#" 
              className={activeTab === 'home' ? 'active' : ''} 
              onClick={(e) => handleNavClick('home', e)}
            >
              Beranda
            </a>
            <a 
              href="#" 
              className={activeTab === 'signature' ? 'active' : ''} 
              onClick={(e) => handleNavClick('signature', e)}
            >
              Menu Signature
            </a>
            <a 
              href="#" 
              className={activeTab === 'about' ? 'active' : ''} 
              onClick={(e) => handleNavClick('about', e)}
            >
              Tentang 1001cc
            </a>
            <a 
              href="#" 
              className={activeTab === 'articles' ? 'active' : ''} 
              onClick={(e) => handleNavClick('articles', e)}
            >
              Cerita Kopi
            </a>
          </div>
          <button onClick={() => setIsModalOpen(true)} className="nav-cta">
            Reservasi Tempat
          </button>
        </div>
      </nav>

      {/* Tab Render Switcher */}
      {activeTab === 'home' && (
        <div className="animate-fade-up">
          {/* Hero Section */}
          <section className="hero">
            <div className="wrap hero-grid">
              <div>
                <div className="eyebrow">Warkop & Ruang Kolaborasi</div>
                <h1>Tempat Nongkrong Hangat,<br /><em>Kopi Terbaik</em> Setiap Saat.</h1>
                <p className="lead">Warkop 1001cc menyajikan biji kopi nusantara pilihan dengan suasana santai yang ramah. Pilihan tepat untuk bersantai bersama sahabat, berdiskusi kelompok, hingga bekerja jarak jauh.</p>
                <div className="hero-actions">
                  <button onClick={() => setIsModalOpen(true)} className="btn-primary">
                    Reservasi Tempat
                  </button>
                  <a href="#" onClick={(e) => handleNavClick('signature', e)} className="btn-ghost">
                    Lihat Menu Khas
                  </a>
                </div>
              </div>

              {/* Styled Polaroid Photo Container */}
              <div className="hero-photo-wrap">
                <div className="polaroid-card">
                  <div className="polaroid-img-box">
                    <img 
                      src="/kopi_cakra.jpg" 
                      alt="Kopi Cakra 1001cc" 
                      className="polaroid-img"
                    />
                  </div>
                  <div className="polaroid-caption">Kopi Cakra</div>
                  <div className="polaroid-sub">Signature Drink · Warkop 1001cc</div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="section" id="fitur">
            <div className="wrap">
              <div className="section-head">
                <div className="eyebrow">Mengapa Memilih Kami?</div>
                <h2>Kenyamanan dan Rasa dalam Satu Tempat</h2>
                <p>Kami merancang ruang dan produk kami agar setiap kunjungan Anda menjadi momen produktif dan menyenangkan.</p>
              </div>
              <div className="features-grid">
                <div className="feature-card">
                  <div className="feature-icon-box">
                    <Wifi size={24} />
                  </div>
                  <h3>Ruang Kerja Nyaman</h3>
                  <p>Dilengkapi Wi-Fi kencang, colokan listrik melimpah di setiap meja, AC dingin, dan suasana tenang yang cocok untuk Work From Cafe (WFC).</p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon-box">
                    <Coffee size={24} />
                  </div>
                  <h3>Kopi Kurasi Nusantara</h3>
                  <p>Biji kopi arabika dan robusta pilihan disangrai secara mandiri (micro-roast) untuk menjamin cita rasa segar khas racikan lokal.</p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon-box">
                    <Clock size={24} />
                  </div>
                  <h3>Buka 24 Jam Non-Stop</h3>
                  <p>Pintu kami selalu terbuka kapan pun Anda membutuhkan asupan kafein lembur malam, sarapan pagi hangat, atau sekadar berdiskusi.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Location and Contact Section */}
          <section className="section" id="lokasi" style={{ background: 'rgba(28,19,13,0.3)' }}>
            <div className="wrap">
              <div className="section-head">
                <div className="eyebrow">Kunjungi Kami</div>
                <h2>Lokasi & Jam Operasional</h2>
                <p>Temukan kami dengan mudah di pusat kota. Kami siap menyambut kehadiran Anda dengan seduhan terbaik.</p>
              </div>

              <div className="contact-grid">
                <div className="contact-info-panel">
                  <div className="contact-item">
                    <MapPin className="contact-item-icon" size={20} />
                    <div className="contact-item-detail">
                      <h4>Alamat Warkop</h4>
                      <p>Jl. Kopi No.1, Babakan Madang, Sentul, Kec. Bogor Utara, Kota Bogor, Jawa Barat 16810</p>
                    </div>
                  </div>

                  <div className="contact-item">
                    <Clock className="contact-item-icon" size={20} />
                    <div className="contact-item-detail">
                      <h4>Jam Operasional</h4>
                      <p>Senin - Minggu: Buka 24 Jam (Setiap Hari)</p>
                    </div>
                  </div>

                  <div className="contact-item">
                    <Phone className="contact-item-icon" size={20} />
                    <div className="contact-item-detail">
                      <h4>Kontak Kami</h4>
                      <p>WhatsApp: +62 812-3456-7890<br />Email: kontak@warkop1001cc.com</p>
                    </div>
                  </div>

                  <div className="contact-item">
                    <Share2 className="contact-item-icon" size={20} />
                    <div className="contact-item-detail">
                      <h4>Instagram Sosial</h4>
                      <p>Ikuti cerita kami di <a href="https://instagram.com" target="_blank" rel="noreferrer" style={{ textDecoration: 'underline', color: 'var(--copper-light)' }}>@warkop1001cc.bogor</a></p>
                    </div>
                  </div>
                </div>

                {/* Stylized Google Map Frame */}
                <div className="mock-map">
                  <div className="map-placeholder-bg"></div>
                  <div className="map-pin-box">
                    <MapPin size={40} color="var(--copper)" style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.3))' }} />
                    <span className="mono" style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>WARKOP 1001CC BOGOR</span>
                    <span style={{ fontSize: '0.7rem', color: 'var(--ink-soft)' }}>1.2 km dari Pintu Tol Sentul Barat</span>
                    <a 
                      href="https://maps.google.com" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="btn-primary map-btn"
                    >
                      Buka Petunjuk Arah
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonial Section */}
          <section className="section" id="testimoni">
            <div className="wrap">
              <div className="testimonial">
                <div className="quote-mark">"</div>
                <div>
                  <blockquote>Suasana nongkrong di sini tenang banget, mejanya luas dan Wi-Fi-nya kencang buat ngerjain tugas. Kopi susu gula arennya bener-bener juara, pas tingkat manisnya dan kopinya terasa pekat!</blockquote>
                  <cite>— Rian, Mahasiswa & Freelancer, Bogor</cite>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="cta-section" id="reservasi">
            <div className="wrap">
              <h2>Ingin Mengadakan Acara?</h2>
              <p>Ajukan reservasi meja untuk pertemuan bisnis, kumpul santai keluarga, atau diskusi komunitas Anda.</p>
              <button onClick={() => setIsModalOpen(true)} className="btn-primary">
                Reservasi Tempat Sekarang
              </button>
            </div>
          </section>
        </div>
      )}

      {activeTab === 'signature' && <SignatureMenu />}
      {activeTab === 'about' && <AboutWarkop />}
      {activeTab === 'articles' && <Articles />}

      {/* Footer */}
      <footer>
        <div className="wrap">
          <p>WARKOP 1001CC © 2026</p>
          <p>TEMPAT NONGKRONG · KOPI NUSANTARA · RUANG KOMUNITAS</p>
        </div>
      </footer>

      {/* Interactive Reservation Modal */}
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSuccess={handleReservationSuccess}
      />

      {/* Success Notification Toasts */}
      <div className="toast-container">
        {toasts.map(toast => (
          <div key={toast.id} className="toast" style={{
            background: toast.type === 'error' ? '#4a1d1d' : '#243a25',
            borderColor: toast.type === 'error' ? 'rgba(196, 77, 77, 0.4)' : 'rgba(124, 139, 93, 0.4)'
          }}>
            {toast.type === 'error' ? <AlertCircle size={16} color="#c44d4d" /> : <CheckCircle size={16} color="var(--sage)" />}
            <span>{toast.message}</span>
          </div>
        ))}
      </div>
    </>
  );
}
