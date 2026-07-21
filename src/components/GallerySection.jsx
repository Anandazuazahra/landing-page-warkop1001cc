import React, { useState, useEffect } from 'react';
import { Sparkles, Eye, X, ChevronLeft, ChevronRight, MapPin, Camera } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

import warkopPhotoImg from '../assets/warkop_photo.jpg';
import berandaWarkopPhotoImg from '../assets/beranda_warkop_photo.jpg';
import kopiCakraGlassImg from '../assets/kopi_cakra_glass.png';
import matchaCakraGlassImg from '../assets/matcha_cakra_glass.png';
import heroLatteImg from '../assets/hero_latte_art.png';
import eventSayembaraImg from '../assets/event_sayembara_kreator.jpg';
import eventKaraokeImg from '../assets/event_lomba_karaoke.jpg';

const GALLERY_ITEMS = [
  {
    id: 1,
    title: 'Area Duduk & Mural Kopi Cakra',
    category: 'Suasana Warkop',
    image: warkopPhotoImg,
    location: 'Area Utama Warkop 1001cc',
    desc: 'Suasana hangat tempat duduk kayu dengan sentuhan mural Kopi Cakra yang ikonik. Dilengkapi colokan listrik di setiap meja.'
  },
  {
    id: 2,
    title: 'Beranda Outdoor & Parkir Luas',
    category: 'Suasana Warkop',
    image: berandaWarkopPhotoImg,
    location: 'Jalur Bomang, Kalisuren',
    desc: 'Area terbuka 24 jam dengan parkir kendaraan melimpah, suasana sejuk untuk nongkrong malam bersama teman.'
  },
  {
    id: 3,
    title: 'Signature Kopi Cakra (Ngopi Sambil Nyoklat)',
    category: 'Signature Menu',
    image: kopiCakraGlassImg,
    location: 'Barista Station 1001cc',
    desc: 'Sensasi unik es kopi susu racikan rahasia 1001cc dipadu dengan rasa pahit manis cokelat pekat.'
  },
  {
    id: 4,
    title: 'Cakra Matcha Latte Japanese Blend',
    category: 'Signature Menu',
    image: matchaCakraGlassImg,
    location: 'Barista Station 1001cc',
    desc: 'Matcha jepang pilihan dipadu susu gurih creamy, pilihan favorit pengunjung non-coffee.'
  },
  {
    id: 5,
    title: 'Latte Art Nusantara Freshly Brewed',
    category: 'Signature Menu',
    image: heroLatteImg,
    location: 'Espresso Bar 1001cc',
    desc: 'Racikan kopi espresso dari biji kopi sangrai nusantara dengan foam halus nan elegan.'
  },
  {
    id: 6,
    title: 'Sayembara Kreator 1001cc',
    category: 'Event & Komunitas',
    image: eventSayembaraImg,
    location: 'Warkop 1001cc & Digital',
    desc: 'Ajang kreasi video Reels & TikTok komunitas pengunjung dengan Grand Prize total Rp 4.000.000.'
  },
  {
    id: 7,
    title: 'Keseruan Lomba Karaoke Batch 2',
    category: 'Event & Komunitas',
    image: eventKaraokeImg,
    location: 'Panggung Utama Warkop 1001cc',
    desc: 'Dokumentasi momen meriah lomba karaoke anak & remaja dengan antusiasme penonton memadati warkop.'
  }
];

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [activeImageIndex, setActiveImageIndex] = useState(null);
  const [isFading, setIsFading] = useState(false);

  const categories = ['Semua', 'Suasana Warkop', 'Signature Menu', 'Event & Komunitas'];

  const filteredItems = selectedCategory === 'Semua'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  const currentItem = activeImageIndex !== null ? filteredItems[activeImageIndex] : null;

  const handleOpenLightbox = (index) => {
    setActiveImageIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseLightbox = () => {
    setActiveImageIndex(null);
    document.body.style.overflow = 'auto';
  };

  const handleNext = () => {
    if (activeImageIndex === null) return;
    setIsFading(true);
    setTimeout(() => {
      setActiveImageIndex((prev) => (prev + 1) % filteredItems.length);
      setIsFading(false);
    }, 150);
  };

  const handlePrev = () => {
    if (activeImageIndex === null) return;
    setIsFading(true);
    setTimeout(() => {
      setActiveImageIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
      setIsFading(false);
    }, 150);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeImageIndex === null) return;
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') handleCloseLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImageIndex, filteredItems]);

  return (
    <section className="section" id="galeri" style={{ padding: '80px 0' }}>
      <div className="wrap">
        <ScrollReveal variant="up">
          <div className="section-head">
            <div className="eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <Camera size={14} color="var(--accent-copper)" /> Galeri & Suasana
            </div>
            <h2>Foto & Momen Warkop 1001cc</h2>
            <p>Intip kehangatan ruang, sajian signature, dan keseruan aktivitas komunitas di Warkop 1001cc.</p>

            {/* Filter Pills */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '10px',
                flexWrap: 'wrap',
                marginTop: '28px'
              }}
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    background: selectedCategory === cat ? 'var(--accent-copper)' : '#FFFFFF',
                    color: selectedCategory === cat ? '#FFFFFF' : 'var(--text-dark)',
                    border: selectedCategory === cat ? '1px solid var(--accent-copper)' : '1px solid var(--border-card)',
                    padding: '9px 20px',
                    borderRadius: '20px',
                    fontWeight: '700',
                    fontSize: '0.88rem',
                    cursor: 'pointer',
                    transition: 'all 0.25s var(--ease-out-smooth)',
                    boxShadow: selectedCategory === cat ? '0 6px 16px rgba(201, 110, 40, 0.35)' : '0 2px 8px rgba(0,0,0,0.05)'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Gallery Grid */}
        <ScrollReveal variant="up" delay={100} stagger>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
              gap: '18px'
            }}
          >
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="gallery-card"
                onClick={() => handleOpenLightbox(index)}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '18px',
                  overflow: 'hidden',
                  border: '1px solid var(--border-card)',
                  cursor: 'pointer',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.04)',
                  position: 'relative'
                }}
              >
                <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.4s var(--ease-out-smooth)'
                    }}
                  />
                  {/* Overlay icon on hover */}
                  <div
                    className="gallery-overlay"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'rgba(34, 15, 7, 0.45)',
                      opacity: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'opacity 0.25s ease'
                    }}
                  >
                    <div
                      style={{
                        background: '#FFFFFF',
                        color: 'var(--text-dark)',
                        padding: '10px 18px',
                        borderRadius: '20px',
                        fontWeight: '700',
                        fontSize: '0.85rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        boxShadow: '0 4px 14px rgba(0,0,0,0.2)'
                      }}
                    >
                      <Eye size={16} color="var(--accent-copper)" /> Perbesar Foto
                    </div>
                  </div>
                </div>

                <div style={{ padding: '16px 20px' }}>
                  <div
                    style={{
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: '700',
                      color: 'var(--accent-copper)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      marginBottom: '4px'
                    }}
                  >
                    {item.category}
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.05rem',
                      color: 'var(--text-headline)',
                      lineHeight: '1.3'
                    }}
                  >
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>

      {/* LIGHTBOX MODAL WITH SMOOTH FADE TRANSITION */}
      {currentItem && (
        <div className="lightbox-backdrop" onClick={handleCloseLightbox}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#FFFFFF',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 25px 60px rgba(0,0,0,0.4)',
              border: '1px solid rgba(255,255,255,0.2)'
            }}
          >
            {/* Modal Header Bar */}
            <div
              style={{
                padding: '16px 24px',
                background: '#1A0E07',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid rgba(255,255,255,0.1)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', fontWeight: '700' }}>
                <span style={{ color: 'var(--accent-copper)' }}>●</span>
                <span>{currentItem.category}</span>
                <span style={{ opacity: 0.4 }}>|</span>
                <span style={{ opacity: 0.75, fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>
                  {activeImageIndex + 1} / {filteredItems.length}
                </span>
              </div>

              <button
                onClick={handleCloseLightbox}
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  border: 'none',
                  color: '#FFFFFF',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'background 0.2s ease'
                }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body with Image + Controls */}
            <div style={{ position: 'relative', background: '#0F0804', minHeight: '380px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {/* Prev Button */}
              <button
                onClick={handlePrev}
                style={{
                  position: 'absolute',
                  left: '16px',
                  zIndex: 2,
                  background: 'rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  color: '#FFFFFF',
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                <ChevronLeft size={24} />
              </button>

              {/* Main Fading Image */}
              <div
                style={{
                  width: '100%',
                  maxHeight: '520px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  overflow: 'hidden',
                  padding: '20px'
                }}
              >
                <img
                  src={currentItem.image}
                  alt={currentItem.title}
                  className="lightbox-img-fade"
                  style={{
                    maxWidth: '100%',
                    maxHeight: '480px',
                    objectFit: 'contain',
                    borderRadius: '12px',
                    opacity: isFading ? 0.2 : 1,
                    transform: isFading ? 'scale(0.97)' : 'scale(1)'
                  }}
                />
              </div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                style={{
                  position: 'absolute',
                  right: '16px',
                  zIndex: 2,
                  background: 'rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  color: '#FFFFFF',
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Modal Caption & Details */}
            <div style={{ padding: '24px 28px', background: '#FFFFFF' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--text-headline)', marginBottom: '6px' }}>
                    {currentItem.title}
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: '1.6', maxWidth: '680px' }}>
                    {currentItem.desc}
                  </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', fontWeight: '700', color: 'var(--accent-copper)', background: 'rgba(201, 110, 40, 0.08)', padding: '6px 14px', borderRadius: '12px' }}>
                  <MapPin size={14} /> {currentItem.location}
                </div>
              </div>

              {/* Bottom Thumbnail Strip */}
              <div style={{ display: 'flex', gap: '10px', marginTop: '20px', paddingTop: '16px', borderTop: '1px solid var(--border-light)', overflowX: 'auto' }}>
                {filteredItems.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setIsFading(true);
                      setTimeout(() => {
                        setActiveImageIndex(idx);
                        setIsFading(false);
                      }, 150);
                    }}
                    style={{
                      border: activeImageIndex === idx ? '2.5px solid var(--accent-copper)' : '1px solid var(--border-light)',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      padding: 0,
                      background: 'none',
                      cursor: 'pointer',
                      opacity: activeImageIndex === idx ? 1 : 0.6,
                      transition: 'all 0.2s ease',
                      flexShrink: 0
                    }}
                  >
                    <img src={item.image} alt={item.title} style={{ width: '60px', height: '44px', objectFit: 'cover', display: 'block' }} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
