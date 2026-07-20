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
  Share2,
  Mail,
  MessageCircle,
  ExternalLink
} from 'lucide-react';

const InstagramIcon = ({ size = 14, color = "#C96E28" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

import logoImg from './assets/logo.png';
import heroLatteImg from './assets/hero_latte_art.png';
import SignatureMenu from './components/SignatureMenu';
import AboutWarkop from './components/AboutWarkop';
import Articles from './components/Articles';
import Events from './components/Events';
import ContactModal from './components/ContactModal';

import mapImg from './assets/warkop_map.png';
import berandaWarkopPhotoImg from './assets/beranda_warkop_photo.jpg';

export default function App() {
  // Navigation / Tab State: 'home', 'signature', 'event', 'about'
  const [activeTab, setActiveTab] = useState('home');

  // Contact / Reservation Modal State
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

  const handleReservationSuccess = (name, guests) => {
    addToast(`Reservasi atas nama "${name}" (${guests}) berhasil diajukan! CS kami akan segera menghubungi via WA.`);
  };

  const handleNavClick = (tab, e) => {
    e.preventDefault();
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Toast Notification Container */}
      <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 9999, display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '380px' }}>
        {toasts.map((toast) => (
          <div
            key={toast.id}
            style={{
              background: '#3E2312',
              color: '#FFF',
              padding: '14px 18px',
              borderRadius: '12px',
              fontSize: '0.85rem',
              boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              borderLeft: '4px solid #C96E28',
              animation: 'fadeUp 0.3s ease'
            }}
          >
            <CheckCircle size={18} color="#C96E28" />
            <span>{toast.message}</span>
          </div>
        ))}
      </div>

      {/* Top Navbar */}
      <nav>
        <div className="wrap">
          <div className="brand" style={{ cursor: 'pointer' }} onClick={(e) => handleNavClick('home', e)}>
            <img src={logoImg} alt="Warkop 1001cc Logo" style={{ width: '32px', height: '32px', objectFit: 'contain' }} />
            <span style={{ fontSize: '1.15rem' }}>Warkop 1001cc</span>
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
              Our Signature
            </a>

            <a
              href="#"
              className={activeTab === 'event' ? 'active' : ''}
              onClick={(e) => handleNavClick('event', e)}
            >
              Event
            </a>

            <a
              href="#"
              className={activeTab === 'about' ? 'active' : ''}
              onClick={(e) => handleNavClick('about', e)}
            >
              Tentang Warkop
            </a>
          </div>

          <button onClick={() => setIsModalOpen(true)} className="nav-cta">
            Reservasi Tempat
          </button>
        </div>
      </nav>

      {/* Main Content View Switcher */}
      <main>
        {activeTab === 'home' && (
          <div className="animate-fade-up">
            {/* Hero Section */}
            <section className="hero">
              <div className="wrap hero-grid">
                <div>
                  <div className="eyebrow">Warkop & Ruang Kolaborasi</div>
                  <h1>Tempat Nongkrong Hangat,<br /><em>Kopi Terbaik</em> Setiap Saat.</h1>
                  <p className="lead">Nikmati kopi nusantara pilihan, makanan favorit, dan suasana nyaman untuk bekerja, berdiskusi, maupun bersantai bersama teman.</p>
                  
                  <div className="hero-actions">
                    <button onClick={() => setIsModalOpen(true)} className="btn-primary">
                      Reservasi Tempat
                    </button>
                    <a href="#" onClick={(e) => handleNavClick('signature', e)} className="btn-ghost">
                      Lihat Menu Khas
                    </a>
                  </div>
                </div>

                {/* Hero Polaroid Photo Box */}
                <div className="hero-photo-wrap">
                  <div className="polaroid-card">
                    <div className="polaroid-img-box">
                      <img 
                        src={berandaWarkopPhotoImg} 
                        alt="Warkop 1001cc photo" 
                        className="polaroid-img"
                      />
                    </div>
                    <div className="polaroid-caption">Warkop 1001cc — Buka 24 Jam</div>
                    <div className="polaroid-sub">Bojonggede - Kemang (Bomang), Kalisuren</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Features Grid Section */}
            <section className="section" id="fitur">
              <div className="wrap">
                <div className="section-head">
                  <div className="eyebrow">Mengapa Memilih Kami?</div>
                  <h2>Kenyamanan dan Rasa dalam Satu Tempat</h2>
                  <p>Kami merancang ruang dan produk kami agar setiap kunjungan Anda menjadi momen produktif dan menyenangkan.</p>
                </div>

                <div className="features-grid">
                  <div className="feature-card">
                    <div className="feature-icon-box" style={{ background: 'rgba(201,124,62,0.15)', color: 'var(--copper-light)', width: '48px', height: '48px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Wifi size={24} />
                    </div>
                    <h3>Ruang Kerja Nyaman</h3>
                    <p>Dilengkapi Wi-Fi kencang, colokan listrik melimpah di setiap meja, AC dingin, dan suasana tenang yang cocok untuk Work From Cafe (WFC).</p>
                  </div>

                  <div className="feature-card">
                    <div className="feature-icon-box" style={{ background: 'rgba(201,124,62,0.15)', color: 'var(--copper-light)', width: '48px', height: '48px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Clock size={24} />
                    </div>
                    <h3>Buka 24 Jam Non-Stop</h3>
                    <p>Siap melayani kebutuhan kopi & camilan hangat Anda kapan pun, baik siang hari maupun larut malam tanpa antrean.</p>
                  </div>

                  <div className="feature-card">
                    <div className="feature-icon-box" style={{ background: 'rgba(201,124,62,0.15)', color: 'var(--copper-light)', width: '48px', height: '48px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Coffee size={24} />
                    </div>
                    <h3>Signature Kopi Cakra</h3>
                    <p>Racikan es kopi susu signature legendaris 1001cc dengan sensasi rasa manis gurih cokelat yang khas dan pekat.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Map / Location Banner */}
            <section className="section" style={{ background: 'var(--bg-cream)', padding: '60px 0' }}>
              <div className="wrap" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
                <div>
                  <div className="eyebrow">Lokasi & Jam Operasional</div>
                  <h2 style={{ fontSize: '2rem', marginBottom: '16px', color: 'var(--text-headline)' }}>Kunjungi Warkop 1001cc</h2>
                  <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '24px' }}>
                    Terletak strategis di jalur Bomang (Bojonggede - Kemang), Kalisuren, Tajur Halang. Tempat nongkrong luas, parkir aman, dan tempat yang pas untuk bertemu teman.
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '0.95rem', color: 'var(--text-dark)' }}>
                    {/* Clickable Address */}
                    <a 
                      href="https://maps.google.com/?q=Warkop+1001cc+Bojonggede+Kemang+Bomang+Kalisuren" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-dark)', textDecoration: 'none', fontWeight: '600' }}
                    >
                      <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(201, 110, 40, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <MapPin size={18} color="var(--accent-copper)" />
                      </div>
                      <span>Kalisuren, Tajur Halang, Bojonggede - Kemang (Bomang)</span>
                    </a>

                    {/* Operational Hours */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: '600' }}>
                      <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(201, 110, 40, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Clock size={18} color="var(--accent-copper)" />
                      </div>
                      <span>Buka 24 Jam Non-Stop Setiap Hari (Senin - Minggu)</span>
                    </div>

                    {/* Clickable WhatsApp Phone */}
                    <a 
                      href="https://wa.me/6288289277876" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-dark)', textDecoration: 'none', fontWeight: '600' }}
                    >
                      <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(201, 110, 40, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Phone size={18} color="var(--accent-copper)" />
                      </div>
                      <span>0882-8927-7876 (WhatsApp Reservasi & Informasi)</span>
                    </a>
                  </div>
                </div>

                {/* Clickable Map Image Container */}
                <a 
                  href="https://maps.google.com/?q=Warkop+1001cc+Bojonggede+Kemang+Bomang+Kalisuren" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ display: 'block', borderRadius: '20px', overflow: 'hidden', border: '1px solid var(--border-card)', boxShadow: '0 15px 35px rgba(0,0,0,0.08)', textDecoration: 'none', position: 'relative' }}
                >
                  <img src={mapImg} alt="Peta Lokasi Warkop 1001cc" style={{ width: '100%', height: 'auto', display: 'block' }} />
                  <div style={{
                    position: 'absolute',
                    bottom: '12px',
                    right: '12px',
                    background: 'rgba(0, 0, 0, 0.75)',
                    color: '#FFFFFF',
                    padding: '8px 14px',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    backdropFilter: 'blur(4px)'
                  }}>
                    <ExternalLink size={14} /> Buka Peta Petunjuk Arah
                  </div>
                </a>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'signature' && <SignatureMenu />}

        {activeTab === 'event' && <Events onReserve={() => setIsModalOpen(true)} />}

        {activeTab === 'about' && <AboutWarkop />}
      </main>

      {/* Footer - 1:1 Verbatim Match with User Screenshot */}
      <footer style={{ background: '#1A0E07', color: '#D4A373', padding: '36px 0 28px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="wrap" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px' }}>
          {/* Top Title */}
          <div style={{
            fontSize: '0.85rem',
            fontFamily: 'var(--font-mono)',
            fontWeight: '700',
            letterSpacing: '0.12em',
            color: '#C96E28',
            textTransform: 'uppercase'
          }}>
            WARKOP 1001CC © 2026
          </div>

          {/* Middle Inline Clickable Contacts Row */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            fontSize: '0.86rem',
            fontFamily: 'var(--font-mono)',
            color: '#C96E28'
          }}>
            {/* Clickable Location */}
            <a 
              href="https://maps.google.com/?q=Warkop+1001cc+Bojonggede+Kemang+Bomang+Kalisuren" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#C96E28', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
            >
              <MapPin size={14} color="#C96E28" /> Kalisuren, Tajur Halang
            </a>

            <span style={{ color: 'rgba(255,255,255,0.25)' }}>·</span>

            {/* Clickable Phone / WhatsApp */}
            <a 
              href="https://wa.me/6288289277876" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#C96E28', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
            >
              <Phone size={14} color="#C96E28" /> 0882-8927-7876
            </a>

            <span style={{ color: 'rgba(255,255,255,0.25)' }}>·</span>

            {/* Clickable Email */}
            <a 
              href="mailto:warkop1001cc@gmail.com" 
              style={{ color: '#C96E28', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
            >
              <Mail size={14} color="#C96E28" /> warkop1001cc@gmail.com
            </a>

            <span style={{ color: 'rgba(255,255,255,0.25)' }}>·</span>

            {/* Clickable Instagram */}
            <a 
              href="https://www.instagram.com/warkop1001cc" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#C96E28', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
            >
              <InstagramIcon size={14} color="#C96E28" /> @warkop1001cc
            </a>
          </div>

          {/* Bottom Subtitle Line */}
          <div style={{
            fontSize: '0.72rem',
            fontFamily: 'var(--font-mono)',
            letterSpacing: '0.12em',
            color: 'rgba(255,255,255,0.4)',
            textTransform: 'uppercase',
            marginTop: '4px'
          }}>
            TEMPAT NONGKRONG · KOPI NUSANTARA · RUANG KOMUNITAS
          </div>
        </div>
      </footer>

      {/* Contact & Reservation Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={handleReservationSuccess}
      />
    </>
  );
}
