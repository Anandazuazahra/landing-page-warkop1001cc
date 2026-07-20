import React from 'react';
import { Coffee, Heart, Clock, MapPin, Sparkles, Users, Award } from 'lucide-react';
import warkopPhotoImg from '../assets/warkop_photo.jpg';

export default function AboutWarkop() {
  return (
    <div className="animate-fade-up">
      <section className="section" style={{ paddingTop: '60px', paddingBottom: '80px' }}>
        <div className="wrap">
          {/* Section Header */}
          <div className="section-head" style={{ marginBottom: '48px' }}>
            <div className="eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <Sparkles size={14} color="var(--accent-copper)" /> Kisah & Nilai Utama
            </div>
            <h2>Tentang Warkop 1001cc</h2>
            <p>Rumah bagi setiap cerita — tempat bertemunya kehangatan kopi, inspirasi, dan kebersamaan 24 jam non-stop.</p>
          </div>

          {/* Unified 2-Column Master Card (Photo + Verbatim Story) */}
          <div style={{
            background: '#FFFFFF',
            borderRadius: '24px',
            border: '1px solid var(--border-card)',
            boxShadow: '0 15px 35px rgba(0, 0, 0, 0.06)',
            overflow: 'hidden',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            marginBottom: '56px'
          }}>
            {/* Left Column: Real Photo with Overlay Badge */}
            <div style={{ position: 'relative', minHeight: '380px' }}>
              <img 
                src={warkopPhotoImg} 
                alt="Area Duduk & Mural Kopi Cakra Warkop 1001cc" 
                style={{
                  width: '100%',
                  height: '100%',
                  minHeight: '380px',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: '16px',
                left: '16px',
                right: '16px',
                background: 'rgba(255, 255, 255, 0.92)',
                backdropFilter: 'blur(8px)',
                padding: '12px 18px',
                borderRadius: '14px',
                border: '1px solid rgba(255,255,255,0.6)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 8px 20px rgba(0,0,0,0.12)'
              }}>
                <MapPin size={18} color="var(--accent-copper)" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '0.86rem', fontWeight: '700', color: 'var(--text-dark)' }}>
                  Bojonggede - Kemang (Bomang), Kalisuren
                </span>
              </div>
            </div>

            {/* Right Column: Verbatim Official Story */}
            <div style={{
              padding: '40px 36px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              <div style={{
                fontSize: '0.8rem',
                fontFamily: 'var(--font-mono)',
                fontWeight: '700',
                color: 'var(--accent-copper)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '10px'
              }}>
                Berdiri Sejak 20 September 2025
              </div>

              <h3 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.9rem',
                color: 'var(--text-headline)',
                marginBottom: '20px',
                lineHeight: '1.25'
              }}>
                Sejarah Singkat Warkop 1001cc
              </h3>

              <p style={{
                fontSize: '0.98rem',
                color: 'var(--text-dark)',
                lineHeight: '1.75',
                marginBottom: '16px'
              }}>
                Warkop 1001cc resmi berdiri pada <strong>20 September 2025</strong>. Berawal dari kebiasaan tim yang sering berkumpul, berdiskusi, dan menikmati kopi di berbagai kafe, muncul sebuah ide sederhana: <em>mengapa tidak membangun tempat nongkrong sendiri?</em>
              </p>

              <p style={{
                fontSize: '0.98rem',
                color: 'var(--text-dark)',
                lineHeight: '1.75',
                marginBottom: '28px'
              }}>
                Melihat masih terbatasnya tempat yang buka selama 24 jam, lahirlah <strong>Warkop 1001cc</strong> sebagai warkop yang nyaman, buka 24 jam, dan menjadi tempat berkumpul, bekerja, maupun bersantai kapan saja. Dengan menghadirkan kopi berkualitas dan suasana yang hangat, 1001cc hadir untuk menjadi rumah bagi setiap cerita dan pertemuan.
              </p>

              {/* Integrated Highlight Badges Row */}
              <div style={{
                display: 'flex',
                gap: '10px',
                flexWrap: 'wrap',
                paddingTop: '20px',
                borderTop: '1px solid var(--border-light)'
              }}>
                <span style={{
                  background: 'var(--bg-cream)',
                  padding: '6px 14px',
                  borderRadius: '12px',
                  fontSize: '0.82rem',
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
                  padding: '6px 14px',
                  borderRadius: '12px',
                  fontSize: '0.82rem',
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
                  padding: '6px 14px',
                  borderRadius: '12px',
                  fontSize: '0.82rem',
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

          {/* 3 Core Values Section Title */}
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h3 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.6rem',
              color: 'var(--text-headline)'
            }}>
              3 Nilai Utama Kami
            </h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', marginTop: '4px' }}>
              Prinsip yang selalu kami jaga untuk menghadirkan kenyamanan terbaik bagi Anda.
            </p>
          </div>

          {/* 3 Core Value Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}>
            {/* Value 1 */}
            <div style={{
              background: '#FFFFFF',
              padding: '32px 28px',
              borderRadius: '20px',
              border: '1px solid var(--border-card)',
              boxShadow: '0 8px 24px rgba(0,0,0,0.04)',
              transition: 'transform 0.3s ease, boxShadow 0.3s ease'
            }}>
              <div style={{
                width: '52px',
                height: '52px',
                borderRadius: '14px',
                background: 'rgba(201, 110, 40, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}>
                <Heart size={26} color="var(--accent-copper)" />
              </div>
              <h4 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.3rem',
                marginBottom: '10px',
                color: 'var(--text-headline)'
              }}>
                Rumah Bagi Semua
              </h4>
              <p style={{
                fontSize: '0.9rem',
                color: 'var(--text-muted)',
                lineHeight: '1.65'
              }}>
                Tempat nongkrong hangat, terbuka, dan nyaman untuk berkumpul, bekerja (WFC), maupun bersantai kapan saja bersama teman dan komunitas.
              </p>
            </div>

            {/* Value 2 */}
            <div style={{
              background: '#FFFFFF',
              padding: '32px 28px',
              borderRadius: '20px',
              border: '1px solid var(--border-card)',
              boxShadow: '0 8px 24px rgba(0,0,0,0.04)',
              transition: 'transform 0.3s ease, boxShadow 0.3s ease'
            }}>
              <div style={{
                width: '52px',
                height: '52px',
                borderRadius: '14px',
                background: 'rgba(201, 110, 40, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}>
                <Coffee size={26} color="var(--accent-copper)" />
              </div>
              <h4 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.3rem',
                marginBottom: '10px',
                color: 'var(--text-headline)'
              }}>
                Racikan Orisinal
              </h4>
              <p style={{
                fontSize: '0.9rem',
                color: 'var(--text-muted)',
                lineHeight: '1.65'
              }}>
                Signature Kopi Cakra dan Cakra Matcha Latte disajikan dengan racikan kopi pilihan berkualitas tinggi untuk sensasi nikmat tak terlupakan.
              </p>
            </div>

            {/* Value 3 */}
            <div style={{
              background: '#FFFFFF',
              padding: '32px 28px',
              borderRadius: '20px',
              border: '1px solid var(--border-card)',
              boxShadow: '0 8px 24px rgba(0,0,0,0.04)',
              transition: 'transform 0.3s ease, boxShadow 0.3s ease'
            }}>
              <div style={{
                width: '52px',
                height: '52px',
                borderRadius: '14px',
                background: 'rgba(201, 110, 40, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}>
                <Clock size={26} color="var(--accent-copper)" />
              </div>
              <h4 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.3rem',
                marginBottom: '10px',
                color: 'var(--text-headline)'
              }}>
                Pelayanan Buka 24 Jam
              </h4>
              <p style={{
                fontSize: '0.9rem',
                color: 'var(--text-muted)',
                lineHeight: '1.65'
              }}>
                Buka 24 jam non-stop setiap hari (Senin - Minggu) untuk selalu siap menjadi tempat berkumpul dan menemani setiap cerita Anda.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
