import React from 'react';
import { Coffee, Clock, MapPin, Users, Star, Calendar } from 'lucide-react';
import warkopPhotoImg from '../assets/warkop_photo.webp';
import ScrollReveal from './ScrollReveal';
import AnimatedCounter from './AnimatedCounter';
import { useCMSData } from '../cms/cmsStore';

export default function AboutWarkop() {
  const { cmsData } = useCMSData();
  const siteInfo = cmsData?.siteInfo || {};
  return (
    <div>
      <section className="section" style={{ paddingTop: '44px', paddingBottom: '60px' }}>
        <div className="wrap">
          {/* Section Header - Directly Starts with Title */}
          <ScrollReveal variant="up">
            <div className="section-head" style={{ marginBottom: '32px' }}>
              <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)' }}>{siteInfo.aboutTitle || 'Tentang Warkop 1001cc'}</h2>
              <p style={{ maxWidth: '640px', margin: '10px auto 0' }}>
                {siteInfo.aboutSubtitle || 'Rumah bagi setiap cerita — tempat bertemunya kehangatan kopi, inspirasi, dan kebersamaan 24 jam non-stop.'}
              </p>
            </div>
          </ScrollReveal>

          {/* Unified 2-Column Master Card (Photo + Verbatim Story) */}
          <ScrollReveal variant="up" delay={100}>
            <div
              className="card-hover"
              style={{
                background: '#FFFFFF',
                borderRadius: '20px',
                border: '1px solid var(--border-card)',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.06)',
                overflow: 'hidden',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                marginBottom: '28px'
              }}
            >
              {/* Left Column: Real Photo with Overlay Badge */}
              <div style={{ position: 'relative', minHeight: 'clamp(220px, 35vw, 360px)' }}>
                <img 
                  src={siteInfo.aboutImage || warkopPhotoImg} 
                  alt="Area Duduk & Mural Kopi Cakra Warkop 1001cc" 
                  style={{
                    width: '100%',
                    height: '100%',
                    minHeight: 'clamp(220px, 35vw, 360px)',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: '12px',
                  left: '12px',
                  right: '12px',
                  background: 'rgba(255, 255, 255, 0.94)',
                  backdropFilter: 'blur(8px)',
                  padding: '10px 14px',
                  borderRadius: '12px',
                  border: '1px solid rgba(255,255,255,0.6)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.12)'
                }}>
                  <MapPin size={16} color="var(--accent-copper)" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '0.82rem', fontWeight: '700', color: 'var(--text-dark)' }}>
                    {siteInfo.address || 'Bojonggede - Kemang (Bomang), Kalisuren'}
                  </span>
                </div>
              </div>

              {/* Right Column: Verbatim Official Story */}
              <div style={{
                padding: 'clamp(20px, 4vw, 36px) clamp(18px, 4vw, 32px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}>
                <div style={{
                  fontSize: '0.78rem',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: '700',
                  color: 'var(--accent-copper)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '8px'
                }}>
                  Berdiri Sejak {siteInfo.establishedDate || '20 September 2025'}
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.4rem, 3vw, 1.8rem)',
                  color: 'var(--text-headline)',
                  marginBottom: '14px',
                  lineHeight: '1.25'
                }}>
                  Sejarah Singkat Warkop 1001cc
                </h3>

                <p style={{
                  fontSize: '0.94rem',
                  color: 'var(--text-dark)',
                  lineHeight: '1.7',
                  marginBottom: '14px'
                }}>
                  {siteInfo.aboutStoryPart1 || 'Warkop 1001cc resmi berdiri pada 20 September 2025. Berawal dari kebiasaan tim yang sering berkumpul, berdiskusi, dan menikmati kopi di berbagai kafe, muncul sebuah ide sederhana: mengapa tidak membangun tempat nongkrong sendiri?'}
                </p>

                <p style={{
                  fontSize: '0.94rem',
                  color: 'var(--text-dark)',
                  lineHeight: '1.7',
                  marginBottom: '20px'
                }}>
                  {siteInfo.aboutStoryPart2 || 'Melihat masih terbatasnya tempat yang buka selama 24 jam, lahirlah Warkop 1001cc sebagai warkop yang nyaman, buka 24 jam, dan menjadi tempat berkumpul, bekerja, maupun bersantai kapan saja.'}
                </p>

                {/* Integrated Highlight Badges Row */}
                <div style={{
                  display: 'flex',
                  gap: '8px',
                  flexWrap: 'wrap',
                  paddingTop: '16px',
                  borderTop: '1px solid var(--border-light)'
                }}>
                  <span style={{
                    background: 'var(--bg-cream)',
                    padding: '6px 12px',
                    borderRadius: '10px',
                    fontSize: '0.8rem',
                    fontWeight: '700',
                    color: 'var(--text-dark)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}>
                    <Clock size={14} color="var(--accent-copper)" /> Buka 24 Jam Non-Stop
                  </span>
                  <span style={{
                    background: 'var(--bg-cream)',
                    padding: '6px 12px',
                    borderRadius: '10px',
                    fontSize: '0.8rem',
                    fontWeight: '700',
                    color: 'var(--text-dark)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}>
                    <Coffee size={14} color="var(--accent-copper)" /> Kopi Cakra
                  </span>
                  <span style={{
                    background: 'var(--bg-cream)',
                    padding: '6px 12px',
                    borderRadius: '10px',
                    fontSize: '0.8rem',
                    fontWeight: '700',
                    color: 'var(--text-dark)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}>
                    <Users size={14} color="var(--accent-copper)" /> Ruang Kolaborasi
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Unified 2-Column Master Card (Pemberdayaan UMKM) */}
          <ScrollReveal variant="up" delay={150}>
            <div
              className="card-hover"
              style={{
                background: '#FFFFFF',
                borderRadius: '20px',
                border: '1px solid var(--border-card)',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.06)',
                overflow: 'hidden',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                marginBottom: '28px'
              }}
            >
              {/* Left Column: Content (Growing Together) */}
              <div
                style={{
                  padding: 'clamp(20px, 4vw, 36px) clamp(18px, 4vw, 32px)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}
              >
                <div
                  style={{
                    fontSize: '0.78rem',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: '700',
                    color: 'var(--accent-copper)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginBottom: '8px'
                  }}
                >
                  Tumbuh Bersama & Pemberdayaan
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(1.4rem, 3vw, 1.8rem)',
                    color: 'var(--text-headline)',
                    marginBottom: '14px',
                    lineHeight: '1.25'
                  }}
                >
                  Lebih dari Sekadar Warkop
                </h3>
                <p style={{ fontSize: '0.94rem', color: 'var(--text-dark)', lineHeight: '1.7', marginBottom: '12px' }}>
                  Warkop 1001cc hadir bukan hanya untuk menyajikan kopi dan makanan, tetapi juga untuk tumbuh bersama masyarakat.
                </p>
                <p style={{ fontSize: '0.94rem', color: 'var(--text-dark)', lineHeight: '1.7', marginBottom: '12px' }}>
                  Kami bekerja sama dengan pelaku UMKM lokal dan membuka kesempatan kerja bagi warga Tajur Halang agar manfaat dari usaha ini dapat dirasakan oleh lebih banyak orang.
                </p>
                <p style={{ fontSize: '0.94rem', color: 'var(--text-dark)', lineHeight: '1.7', marginBottom: '16px' }}>
                  Setiap kopi yang Anda nikmati dan setiap menu yang Anda pesan bukan sekadar transaksi, tetapi juga bentuk dukungan bagi UMKM lokal, kesempatan kerja bagi masyarakat sekitar, dan langkah kecil untuk membangun ekonomi bersama.
                </p>
                <p style={{ fontSize: '0.94rem', color: 'var(--accent-copper)', lineHeight: '1.7', fontStyle: 'italic', fontWeight: 600, marginBottom: 0 }}>
                  Karena bagi kami, ketika pelanggan datang, bukan hanya usaha kami yang tumbuh, tetapi juga banyak orang yang ikut berkembang bersama.
                </p>
              </div>

              {/* Right Column: Highlighted Quote Block */}
              <div
                style={{
                  background: 'radial-gradient(circle at center, #8C4F2B 0%, #3E2312 100%)',
                  padding: 'clamp(24px, 5vw, 44px) clamp(20px, 5vw, 36px)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  color: '#FFFFFF',
                  position: 'relative',
                  minHeight: '280px'
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '7rem',
                    lineHeight: 1,
                    color: 'rgba(255, 255, 255, 0.12)',
                    position: 'absolute',
                    top: '10px',
                    left: '24px',
                    userSelect: 'none',
                    pointerEvents: 'none'
                  }}
                >
                  “
                </div>
                <blockquote
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(1.05rem, 2.5vw, 1.25rem)',
                    fontStyle: 'italic',
                    lineHeight: '1.6',
                    color: '#FAF6F0',
                    zIndex: 1,
                    maxWidth: '480px',
                    margin: '0 auto',
                    position: 'relative'
                  }}
                >
                  "Di 1001cc, setiap pesanan bukan sekadar transaksi, melainkan bentuk dukungan nyata bagi mimpi para pelaku UMKM, kesempatan kerja bagi warga Tajur Halang, dan langkah bersama menuju masa depan yang lebih baik."
                </blockquote>
              </div>
            </div>
          </ScrollReveal>

          {/* Clean Compact Statistics Grid */}
          <ScrollReveal variant="up" delay={150} stagger>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                gap: '16px'
              }}
            >
              <AnimatedCounter
                end={24}
                suffix=" Jam"
                label="Layanan Non-Stop"
                sublabel="Buka 7 hari seminggu"
                icon={Clock}
              />
              <AnimatedCounter
                end={2025}
                prefix=""
                label="Tahun Berdiri"
                sublabel="Resmi 20 September 2025"
                icon={Calendar}
              />
              <AnimatedCounter
                end={4.9}
                decimals={1}
                suffix=" / 5.0"
                label="Rating Kepuasan"
                sublabel="Ulasan nyata pelanggan"
                icon={Star}
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
