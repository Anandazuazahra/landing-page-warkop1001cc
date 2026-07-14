import React, { useState, useEffect } from 'react';
import { Coffee, Award, Flame } from 'lucide-react';

const SIGNATURES = [
  {
    id: 'kopi_cakra',
    name: 'Kopi Cakra',
    price: 'Rp 18.000',
    desc: 'Kopi susu khas signature Warkop 1001cc. Dibuat dengan racikan espreso khas Cakra yang pekat, dipadukan susu segar pilihan, es batu dingin, serta sedikit gula aren cair hasil karamelisasi alami. Rasa manis gurih kopi creamy yang legendaris.',
    image: '/kopi_cakra.jpg',
    badge: 'Signature Kopi',
    profile: {
      sweetness: 3,
      body: 4,
      acidity: 1,
      aroma: 5
    }
  },
  {
    id: 'kopi_matcha_cakra',
    name: 'Kopi Matcha Cakra',
    price: 'Rp 20.000',
    desc: 'Kombinasi unik cita rasa matcha Jepang dan Warkop Indonesia. Susu segar creamy berpadu padatnya teh matcha premium yang dituang perlahan ke dalam espresso ganda khas Cakra. Memberikan tekstur super tebal dengan aroma khas matcha berpadu harum kopi panggang.',
    image: '/kopi_matcha_cakra.jpg',
    badge: 'Signature Matcha',
    profile: {
      sweetness: 2,
      body: 4,
      acidity: 1,
      aroma: 5
    }
  }
];

export default function SignatureMenu() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <section className="section animate-fade-up">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Menu Unggulan Kami</div>
            <h2>Signature Menu Warkop 1001cc</h2>
            <p>Dibuat dengan resep rahasia warkop dan bahan-bahan pilihan berkualitas tinggi untuk memanjakan lidah Anda.</p>
          </div>
          <div className="signature-grid">
            {[1, 2, 3].map((n) => (
              <div className="skeleton-card" key={n}>
                <div className="skeleton-img animate-shimmer"></div>
                <div className="skeleton-line title animate-shimmer" style={{ background: 'rgba(245,237,225,0.05)', marginTop: '8px' }}></div>
                <div className="skeleton-line price animate-shimmer" style={{ background: 'rgba(245,237,225,0.05)' }}></div>
                <div className="skeleton-line desc animate-shimmer" style={{ background: 'rgba(245,237,225,0.05)' }}></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section animate-fade-up">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Menu Unggulan Kami</div>
          <h2>Signature Menu Warkop 1001cc</h2>
          <p>Dibuat dengan resep rahasia warkop dan bahan-bahan pilihan berkualitas tinggi untuk memanjakan lidah Anda.</p>
        </div>

        <div className="signature-grid">
          {SIGNATURES.map((item) => (
            <div className="sig-card" key={item.id}>
              <div className="sig-img-container">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="sig-img"
                  loading="lazy"
                />
                <span 
                  style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    background: 'var(--copper)',
                    color: 'var(--espresso)',
                    fontSize: '0.68rem',
                    fontFamily: 'Space Mono, monospace',
                    fontWeight: 'bold',
                    padding: '4px 10px',
                    borderRadius: '2px',
                    letterSpacing: '0.05em',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  <Award size={12} /> {item.badge}
                </span>
              </div>
              
              <div className="sig-content">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                  <h3 style={{ fontSize: '1.25rem', fontFamily: 'Fraunces, serif', lineHeight: '1.2' }}>
                    {item.name}
                  </h3>
                </div>
                <div className="sig-price">{item.price}</div>
                <p className="sig-desc">{item.desc}</p>
                
                <div className="sig-rating">
                  <div className="flavor-profile">
                    <div style={{
                      fontFamily: 'Space Mono, monospace',
                      fontSize: '0.7rem',
                      color: 'var(--copper-light)',
                      marginBottom: '6px',
                      textTransform: 'uppercase',
                      fontWeight: 'bold',
                      letterSpacing: '0.05em'
                    }}>
                      Profil Rasa (Taste Notes)
                    </div>
                    
                    <div className="flavor-row">
                      <span className="flavor-label">Manis</span>
                      <div className="flavor-bar-bg">
                        <div className="flavor-bar-fill" style={{ width: `${(item.profile.sweetness / 5) * 100}%` }}></div>
                      </div>
                      <span className="flavor-val">{item.profile.sweetness}/5</span>
                    </div>

                    <div className="flavor-row">
                      <span className="flavor-label">Kepekatan</span>
                      <div className="flavor-bar-bg">
                        <div className="flavor-bar-fill" style={{ width: `${(item.profile.body / 5) * 100}%` }}></div>
                      </div>
                      <span className="flavor-val">{item.profile.body}/5</span>
                    </div>

                    <div className="flavor-row">
                      <span className="flavor-label">Keasaman</span>
                      <div className="flavor-bar-bg">
                        <div className="flavor-bar-fill" style={{ width: `${(item.profile.acidity / 5) * 100}%` }}></div>
                      </div>
                      <span className="flavor-val">{item.profile.acidity}/5</span>
                    </div>

                    <div className="flavor-row">
                      <span className="flavor-label">Aroma</span>
                      <div className="flavor-bar-bg">
                        <div className="flavor-bar-fill" style={{ width: `${(item.profile.aroma / 5) * 100}%` }}></div>
                      </div>
                      <span className="flavor-val">{item.profile.aroma}/5</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
