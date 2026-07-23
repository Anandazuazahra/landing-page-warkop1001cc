import React, { useState } from 'react';
import { Calendar, MapPin, Ticket, X, Eye } from 'lucide-react';
import eventSayembaraImg from '../assets/event_sayembara_kreator.webp';
import eventKaraokeImg from '../assets/event_lomba_karaoke.webp';
import ScrollReveal from './ScrollReveal';

import { useCMSData } from '../cms/cmsStore';

const DEFAULT_EVENTS = [
  {
    id: 'sayembara_kreator',
    title: 'Sayembara Kreator 1001CC (Grand Prize 4 Jt)',
    date: 'Upload Konten: 15 Juli – 5 Agustus 2026 (Pengumuman 16 Ags)',
    location: 'Warkop 1001cc & Online (Reels / TikTok)',
    category: 'Lomba & Kompetisi',
    image: eventSayembaraImg,
    status: 'S/D 5 AGUSTUS 2026',
    isFinished: false,
    desc: 'Kompetisi pembuatan video kreatif konten Instagram Reels & TikTok seputar suasana, produk, dan keseruan nongkrong di Warkop 1001cc dengan Grand Prize senilai Rp 4.000.000. Bebas biaya pendaftaran!'
  },
  {
    id: 'lomba_karaoke_batch2',
    title: 'Lomba Karaoke Batch 2 Warkop 1001CC',
    date: 'Minggu, 16 Agustus 2026 (10.00 - 23.00 WIB)',
    location: 'Warkop 1001CC Bomang (Tajur Halang)',
    category: 'Lomba & Kompetisi',
    image: eventKaraokeImg,
    status: 'SELESAI',
    isFinished: true,
    desc: 'Ajang tunjukkan bakat bernyanyi lagu ceria & penuh semangat untuk Kategori Anak-anak dan Remaja/Dewasa dengan total hadiah uang tunai, voucher makan, dan e-sertifikat.'
  }
];

export default function Events() {
  const { cmsData } = useCMSData();
  const EVENTS = cmsData?.events?.length > 0 ? cmsData.events : DEFAULT_EVENTS;

  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [activePoster, setActivePoster] = useState(null);

  // Extract unique categories dynamically
  const categories = ['Semua', ...Array.from(new Set(EVENTS.map(e => e.category).filter(Boolean)))];

  const filteredEvents = selectedCategory === 'Semua'
    ? EVENTS
    : EVENTS.filter(e => e.category === selectedCategory);

  return (
    <div>
      {/* Unified Single Section with Tight Spacing */}
      <section className="section" style={{ paddingTop: '44px', paddingBottom: '60px' }}>
        <div className="wrap">
          {/* Header Title & Description */}
          <ScrollReveal variant="up">
            <div style={{ marginBottom: '28px' }}>
              <div className="eyebrow float-subtle">Agenda & Komunitas</div>
              <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)', marginBottom: '12px' }}>
                Event & Kegiatan Seru di <em>Warkop 1001cc</em>
              </h1>
              <p className="lead" style={{ maxWidth: '640px', marginBottom: '0' }}>
                Dari lomba kreatif, karaoke gembira, live music akustik, hingga workshop edukasi — intip dokumentasi event seru dan agenda mendatang kami.
              </p>

              {/* Filter Pills */}
              <div className="filter-pills" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '20px' }}>
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    style={{
                      background: selectedCategory === cat ? 'var(--accent-copper)' : '#FFFFFF',
                      color: selectedCategory === cat ? '#FFFFFF' : 'var(--text-dark)',
                      border: selectedCategory === cat ? '1px solid var(--accent-copper)' : '1px solid var(--border-card)',
                      padding: '8px 20px',
                      borderRadius: '20px',
                      fontWeight: '700',
                      fontSize: '0.88rem',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      boxShadow: selectedCategory === cat ? '0 6px 16px rgba(201, 110, 40, 0.35)' : '0 2px 8px rgba(0,0,0,0.05)'
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Events Grid */}
          <div className="events-grid stagger-parent reveal-on-scroll" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {filteredEvents.map((evt) => (
              <div 
                key={evt.id}
                className="event-card"
                style={{
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid #E5DCD0',
                  boxShadow: '0 10px 30px rgba(28, 19, 13, 0.06)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease'
                }}
              >
                {/* Poster Top Box */}
                <div 
                  className="img-zoom-box"
                  style={{ position: 'relative', height: '240px', overflow: 'hidden', background: '#25150B', cursor: 'pointer' }}
                  onClick={() => setActivePoster(evt)}
                  title="Klik untuk melihat poster penuh"
                >
                  <img
                    src={evt.image}
                    alt={evt.title}
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      objectPosition: 'top center',
                      transition: 'transform 0.3s ease'
                    }}
                  />
                  <span
                    style={{
                      position: 'absolute',
                      top: '14px',
                      left: '14px',
                      background: evt.isFinished ? '#665544' : '#C96E28',
                      color: '#FFFFFF',
                      fontSize: '0.75rem',
                      fontWeight: '800',
                      padding: '4px 12px',
                      borderRadius: '20px',
                      fontFamily: 'Space Mono, monospace',
                      boxShadow: '0 4px 10px rgba(0,0,0,0.4)'
                    }}
                  >
                    {evt.status}
                  </span>
                  
                  {/* Zoom indicator tag */}
                  <div style={{
                    position: 'absolute',
                    bottom: '10px',
                    right: '10px',
                    background: 'rgba(20, 14, 9, 0.75)',
                    backdropFilter: 'blur(4px)',
                    color: '#F5F1EA',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <Eye size={13} /> Lihat Poster
                  </div>
                </div>

                <div style={{ padding: '22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '0.8rem', color: '#C96E28', fontFamily: 'Space Mono, monospace', textTransform: 'uppercase', marginBottom: '8px', fontWeight: 'bold' }}>
                    {evt.category}
                  </span>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', color: '#3E2312' }}>
                    {evt.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#554433', lineHeight: '1.6', marginBottom: '20px', flex: 1 }}>
                    {evt.desc}
                  </p>

                  <div style={{ borderTop: '1px solid #E5DCD0', paddingTop: '16px', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem', color: '#554433' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Calendar size={16} color="#C96E28" />
                      <span>{evt.date}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <MapPin size={16} color="#C96E28" />
                      <span>{evt.location}</span>
                    </div>
                  </div>

                  {evt.isFinished ? (
                    <button
                      onClick={() => setActivePoster(evt)}
                      style={{
                        marginTop: '20px',
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        padding: '12px 18px',
                        fontSize: '0.88rem',
                        fontWeight: '800',
                        borderRadius: '30px',
                        background: '#FAF7F2',
                        border: '1.5px solid #C96E28',
                        color: '#3E2312',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                      }}
                    >
                      <Eye size={16} color="#C96E28" /> Lihat Poster Dokumentasi
                    </button>
                  ) : (
                    <a
                      href={`https://wa.me/6288289277876?text=${encodeURIComponent(`Halo Warkop 1001cc, saya ingin mengikuti event ini: ${evt.title}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                      style={{ marginTop: '20px', width: '100%', justifyContent: 'center', padding: '12px 18px', fontSize: '0.88rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                    >
                      <Ticket size={16} /> Ikuti / Reservasi Spot
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Poster Lightbox Modal */}
      {activePoster && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999,
            background: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
          onClick={() => setActivePoster(null)}
        >
          <div 
            style={{
              position: 'relative',
              maxWidth: '600px',
              maxHeight: '90vh',
              width: '100%',
              background: '#1c130d',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid var(--border-card)',
              boxShadow: '0 20px 50px rgba(0,0,0,0.8)',
              display: 'flex',
              flexDirection: 'column'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '16px 20px',
              background: 'rgba(28, 19, 13, 0.95)',
              borderBottom: '1px solid rgba(215, 201, 184, 0.2)'
            }}>
              <h4 style={{ color: '#F5F1EA', margin: 0, fontSize: '1.05rem' }}>{activePoster.title}</h4>
              <button 
                onClick={() => setActivePoster(null)}
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  border: 'none',
                  color: '#fff',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <X size={18} />
              </button>
            </div>
            
            <div style={{ flex: 1, overflowY: 'auto', padding: '16px', display: 'flex', justifyContent: 'center', background: '#0f0a07' }}>
              <img 
                src={activePoster.image} 
                alt={activePoster.title} 
                style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', objectFit: 'contain' }}
              />
            </div>
            
            <div style={{ padding: '14px 20px', background: 'rgba(28, 19, 13, 0.95)', borderTop: '1px solid rgba(215, 201, 184, 0.15)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.8rem', color: '#B2967D', fontFamily: 'Space Mono, monospace' }}>
                Status: {activePoster.status}
              </span>
              <a 
                href="https://wa.me/6288289277876" 
                target="_blank" 
                rel="noreferrer" 
                className="btn-primary" 
                style={{ padding: '8px 16px', fontSize: '0.8rem' }}
              >
                Tanya Admin Event
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
