import React from 'react';
import { Coffee, Clock, MapPin, Users, Star, Calendar } from 'lucide-react';
import warkopPhotoImg from '../assets/warkop_photo.jpg';
import ScrollReveal from './ScrollReveal';
import AnimatedCounter from './AnimatedCounter';

export default function AboutWarkop() {
  return (
    <div>
      <section className="section" style={{ paddingTop: '44px', paddingBottom: '60px' }}>
        <div className="wrap">
          {/* Section Header - Directly Starts with Title */}
          <ScrollReveal variant="up">
            <div className="section-head" style={{ marginBottom: '32px' }}>
              <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)' }}>Tentang Warkop 1001cc</h2>
              <p style={{ maxWidth: '640px', margin: '10px auto 0' }}>
                Rumah bagi setiap cerita — tempat bertemunya kehangatan kopi, inspirasi, dan kebersamaan 24 jam non-stop.
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
                  src={warkopPhotoImg} 
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
                    Bojonggede - Kemang (Bomang), Kalisuren
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
                  Berdiri Sejak 20 September 2025
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
                  Warkop 1001cc resmi berdiri pada <strong>20 September 2025</strong>. Berawal dari kebiasaan tim yang sering berkumpul, berdiskusi, dan menikmati kopi di berbagai kafe, muncul sebuah ide sederhana: <em>mengapa tidak membangun tempat nongkrong sendiri?</em>
                </p>

                <p style={{
                  fontSize: '0.94rem',
                  color: 'var(--text-dark)',
                  lineHeight: '1.7',
                  marginBottom: '20px'
                }}>
                  Melihat masih terbatasnya tempat yang buka selama 24 jam, lahirlah <strong>Warkop 1001cc</strong> sebagai warkop yang nyaman, buka 24 jam, dan menjadi tempat berkumpul, bekerja, maupun bersantai kapan saja. Dengan menghadirkan kopi berkualitas dan suasana yang hangat, 1001cc hadir untuk menjadi rumah bagi setiap cerita dan pertemuan.
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
                    <Coffee size={14} color="var(--accent-copper)" /> Signature Kopi Cakra
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
