import React from 'react';
import { Star, CheckCircle, ExternalLink, ArrowRight, ThumbsUp } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const GOOGLE_REVIEWS_URL = "https://share.google/xIOvmyIpiHmdJPiUq";

// Subtle Google SVG Icon in brand color
const GoogleGIcon = ({ size = 18, color = "var(--accent-copper)" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
    <path fill={color} d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path fill={color} opacity="0.8" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill={color} opacity="0.65" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
    <path fill={color} opacity="0.9" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
  </svg>
);

const REAL_GOOGLE_REVIEWS = [
  {
    id: 1,
    name: 'Deswinavivi Anjani',
    initials: 'DA',
    role: '1 ulasan · 5 foto · 10 bulan lalu',
    rating: 5,
    tag: 'Fasilitas Karaoke Free',
    comment: 'Seru banget bisa karaokean ga perlu bayar lagi cukup pesen makan aja, harganya juga murah banget cocok buat semua kalangan deh, tempatnya nyaman makanannya juga enak.',
    scores: 'Makanan 5/5 · Layanan 5/5 · Suasana 5/5'
  },
  {
    id: 2,
    name: 'Alyssya Anaskia',
    initials: 'AA',
    role: '2 ulasan · 1 foto · 3 bulan lalu',
    rating: 5,
    tag: 'Warkop Rasa Cafe 24 Jam',
    comment: 'pas bgt buat yg mau nongkrong sampe pagi, bener’ recomend bgt warkop rasa cafe 24 jam ini, rasa makanan dan minuman nya juga ga kalah enak, tempat luas bisa indoor outdoor, udh sering kesini bner’ bikin nagih🥰🥰',
    scores: 'Makanan 5/5 · Layanan 5/5 · Suasana 5/5'
  },
  {
    id: 3,
    name: 'Qintan Qirana',
    initials: 'QQ',
    role: '8 ulasan · 10 foto · 5 bulan lalu',
    rating: 5,
    tag: 'Pelayanan Ramah & Cepat',
    comment: 'mantap bgt pelayanan nya ramah, cepat dan harganya sangat terjangkau. mba icha, riska dan intan ramah sekali terimakasi ya. gonna be my fav place',
    scores: 'Makanan 5/5 · Layanan 5/5 · Suasana 5/5'
  },
  {
    id: 4,
    name: 'Eny Widyastuti',
    initials: 'EW',
    role: 'Local Guide · 180 ulasan · 818 foto',
    rating: 5,
    tag: 'Ruangan AC & Bersih',
    comment: 'Mencoba sarapan disini,. Crewnya ramah ramah, tempat bersih, nyaman ada ac kalo bawa anak anak, menunya variatif, harga masih affordable juga, semoga selalu pertahankan selalu ya.',
    scores: 'Makanan 4/5 · Layanan 5/5 · Suasana 4/5'
  },
  {
    id: 5,
    name: 'Tsurayya Channel',
    initials: 'TC',
    role: 'Local Guide · 21 ulasan · 7 foto',
    rating: 5,
    tag: 'Cappucino Signature',
    comment: 'Tempatnya nyaman ada ruangan ber AC Makananannya enak dan pegawai nya ramah. Rekomendasi cappucinonya mantepppp Jaya jaya jayaaaaa',
    scores: 'Makanan 5/5 · Layanan 5/5 · Suasana 5/5'
  },
  {
    id: 6,
    name: 'Deswina Vivi Anjani',
    initials: 'DA',
    role: '1 ulasan · 6 foto · 3 bulan lalu',
    rating: 5,
    tag: 'Pemandangan Sore',
    comment: 'Tempat mantap, makanan enak, semua menunya cocok di lidah pemandangan sorenya ga kalah bagus, rekomen buat semua usia si ini bisa karaoke juga',
    scores: 'Makanan 5/5 · Layanan 5/5 · Suasana 5/5'
  }
];

export default function TestimonialsSection() {
  return (
    <section className="section" id="testimoni" style={{ background: 'var(--bg-cream)', padding: '64px 0 54px' }}>
      <div className="wrap">
        <ScrollReveal variant="up">
          <div className="section-head">
            <div className="eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <GoogleGIcon size={16} /> Ulasan Google Maps Resmi
            </div>
            <h2>Ulasan Asli Pengunjung Warkop 1001cc</h2>
            <p style={{ maxWidth: '640px', margin: '10px auto 0' }}>
              Testimoni verbatim yang ditulis langsung oleh para pelanggan setia Warkop 1001cc di Google Reviews.
            </p>

            {/* Rating Summary Card */}
            <div
              className="card-hover"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '16px',
                background: '#FFFFFF',
                padding: '14px 28px',
                borderRadius: '20px',
                marginTop: '28px',
                boxShadow: '0 8px 24px rgba(62, 35, 18, 0.06)',
                border: '1px solid var(--border-card)'
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: 'rgba(201, 110, 40, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <GoogleGIcon size={24} />
              </div>
              
              <div style={{ textAlign: 'left' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', fontWeight: '700', color: 'var(--text-headline)', lineHeight: '1' }}>
                    4.8
                  </span>
                  <div style={{ display: 'flex', gap: '3px' }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="var(--accent-copper)" color="var(--accent-copper)" />
                    ))}
                  </div>
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '2px', fontWeight: '600' }}>
                  Ulasan Asli Google Reviews · Warkop 1001cc Naik Kelas
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Testimonials Grid */}
        <ScrollReveal variant="up" delay={100} stagger>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '20px',
              marginBottom: '36px'
            }}
          >
            {REAL_GOOGLE_REVIEWS.map((t) => (
              <div
                key={t.id}
                className="testimonial-card"
                style={{
                  background: '#FFFFFF',
                  borderRadius: '22px',
                  padding: '30px 26px',
                  border: '1px solid var(--border-card)',
                  boxShadow: '0 8px 24px rgba(62, 35, 18, 0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Decorative Serif Quote Watermark */}
                <div
                  style={{
                    position: 'absolute',
                    top: '10px',
                    right: '20px',
                    fontSize: '4.5rem',
                    fontFamily: 'var(--font-serif)',
                    color: 'rgba(201, 110, 40, 0.08)',
                    lineHeight: '1',
                    pointerEvents: 'none',
                    userSelect: 'none'
                  }}
                >
                  “
                </div>

                <div>
                  {/* Rating Stars & Category Tag */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '16px'
                    }}
                  >
                    <div style={{ display: 'flex', gap: '3px' }}>
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} size={15} fill="var(--accent-copper)" color="var(--accent-copper)" />
                      ))}
                    </div>

                    <span
                      style={{
                        background: 'rgba(201, 110, 40, 0.1)',
                        color: 'var(--accent-copper)',
                        padding: '4px 12px',
                        borderRadius: '12px',
                        fontSize: '0.75rem',
                        fontWeight: '700',
                        fontFamily: 'var(--font-mono)'
                      }}
                    >
                      {t.tag}
                    </span>
                  </div>

                  {/* Verbatim Review Comment */}
                  <p
                    style={{
                      fontSize: '0.94rem',
                      color: 'var(--text-dark)',
                      lineHeight: '1.68',
                      fontStyle: 'italic',
                      marginBottom: '16px',
                      position: 'relative',
                      zIndex: 1
                    }}
                  >
                    "{t.comment}"
                  </p>

                  {/* Score Breakdown Badge */}
                  <div
                    style={{
                      display: 'inline-block',
                      background: 'var(--bg-cream)',
                      padding: '4px 10px',
                      borderRadius: '8px',
                      fontSize: '0.76rem',
                      fontWeight: '700',
                      color: 'var(--text-muted)',
                      marginBottom: '20px',
                      fontFamily: 'var(--font-mono)'
                    }}
                  >
                    {t.scores}
                  </div>
                </div>

                {/* Author Info & Avatar */}
                <div
                  style={{
                    paddingTop: '18px',
                    borderTop: '1px solid var(--border-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    position: 'relative',
                    zIndex: 1
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    {/* Initials Circle */}
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #C96E28 0%, #3E2312 100%)',
                        color: '#FFFFFF',
                        fontWeight: '700',
                        fontSize: '0.85rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: 'var(--font-serif)',
                        boxShadow: '0 4px 10px rgba(201, 110, 40, 0.3)',
                        flexShrink: 0
                      }}
                    >
                      {t.initials}
                    </div>

                    <div>
                      <div style={{ fontWeight: '700', fontSize: '0.95rem', color: 'var(--text-headline)', display: 'flex', alignItems: 'center', gap: '5px' }}>
                        {t.name} <CheckCircle size={14} color="var(--accent-copper)" />
                      </div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                        {t.role}
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', color: 'var(--accent-copper)', fontWeight: '700', fontFamily: 'var(--font-mono)' }}>
                    <GoogleGIcon size={14} /> Google
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Seamless Action Button linking to Google Reviews */}
        <ScrollReveal variant="up" delay={200}>
          <div style={{ textAlign: 'center' }}>
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{
                padding: '14px 32px',
                borderRadius: '14px',
                background: 'var(--accent-copper)',
                color: '#FFFFFF',
                fontWeight: '700',
                fontSize: '0.95rem',
                boxShadow: '0 8px 22px rgba(201, 110, 40, 0.35)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              <GoogleGIcon size={18} color="#FFFFFF" /> Lihat Semua Ulasan di Google Maps <ArrowRight size={16} className="btn-icon" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
