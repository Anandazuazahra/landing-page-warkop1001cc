import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, Flame, Coffee } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

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
    name: 'Kopi Cakra Original',
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
        <p style={{ fontWeight: 'bold', color: '#C96E28', marginTop: '20px' }}>
          Kopi Cakra — Ngopi Sambil Nyoklat.
        </p>
      </>
    ),
    bgGradient: 'radial-gradient(ellipse at 50% 50%, #4D2814 0%, #351A0C 55%, #1C0C05 100%)',
    bgText: 'CAKRA',
    textColor: '#D97706',
    pillBg: '#C96E28',
    glassImage: kopiCakraGlassImg,
    floatLeftImg: floatingBeansImg,
    floatRightImg: floatingChocolateImg,
    glassHeight: '460px',
    glassTransform: 'translateY(0px) scale(1.48)'
  },
  {
    id: 'matcha_cakra',
    tag: 'Trending Inovasi',
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
    bgGradient: 'radial-gradient(ellipse at 50% 50%, #25441B 0%, #183011 55%, #0B1907 100%)',
    bgText: 'MATCHA',
    textColor: '#84CC16',
    pillBg: '#558b2f',
    glassImage: matchaCakraGlassImg,
    floatLeftImg: floatingBeansImg,
    floatRightImg: matchaSplashImg,
    glassHeight: '480px',
    glassTransform: 'translateY(12px) scale(1.48)'
  }
];

export default function SignatureMenu() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const item = SIGNATURE_ITEMS[activeIndex];

  // Detect prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

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
    <ScrollReveal variant="up" style={{ padding: '0 0 54px', width: '100%' }}>
      {/* 1. HERO BANNER CONTAINER */}
      <motion.div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={{ background: item.bgGradient }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        style={{
          width: '100%',
          position: 'relative',
          overflow: 'hidden',
          padding: '24px 16px 24px',
          minHeight: 'clamp(380px, 50vw, 520px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 20px 45px rgba(0,0,0,0.35)'
        }}
      >
        {/* WATERMARK TEKS BESAR: Centered Background (z-index 0) */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
            overflow: 'hidden',
            zIndex: 0
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={`bgtext-${item.id}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              style={{
                width: '100%',
                textAlign: 'center',
                fontSize: 'clamp(2.8rem, 14vw, 10rem)',
                fontFamily: 'Fraunces, serif',
                fontWeight: '900',
                color: 'rgba(255, 255, 255, 0.04)',
                letterSpacing: '0.08em',
                userSelect: 'none',
                pointerEvents: 'none',
                whiteSpace: 'nowrap',
                lineHeight: '1'
              }}
            >
              {item.bgText}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* FOCAL GLASS SLIDE CONTENT */}
        <AnimatePresence mode="wait">
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              zIndex: 5
            }}
          >
            {/* Stage Box */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '1200px',
                height: 'clamp(260px, 42vw, 440px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {/* LEFT DECORATIVE ELEMENT (Biji Kopi): Hidden on small mobile screens */}
              {item.floatLeftImg && (
                <motion.img
                  src={item.floatLeftImg}
                  alt="floating coffee beans"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: 0.45,
                    scale: 1,
                    y: prefersReducedMotion ? 0 : [-10, 10, -10]
                  }}
                  transition={{
                    opacity: { duration: 0.4, delay: 0.05 },
                    scale: { duration: 0.4, delay: 0.05 },
                    y: {
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }
                  }}
                  className="hero-float-decor"
                  style={{
                    position: 'absolute',
                    left: '8%',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: ' clamp(140px, 20vw, 300px)',
                    maxWidth: '24%',
                    filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.45))',
                    zIndex: 3,
                    pointerEvents: 'none'
                  }}
                />
              )}

              {/* Cinematic Spotlight Aura behind center glass (z-index 1) */}
              <motion.div
                animate={{
                  scale: prefersReducedMotion ? 1 : [1, 1.06, 1],
                  opacity: prefersReducedMotion ? 1 : [0.85, 1, 0.85]
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 'clamp(260px, 45vw, 500px)',
                  height: 'clamp(220px, 40vw, 400px)',
                  borderRadius: '50%',
                  background:
                    item.id === 'kopi_cakra'
                      ? 'radial-gradient(circle, rgba(201, 110, 40, 0.52) 0%, transparent 70%)'
                      : 'radial-gradient(circle, rgba(136, 171, 73, 0.52) 0%, transparent 70%)',
                  filter: 'blur(40px)',
                  pointerEvents: 'none',
                  zIndex: 1
                }}
              />

              {/* MASSIVE GLASS CUP (FLUID FOR ALL DEVICES) */}
              <motion.img
                src={item.glassImage}
                alt={item.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: prefersReducedMotion ? 0 : [-6, 6, -6]
                }}
                transition={{
                  opacity: { duration: 0.5, ease: 'easeInOut' },
                  scale: { duration: 0.5, ease: 'easeInOut' },
                  y: {
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }
                }}
                style={{
                  height: '100%',
                  maxHeight: 'clamp(260px, 42vw, 440px)',
                  width: 'auto',
                  maxWidth: '85vw',
                  objectFit: 'contain',
                  position: 'relative',
                  margin: '0 auto',
                  display: 'block',
                  zIndex: 20,
                  filter: 'drop-shadow(0 30px 75px rgba(0,0,0,0.9))'
                }}
              />

              {/* RIGHT DECORATIVE ELEMENT */}
              {item.floatRightImg && (
                <motion.img
                  src={item.floatRightImg}
                  alt="floating chocolate or matcha splash"
                  initial={{ opacity: 0, scale: 0.6, rotate: -8 }}
                  animate={{
                    opacity: 0.45,
                    scale: 1,
                    rotate: 0,
                    y: prefersReducedMotion ? 0 : [6, -6, 6]
                  }}
                  transition={{
                    opacity: { duration: 0.5, ease: 'easeOut', delay: 0.15 },
                    scale: { duration: 0.6, ease: 'easeOut', delay: 0.15 },
                    rotate: { duration: 0.6, ease: 'easeOut', delay: 0.15 },
                    y: {
                      duration: 3.2,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }
                  }}
                  className="hero-float-decor"
                  style={{
                    position: 'absolute',
                    right: '8%',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: 'clamp(140px, 20vw, 300px)',
                    maxWidth: '24%',
                    filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.45))',
                    zIndex: 3,
                    pointerEvents: 'none'
                  }}
                />
              )}
            </div>

            {/* BADGE TEKS DI BAWAH GELAS PRODUK */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: 0.3 }}
              style={{
                position: 'relative',
                marginTop: '12px',
                padding: '8px 18px',
                borderRadius: '30px',
                background: 'rgba(0, 0, 0, 0.75)',
                border: `1px solid ${item.pillBg}`,
                color: '#FFF',
                fontWeight: '700',
                fontSize: 'clamp(0.78rem, 2vw, 0.92rem)',
                letterSpacing: '0.02em',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                zIndex: 25,
                backdropFilter: 'blur(8px)',
                boxShadow: '0 8px 25px rgba(0,0,0,0.45)',
                textAlign: 'center'
              }}
            >
              <Sparkles size={15} color={item.textColor} style={{ flexShrink: 0 }} />
              <span>{item.badgeText}</span>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* NAVIGATION TABS & CONTROLS ROW BELOW BANNER */}
      <div className="wrap" style={{ marginTop: '24px' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '24px',
            flexWrap: 'wrap',
            gap: '14px'
          }}
        >
          {/* Left Category Badges */}
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
            <span
              style={{
                background: item.pillBg,
                color: '#FFFFFF',
                padding: '6px 16px',
                borderRadius: '20px',
                fontWeight: '700',
                fontSize: '0.82rem',
                boxShadow: '0 4px 12px rgba(0,0,0,0.12)',
                transition: 'background 0.3s ease'
              }}
            >
              {item.tag}
            </span>
            <span
              style={{
                background: '#EFE6D8',
                color: 'var(--text-muted)',
                padding: '6px 14px',
                borderRadius: '20px',
                fontWeight: '600',
                fontSize: '0.82rem',
                border: '1px solid var(--border-light)'
              }}
            >
              {item.category}
            </span>
          </div>

          {/* Right Controls: Product Selector Pills + Prev/Next Arrows */}
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
            {/* Product Selector Pills */}
            {SIGNATURE_ITEMS.map((sig, idx) => (
              <motion.button
                key={sig.id}
                onClick={() => setActiveIndex(idx)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  background: activeIndex === idx ? sig.pillBg : '#FFFFFF',
                  color: activeIndex === idx ? '#FFFFFF' : 'var(--text-dark)',
                  border: activeIndex === idx ? 'none' : '1px solid var(--border-card)',
                  padding: '8px 16px',
                  borderRadius: '12px',
                  fontWeight: '700',
                  fontSize: '0.84rem',
                  cursor: 'pointer',
                  boxShadow: activeIndex === idx ? '0 6px 16px rgba(0,0,0,0.15)' : 'none',
                  transition: 'all 0.25s ease'
                }}
              >
                {sig.name}
              </motion.button>
            ))}

            {/* Prev & Next Arrow Buttons */}
            <div style={{ display: 'flex', gap: '6px' }}>
              <motion.button
                onClick={handlePrev}
                whileHover={{ scale: 1.1, backgroundColor: 'var(--border-card)' }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.15 }}
                aria-label="Previous Product"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: '#FFFFFF',
                  border: '1px solid var(--border-card)',
                  color: 'var(--text-headline)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.06)'
                }}
              >
                <ChevronLeft size={18} />
              </motion.button>

              <motion.button
                onClick={handleNext}
                whileHover={{ scale: 1.1, backgroundColor: 'var(--border-card)' }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.15 }}
                aria-label="Next Product"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: '#FFFFFF',
                  border: '1px solid var(--border-card)',
                  color: 'var(--text-headline)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.06)'
                }}
              >
                <ChevronRight size={18} />
              </motion.button>
            </div>
          </div>
        </div>

        {/* ELEGANT MASTER PRODUCT PRESENTATION CARD */}
        <div
          style={{
            background: '#FFFFFF',
            borderRadius: '20px',
            border: '1px solid var(--border-card)',
            boxShadow: '0 12px 36px rgba(44, 24, 11, 0.05)',
            padding: 'clamp(24px, 4vw, 44px) clamp(18px, 4vw, 48px)',
            maxWidth: '1100px',
            margin: '0 auto'
          }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.4rem, 3.2vw, 2.2rem)',
              color: 'var(--text-headline)',
              marginBottom: '20px',
              lineHeight: '1.28',
              textAlign: 'center'
            }}
          >
            {item.headline}
          </h2>

          <div
            style={{
              color: 'var(--text-dark)',
              fontSize: 'clamp(0.9rem, 2vw, 1rem)',
              lineHeight: '1.75',
              textAlign: 'left'
            }}
          >
            {item.desc}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
