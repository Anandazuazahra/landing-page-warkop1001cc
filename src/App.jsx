import React, { useState, useEffect } from 'react';
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
  ExternalLink,
  ArrowRight,
  Camera,
  Star,
  Menu,
  X
} from 'lucide-react';

const InstagramIcon = ({ size = 14, color = "#C96E28" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const YoutubeIcon = ({ size = 14, color = "#C96E28" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z"></path>
    <path d="m10 15 5-3-5-3v6z"></path>
  </svg>
);

const TikTokIcon = ({ size = 14, color = "#C96E28" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
  </svg>
);

import logoImg from './assets/logo.png';
import heroLatteImg from './assets/hero_latte_art.png';
import SignatureMenu from './components/SignatureMenu';
import AboutWarkop from './components/AboutWarkop';
import Articles from './components/Articles';
import Events from './components/Events';
import ContactModal from './components/ContactModal';
import ScrollReveal from './components/ScrollReveal';
import GallerySection from './components/GallerySection';
import TestimonialsSection from './components/TestimonialsSection';
import AdminCMSModal from './components/AdminCMSModal';
import { useCMSData } from './cms/cmsStore';
import { Settings, Lock } from 'lucide-react';

import mapImg from './assets/warkop_map.png';
import berandaWarkopPhotoImg from './assets/beranda_warkop_photo.jpg';

export default function App() {
  const { cmsData } = useCMSData();
  const siteInfo = cmsData?.siteInfo || {};

  // Navigation / Tab State: 'home', 'signature', 'galeri', 'testimoni', 'event', 'about'
  const [activeTab, setActiveTab] = useState('home');

  // Mobile Drawer State
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Sticky Glass Navbar Scroll State
  const [isScrolled, setIsScrolled] = useState(false);

  // Parallax Tilt State for Hero Polaroid
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // Contact / Reservation Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Admin CMS Modal State
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);

  // Toast State
  const [toasts, setToasts] = useState([]);

  // Navbar Scroll Detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Secret Admin Triggers (URL ?admin=true, hash #admin, or keyboard Ctrl+Shift+A)
  useEffect(() => {
    // Check URL query string or hash for secret admin mode
    const searchParams = new URLSearchParams(window.location.search);
    if (
      searchParams.get('admin') === 'true' ||
      window.location.hash === '#admin' ||
      window.location.hash === '#cms' ||
      window.location.pathname.toLowerCase().includes('/login') ||
      window.location.pathname.toLowerCase().includes('/admin')
    ) {
      setIsAdminModalOpen(true);
    }

    const handleKeyDown = (e) => {
      if ((e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'a') || (e.altKey && e.key.toLowerCase() === 'c')) {
        e.preventDefault();
        setIsAdminModalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Parallax Mouse Movement
  const handleMouseMove = (e) => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 12; // deg shift
    const y = (clientY / innerHeight - 0.5) * 12;
    setTilt({ x, y });
  };

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
    if (e) e.preventDefault();
    setActiveTab(tab);
    setIsMobileMenuOpen(false);

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Toast Notification Container */}
      <div style={{ position: 'fixed', bottom: '20px', right: '20px', left: '20px', zIndex: 9999, display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '380px', margin: '0 auto 0 auto' }}>
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

      {/* Top Navbar with Dynamic Scroll Glass Effect */}
      <nav className={isScrolled ? 'nav-scrolled' : ''}>
        <div className="wrap">
          <div className="brand" style={{ cursor: 'pointer' }} onClick={(e) => handleNavClick('home', e)}>
            <img src={logoImg} alt="Warkop 1001cc Logo" style={{ width: '32px', height: '32px', objectFit: 'contain' }} />
            <span style={{ fontSize: '1.15rem' }}>{siteInfo.brandName || 'Warkop 1001cc'}</span>
          </div>

          {/* Desktop Navigation Links */}
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
              className={activeTab === 'testimoni' ? 'active' : ''}
              onClick={(e) => handleNavClick('testimoni', e)}
            >
              Testimoni
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

          {/* Mobile Hamburger Menu Toggle Button */}
          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Buka Menu Navigasi"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <div className={`mobile-nav-drawer ${isMobileMenuOpen ? 'open' : ''}`}>

          <a
            href="#"
            className={`mobile-nav-link ${activeTab === 'home' ? 'active' : ''}`}
            onClick={(e) => handleNavClick('home', e)}
          >
            <span>Beranda</span>
            <ArrowRight size={16} />
          </a>

          <a
            href="#"
            className={`mobile-nav-link ${activeTab === 'signature' ? 'active' : ''}`}
            onClick={(e) => handleNavClick('signature', e)}
          >
            <span>Menu Signature</span>
            <ArrowRight size={16} />
          </a>

          <a
            href="#"
            className={`mobile-nav-link ${activeTab === 'testimoni' ? 'active' : ''}`}
            onClick={(e) => handleNavClick('testimoni', e)}
          >
            <span>Testimoni Google</span>
            <ArrowRight size={16} />
          </a>

          <a
            href="#"
            className={`mobile-nav-link ${activeTab === 'event' ? 'active' : ''}`}
            onClick={(e) => handleNavClick('event', e)}
          >
            <span>Event & Kegiatan</span>
            <ArrowRight size={16} />
          </a>

          <a
            href="#"
            className={`mobile-nav-link ${activeTab === 'about' ? 'active' : ''}`}
            onClick={(e) => handleNavClick('about', e)}
          >
            <span>Tentang Warkop</span>
            <ArrowRight size={16} />
          </a>

          <a
            href={`https://wa.me/${siteInfo.waNumberRaw || '6288289277876'}?text=Halo%20Warkop%201001cc%2C%20saya%20ingin%20reservasi%20tempat`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ width: '100%', justifyContent: 'center', marginTop: '12px', padding: '12px', textDecoration: 'none' }}
          >
            Reservasi Tempat WA <ArrowRight size={16} />
          </a>
        </div>
      </nav>


      {/* Main Content View Switcher */}
      <main>
        {activeTab === 'home' && (
          <div>
            {/* Hero Section with Parallax Mouse Movement */}
            <section className="hero" onMouseMove={handleMouseMove}>
              <div className="wrap hero-grid">
                <ScrollReveal variant="up">
                  <div>
                    <div className="eyebrow">{siteInfo.eyebrow || 'Warkop & Ruang Kolaborasi'}</div>
                    <h1>
                      {siteInfo.heroTitleLine1 || 'Tempat Nongkrong Hangat,'}
                      <br className="hero-br" />
                      <em>{siteInfo.heroTitleLine2 || 'Kopi Terbaik Setiap Saat.'}</em>
                    </h1>
                    <p className="lead">
                      {siteInfo.heroLead || 'Nikmati kopi nusantara pilihan, makanan favorit, dan suasana nyaman untuk bekerja, berdiskusi, maupun bersantai bersama teman.'}
                    </p>

                    <div className="hero-actions">
                      <a
                        href={`https://wa.me/${siteInfo.waNumberRaw || '6288289277876'}?text=Halo%20Warkop%201001cc%2C%20saya%20ingin%20reservasi%20tempat`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                        style={{ textDecoration: 'none' }}
                      >
                        Reservasi Tempat <ArrowRight size={16} className="btn-icon" />
                      </a>
                      <a href="#" onClick={(e) => handleNavClick('signature', e)} className="btn-ghost">
                        Lihat Menu Khas <ArrowRight size={16} className="btn-icon" />
                      </a>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Hero Polaroid Photo Box with Depth Parallax */}
                <ScrollReveal variant="slide-right" delay={150}>
                  <div className="hero-photo-wrap">
                    <div
                      className="polaroid-card"
                      style={{
                        transform: `rotate(-2deg) rotateY(${tilt.x}deg) rotateX(${-tilt.y}deg)`
                      }}
                    >
                      <div className="polaroid-img-box">
                        <img
                          src={siteInfo.heroImage || siteInfo.aboutImage || berandaWarkopPhotoImg}
                          alt="Warkop 1001cc photo"
                          className="polaroid-img"
                        />
                      </div>
                      <div className="polaroid-caption">Warkop 1001cc — Buka 24 Jam</div>
                      <div className="polaroid-sub">Bojonggede - Kemang (Bomang), Kalisuren</div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </section>

            {/* Features Grid Section with Scroll Reveal */}
            <section className="section" id="fitur">
              <div className="wrap">
                <ScrollReveal variant="up">
                  <div className="section-head">
                    <div className="eyebrow">Mengapa Memilih Kami?</div>
                    <h2>Kenyamanan dan Rasa dalam Satu Tempat</h2>
                    <p>Kami merancang ruang dan produk kami agar setiap kunjungan Anda menjadi momen produktif dan menyenangkan.</p>
                  </div>
                </ScrollReveal>

                <ScrollReveal variant="up" delay={100} stagger>
                  <div className="features-grid">
                    <div className="feature-card">
                      <div className="feature-icon-box" style={{ background: 'rgba(201,124,62,0.15)', color: 'var(--accent-copper)', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                        <Wifi size={24} />
                      </div>
                      <h3 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>Ruang Kerja Nyaman</h3>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>Dilengkapi Wi-Fi kencang, colokan listrik melimpah di setiap meja, AC dingin, dan suasana tenang yang cocok untuk Work From Cafe (WFC).</p>
                    </div>

                    <div className="feature-card">
                      <div className="feature-icon-box" style={{ background: 'rgba(201,124,62,0.15)', color: 'var(--accent-copper)', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                        <Clock size={24} />
                      </div>
                      <h3 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>Buka 24 Jam Non-Stop</h3>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>Siap melayani kebutuhan kopi & camilan hangat Anda kapan pun, baik siang hari maupun larut malam tanpa antrean.</p>
                    </div>

                    <div className="feature-card">
                      <div className="feature-icon-box" style={{ background: 'rgba(201,124,62,0.15)', color: 'var(--accent-copper)', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                        <Coffee size={24} />
                      </div>
                      <h3 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>Signature Kopi Cakra</h3>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>Racikan es kopi susu signature legendaris 1001cc dengan sensasi rasa manis gurih cokelat yang khas dan pekat.</p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </section>

            {/* Customer Testimonials Section */}
            <TestimonialsSection />

            {/* Map / Location Banner */}
            <section className="section" style={{ background: 'var(--bg-cream)', padding: '50px 0' }}>
              <div className="wrap">
                <ScrollReveal variant="up">
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', alignItems: 'center' }}>
                    <div>
                      <div className="eyebrow">Lokasi & Jam Operasional</div>
                      <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2rem)', marginBottom: '14px', color: 'var(--text-headline)' }}>Kunjungi Warkop 1001cc</h2>
                      <p style={{ color: 'var(--text-muted)', lineHeight: '1.65', marginBottom: '20px', fontSize: '0.95rem' }}>
                        Terletak strategis di jalur Bomang (Bojonggede - Kemang), Kalisuren, Tajur Halang. Tempat nongkrong luas, parkir aman, dan tempat yang pas untuk bertemu teman.
                      </p>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem', color: 'var(--text-dark)' }}>
                        {/* Clickable Address */}
                        <a
                          href="https://maps.google.com/?q=Warkop+1001cc+Bojonggede+Kemang+Bomang+Kalisuren"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="card-hover"
                          style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-dark)', textDecoration: 'none', fontWeight: '600', padding: '12px', borderRadius: '12px', background: '#FFFFFF', border: '1px solid var(--border-card)' }}
                        >
                          <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(201, 110, 40, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                            <MapPin size={18} color="var(--accent-copper)" />
                          </div>
                          <span>Kalisuren, Tajur Halang, Bojonggede - Kemang (Bomang)</span>
                        </a>

                        {/* Operational Hours */}
                        <div className="card-hover" style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: '600', padding: '12px', borderRadius: '12px', background: '#FFFFFF', border: '1px solid var(--border-card)' }}>
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
                          className="card-hover"
                          style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-dark)', textDecoration: 'none', fontWeight: '600', padding: '12px', borderRadius: '12px', background: '#FFFFFF', border: '1px solid var(--border-card)' }}
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
                      className="card-hover"
                      style={{ display: 'block', borderRadius: '18px', overflow: 'hidden', border: '1px solid var(--border-card)', boxShadow: '0 15px 35px rgba(0,0,0,0.08)', textDecoration: 'none', position: 'relative' }}
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
                </ScrollReveal>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'signature' && <SignatureMenu />}

        {activeTab === 'testimoni' && <TestimonialsSection />}

        {activeTab === 'event' && <Events onReserve={() => setIsModalOpen(true)} />}

        {activeTab === 'about' && <AboutWarkop />}
      </main>

      {/* Footer */}
      <footer style={{ background: '#1A0E07', color: '#D4A373', padding: '32px 0 24px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="wrap" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px' }}>
          {/* Top Title */}
          <div
            onClick={() => {
              window.adminClickCount = (window.adminClickCount || 0) + 1;
              if (window.adminClickCount >= 3) {
                window.adminClickCount = 0;
                setIsAdminModalOpen(true);
              }
              setTimeout(() => { window.adminClickCount = 0; }, 2000);
            }}
            title="Warkop 1001cc"
            style={{
              fontSize: '0.85rem',
              fontFamily: 'var(--font-mono)',
              fontWeight: '700',
              letterSpacing: '0.12em',
              color: '#C96E28',
              textTransform: 'uppercase',
              cursor: 'default',
              userSelect: 'none'
            }}
          >
            {siteInfo.brandName?.toUpperCase() || 'WARKOP 1001CC'} © 2026
          </div>

          {/* Middle Inline Clickable Contacts Row */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px 20px',
            fontSize: '0.85rem',
            fontFamily: 'var(--font-mono)',
            color: '#C96E28'
          }}>
            {/* Clickable Youtube */}
            <a
              href="https://www.youtube.com/@warkop1001cc"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#C96E28', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
            >
              <YoutubeIcon size={14} color="#C96E28" /> @warkop1001cc
            </a>

            {/* Clickable Tiktok */}
            <a
              href="https://www.tiktok.com/@warkop1001cc"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#C96E28', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
            >
              <TikTokIcon size={14} color="#C96E28" /> @warkop1001cc
            </a>

            {/* Clickable Phone / WhatsApp */}
            <a
              href="https://wa.me/6288289277876"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#C96E28', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
            >
              <Phone size={14} color="#C96E28" /> 0882-8927-7876
            </a>

            {/* Clickable Email */}
            <a
              href="mailto:warkop1001cc@gmail.com"
              style={{ color: '#C96E28', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
            >
              <Mail size={14} color="#C96E28" /> warkop1001cc@gmail.com
            </a>

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
            fontSize: '0.7rem',
            fontFamily: 'var(--font-mono)',
            letterSpacing: '0.1em',
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

      {/* Full Admin CMS Panel Modal */}
      <AdminCMSModal
        isOpen={isAdminModalOpen}
        onClose={() => setIsAdminModalOpen(false)}
      />
    </>
  );
}
