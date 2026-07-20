import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, Flame, Coffee, Award } from 'lucide-react';

import kopiCakraGlassImg from '../assets/kopi_cakra_glass.png';
import matchaCakraGlassImg from '../assets/matcha_cakra_glass.png';
import matchaSplashImg from '../assets/matcha_splash.png';
import floatingBeansImg from '../assets/floating_coffee_beans.png';
import floatingChocolateImg from '../assets/floating_chocolate.png';

const SIGNATURE_ITEMS = [
  {
    id: 'kopi_cakra',
    tag: 'Best Seller #1',
    category: 'Signature Coffee #1',
    name: 'Kopi Cakra',
    badgeText: 'Ngopi Sambil Nyoklat',
    headline: 'Kopi Cakra: Nikmati Sensasi Ngopi Sambil Nyoklat',
    desc: (
      <>
        <p style={{ marginBottom: '16px' }}>
          Di tengah berkembangnya budaya minum kopi, <strong>Kopi Cakra</strong> hadir sebagai <em>signature coffee</em> andalan <strong>1001cc</strong> yang menawarkan pengalaman berbeda melalui konsep <strong>"Ngopi Sambil Nyoklat."</strong> Bukan sekadar mencampurkan kopi dan cokelat, Kopi Cakra menghadirkan perpaduan rasa yang harmonis—pahit khas kopi berpadu dengan manis lembut cokelat, menciptakan cita rasa yang kaya, seimbang, dan berkarakter dalam setiap tegukan.
        </p>
        <p style={{ marginBottom: '16px' }}>
          Keunikan Kopi Cakra terletak pada kemampuannya menghadirkan dua kenikmatan dalam satu cangkir. Aroma kopi yang kuat memberikan sensasi semangat, sementara sentuhan cokelat menghadirkan rasa lembut yang membuat pengalaman menikmati kopi terasa lebih nyaman dan menyenangkan. Perpaduan ini cocok dinikmati kapan saja, baik saat memulai hari, menemani waktu bekerja, belajar, maupun bersantai bersama teman.
        </p>
        <p style={{ marginBottom: '16px' }}>
          Di balik kelezatannya, kombinasi kopi dan cokelat juga memiliki berbagai manfaat. Keduanya mengandung senyawa antioksidan alami, seperti <strong>polifenol</strong> dan <strong>flavonoid</strong>, yang berperan membantu melindungi sel-sel tubuh dari paparan radikal bebas. Kandungan <strong>kafein</strong> pada kopi dapat membantu meningkatkan fokus, konsentrasi, serta menjaga energi agar tetap optimal selama beraktivitas. Sementara itu, cokelat mengandung <strong>theobromine</strong>, senyawa alami yang memberikan efek relaksasi ringan dan membantu meningkatkan suasana hati.
        </p>
        <p style={{ marginBottom: '16px' }}>
          Melalui racikan yang seimbang, Kopi Cakra membuktikan bahwa secangkir kopi tidak hanya menghadirkan kenikmatan rasa, tetapi juga pengalaman yang lebih bermakna. Setiap sajian dibuat untuk memberikan sensasi hangat, nyaman, dan penuh karakter—menjadikannya pilihan tepat bagi pecinta kopi maupun pencinta cokelat.
        </p>
        <p style={{ marginBottom: '16px' }}>
          <strong>Kopi Cakra</strong> bukan hanya minuman, melainkan sebuah pengalaman. Karena terkadang, secangkir kopi akan terasa lebih istimewa ketika dinikmati dengan sentuhan cokelat.
        </p>
        <p style={{ fontWeight: 'bold', color: '#C96E28' }}>
          Kopi Cakra — Ngopi Sambil Nyoklat.
        </p>
      </>
    ),
    price: 'Rp 18.000',
    bgGradient: 'radial-gradient(ellipse at 50% 50%, #522b16 0%, #381b0e 55%, #220f07 100%)',
    bgText: 'CAKRA',
    textColor: '#D97706',
    pillBg: '#C96E28',
    glassImage: kopiCakraGlassImg,
    floatLeftImg: floatingBeansImg,
    floatRightImg: floatingChocolateImg,
    profile: { sweetness: 3, body: 4, acidity: 1, aroma: 5 }
  },
  {
    id: 'matcha_cakra',
    tag: 'Trending Non-Coffee',
    category: 'Signature Non-Coffee',
    name: 'Cakra Matcha Latte',
    badgeText: 'Japanese Matcha Meets Espresso Cakra',
    headline: 'Cakra Matcha Latte: Nikmati Kesegaran Matcha dalam Setiap Tegukan',
    desc: (
      <>
        <p style={{ marginBottom: '16px' }}>
          <strong>Cakra Matcha Latte</strong> merupakan signature non-coffee dari <strong>1001cc</strong> yang memadukan matcha berkualitas dengan susu creamy untuk menghasilkan rasa yang lembut, segar, dan nikmat. Perpaduan keduanya menciptakan minuman yang cocok dinikmati kapan saja, baik saat memulai hari, bekerja, belajar, maupun bersantai.
        </p>
        <p style={{ marginBottom: '16px' }}>
          Selain memiliki cita rasa yang khas, matcha juga dikenal mengandung antioksidan alami, terutama <strong>katekin (EGCG)</strong>, yang membantu melindungi sel-sel tubuh dari radikal bebas. Matcha juga mengandung <strong>L-theanine</strong>, senyawa alami yang dapat membantu meningkatkan fokus sekaligus memberikan efek rileks tanpa membuat mengantuk.
        </p>
        <p style={{ marginBottom: '16px' }}>
          Sementara itu, susu memberikan tekstur yang lebih creamy serta menjadi sumber <strong>kalsium</strong> dan <strong>protein</strong> yang baik untuk tubuh. Kombinasi matcha dan susu menjadikan Cakra Matcha Latte tidak hanya lezat, tetapi juga menyegarkan dan nyaman dinikmati.
        </p>
        <p>
          Dengan rasa yang seimbang dan lembut, <strong>Cakra Matcha Latte</strong> menjadi pilihan yang tepat bagi pencinta matcha maupun siapa saja yang mencari alternatif minuman tanpa kopi.
        </p>
      </>
    ),
    price: 'Rp 20.000',
    bgGradient: 'radial-gradient(ellipse at 50% 50%, #294c1e 0%, #1a3513 55%, #0d1e0a 100%)',
    bgText: 'MATCHA',
    textColor: '#65a30d',
    pillBg: '#558b2f',
    glassImage: matchaCakraGlassImg,
    floatLeftImg: floatingBeansImg,
    floatRightImg: matchaSplashImg,
    profile: { sweetness: 2, body: 4, acidity: 1, aroma: 5 }
  }
];

export default function SignatureMenu() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const item = SIGNATURE_ITEMS[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % SIGNATURE_ITEMS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + SIGNATURE_ITEMS.length) % SIGNATURE_ITEMS.length);
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    if (touchStartX - touchEndX > 40) {
      handleNext();
    } else if (touchEndX - touchStartX > 40) {
      handlePrev();
    }
  };

  return (
    <div className="animate-fade-up" style={{ padding: '0 0 80px', width: '100%' }}>
      {/* Banner Hero Card - 100% FULL-WIDTH EDGE-TO-EDGE with Touch Swipe Support */}
      <div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        style={{
          background: item.bgGradient,
          borderRadius: '0px',
          width: '100%',
          position: 'relative',
          overflow: 'hidden',
          padding: '40px 20px 30px',
          minHeight: '540px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
          transition: 'background 0.5s ease',
          cursor: 'grab'
        }}
      >
          {/* Background Text */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              fontSize: 'clamp(6.5rem, 22vw, 16rem)',
              fontFamily: 'Fraunces, serif',
              fontWeight: '900',
              color: 'rgba(255,255,255,0.04)',
              letterSpacing: '0.1em',
              userSelect: 'none',
              pointerEvents: 'none',
              whiteSpace: 'nowrap'
            }}
          >
            {item.bgText}
          </div>

          {/* Left / Right Arrow Buttons */}
          <button
            onClick={handlePrev}
            style={{
              position: 'absolute',
              left: '24px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: 'rgba(0,0,0,0.45)',
              border: '1px solid rgba(255,255,255,0.2)',
              color: '#FFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 15,
              backdropFilter: 'blur(6px)',
              boxShadow: '0 8px 20px rgba(0,0,0,0.4)'
            }}
          >
            <ChevronLeft size={28} />
          </button>

          <button
            onClick={handleNext}
            style={{
              position: 'absolute',
              right: '24px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: 'rgba(0,0,0,0.45)',
              border: '1px solid rgba(255,255,255,0.2)',
              color: '#FFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 15,
              backdropFilter: 'blur(6px)',
              boxShadow: '0 8px 20px rgba(0,0,0,0.4)'
            }}
          >
            <ChevronRight size={28} />
          </button>

          {/* Floating Images Graphic - 1:1 DEAD-CENTERED SYMMETRICAL COMPOSITION */}
          <div style={{ position: 'relative', width: '100%', maxWidth: '1080px', height: '380px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* Left float: Coffee Beans Emerging Right Behind Glass */}
            {item.floatLeftImg && (
              <img
                src={item.floatLeftImg}
                alt="floating coffee beans"
                style={{
                  position: 'absolute',
                  left: '6%',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '360px',
                  maxWidth: '35%',
                  opacity: 0.85,
                  filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.45))',
                  zIndex: 2,
                  pointerEvents: 'none'
                }}
              />
            )}

            {/* Glowing Spotlight Aura behind glass cup */}
            <div
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                width: '460px',
                height: '360px',
                borderRadius: '50%',
                background: item.id === 'kopi_cakra' 
                  ? 'radial-gradient(circle, rgba(201, 110, 40, 0.45) 0%, transparent 70%)' 
                  : 'radial-gradient(circle, rgba(136, 171, 73, 0.45) 0%, transparent 70%)',
                filter: 'blur(35px)',
                pointerEvents: 'none',
                zIndex: 1
              }}
            />

            {/* Glass Cup: ROCK-SOLID PERFECTLY ALIGNED HERO (Zero Jumping on Swipe) */}
            <img
              key={`glass-cup-img-${item.id}`}
              src={item.glassImage}
              alt={item.name}
              style={{
                height: item.id === 'kopi_cakra' ? '415px' : '465px',
                width: 'auto',
                maxWidth: 'none',
                objectFit: 'contain',
                position: 'relative',
                margin: '0 auto',
                display: 'block',
                zIndex: 10,
                transform: item.id === 'kopi_cakra' 
                  ? 'translateY(-14px) scale(1.22)' 
                  : 'translateY(-38px) translateX(2px) scale(1.22)',
                filter: 'drop-shadow(0 35px 70px rgba(0,0,0,0.85))',
                transition: 'all 0.3s cubic-bezier(0.25, 1, 0.5, 1)'
              }}
            />

            {/* Right float: Chocolate / Matcha Splash Emerging Right Behind Glass */}
            {item.floatRightImg && (
              <img
                src={item.floatRightImg}
                alt="floating chocolate or matcha splash"
                style={{
                  position: 'absolute',
                  right: '6%',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '360px',
                  maxWidth: '35%',
                  opacity: 0.88,
                  filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.45))',
                  zIndex: 2,
                  pointerEvents: 'none'
                }}
              />
            )}
          </div>

          {/* Center Tagline Pill Button - Identical Placement Below Glass */}
          <div
            style={{
              position: 'relative',
              marginTop: '14px',
              padding: '10px 26px',
              borderRadius: '30px',
              background: 'rgba(0, 0, 0, 0.55)',
              border: '1px solid rgba(255,255,255,0.25)',
              color: '#FFF',
              fontWeight: '700',
              fontSize: '0.9rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              zIndex: 20,
              backdropFilter: 'blur(8px)',
              boxShadow: '0 8px 24px rgba(0,0,0,0.3)'
            }}
          >
            <Sparkles size={16} color="#F59E0B" />
            <span>{item.badgeText}</span>
          </div>
        </div>

      <div className="wrap max-w-6xl mx-auto px-4" style={{ marginTop: '30px' }}>
        {/* Slider Navigation Bar Below */}
        <div style={{ display: 'flex', flexWrap: 'wrap', items: 'center', justifyContent: 'space-between', gap: '12px', borderBottom: '1px solid #E2D7C7', paddingBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ background: item.pillBg, color: '#FFF', fontSize: '0.75rem', fontWeight: '800', padding: '4px 12px', borderRadius: '12px' }}>
              {item.tag}
            </span>
            <span style={{ fontSize: '0.85rem', color: '#665544', fontWeight: '600', fontFamily: 'Space Mono, monospace' }}>
              {item.category}
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {SIGNATURE_ITEMS.map((sig, idx) => (
              <button
                key={sig.id}
                onClick={() => setActiveIndex(idx)}
                style={{
                  background: activeIndex === idx ? sig.pillBg : '#FFFFFF',
                  color: activeIndex === idx ? '#FFF' : 'var(--text-dark)',
                  border: activeIndex === idx ? `1px solid ${sig.pillBg}` : '1px solid var(--border-card)',
                  padding: '9px 20px',
                  borderRadius: '10px',
                  fontSize: '0.85rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: activeIndex === idx ? '0 4px 14px rgba(0,0,0,0.18)' : '0 2px 8px rgba(0,0,0,0.05)'
                }}
              >
                {sig.name}
              </button>
            ))}
          </div>
        </div>

        {/* Detailed Item Information Section - Ultra Aesthetic Full-Width Story Panel */}
        <div style={{
          marginTop: '40px',
          background: '#FFFFFF',
          borderRadius: '24px',
          padding: '44px 48px',
          border: '1px solid var(--border-card)',
          boxShadow: '0 15px 35px rgba(0,0,0,0.05)'
        }}>
          <div style={{ width: '100%' }}>
            <h2 style={{
              fontSize: '2.2rem',
              fontFamily: 'var(--font-serif)',
              color: 'var(--text-headline)',
              marginBottom: '24px',
              lineHeight: '1.25',
              letterSpacing: '-0.01em'
            }}>
              {item.headline}
            </h2>

            <div style={{
              color: 'var(--text-dark)',
              fontSize: '1.02rem',
              lineHeight: '1.8'
            }}>
              {item.desc}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
