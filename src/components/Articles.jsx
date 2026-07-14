import React, { useState, useEffect } from 'react';
import { Clock, BookOpen, X, ChevronRight, Share2 } from 'lucide-react';

const ARTICLES = [
  {
    id: 'kopi_cakra_story',
    title: 'Kisah di Balik Kopi Cakra: Resep Legendaris Warkop Naik Kelas',
    category: 'Kisah Rasa',
    time: '3 mnt baca',
    image: '/kopi_cakra.jpg',
    date: '14 Juli 2026',
    excerpt: 'Bagaimana segelas kopi susu bisa merubah definisi nongkrong di warkop? Mari telusuri perjalanan lahirnya Kopi Cakra yang legendaris.',
    content: (
      <>
        <p>Di Warkop 1001cc, Kopi Cakra bukan sekadar menu biasa — ini adalah tonggak sejarah kami. Lahir dari eksperimen panjang untuk menghadirkan rasa es kopi susu gula aren yang benar-benar kuat, pekat, namun tetap bersahabat di lidah.</p>
        <p><strong>Filosofi Nama "Cakra"</strong><br />
        Dalam tradisi kuno, Cakra melambangkan pusat energi dan kekuatan yang berputar dalam tubuh. Kami ingin setiap orang yang meminum kopi ini merasakan kembali aliran energi positif untuk melanjutkan aktivitas mereka, baik itu lembur kerja, diskusi kreatif, maupun petualangan berkendara.</p>
        <p><strong>Proses Pembuatan yang Khas</strong><br />
        Kopi Cakra dibuat dengan menggunakan double-shot espresso robusta pilihan dari Dampit. Karakter cokelat hitam tebal robusta berpadu sempurna dengan racikan susu segar dan gula aren murni pilihan. Rasa manis gurih yang tebal ini langsung menjadi favorit pelanggan sejak hari pertama dirilis, mewujudkan jargon kami: Warkop Naik Kelas.</p>
      </>
    )
  },
  {
    id: 'matcha_cakra_innovation',
    title: 'Kopi Matcha Cakra: Ketika Kultur Jepang Bertemu Tradisi Warkop',
    category: 'Inovasi Menu',
    time: '3 mnt baca',
    image: '/kopi_matcha_cakra.jpg',
    date: '14 Juli 2026',
    excerpt: 'Perpaduan berani antara pahit gurihnya teh hijau matcha asli Jepang dengan espreso robusta lokal yang pekat khas Cakra.',
    content: (
      <>
        <p>Banyak yang meragukan kombinasi antara teh hijau Jepang (matcha) dengan kopi susu tradisional. Namun di Warkop 1001cc, kami menyukai tantangan inovasi. Dari sanalah lahir Kopi Matcha Cakra.</p>
        <p><strong>Keseimbangan Rasa Dua Benua</strong><br />
        Kunci kelezatan menu ini terletak pada kualitas bahan dan presisi lapisan. Kami menggunakan bubuk matcha murni kualitas premium yang dilarutkan perlahan dengan susu segar krimi. Di atasnya, kami menuangkan double-shot espresso Cakra yang pekat secara perlahan menggunakan teknik pouring khusus.</p>
        <p>Saat diseruput tanpa diaduk, Anda akan merasakan earthy notes manis lembut dari matcha terlebih dahulu, disusul kepekatan rasa cokelat robusta panggang yang meluncur di akhir seruputan. Sebuah perpaduan harmoni rasa yang tebal, unik, dan tak terlupakan.</p>
      </>
    )
  },
  {
    id: 'why_cakra_superior',
    title: 'Rahasia Bahan Baku Utama di Balik Cita Rasa Menu Cakra',
    category: 'Kualitas Menu',
    time: '2 mnt baca',
    image: '/kopi_cakra.jpg',
    date: '14 Juli 2026',
    excerpt: 'Dari mana asal biji kopi robusta tebal dan bubuk matcha premium yang kami gunakan? Intip rahasia dapur kami di sini.',
    content: (
      <>
        <p>Mengapa rasa Kopi Cakra dan Kopi Matcha Cakra di Warkop 1001cc sangat berbeda dengan warkop lainnya? Rahasianya ada pada komitmen kami terhadap orisinalitas bahan baku.</p>
        <p><strong>Robusta Dampit Pilihan Petani Lokal</strong><br />
        Biji kopi robusta kami didatangkan langsung dari lereng Gunung Semeru, Dampit, Malang. Wilayah ini terkenal menghasilkan robusta terbaik dengan notes karamel cokelat manis alami yang tebal tanpa rasa pahit yang kasar (harsh).</p>
        <p><strong>Matcha Uji Premium</strong><br />
        Untuk Kopi Matcha Cakra, kami tidak menggunakan bubuk matcha instan berpemanis buatan. Kami menggunakan bubuk matcha murni yang digiling halus dari daun teh hijau pilihan. Rasa pahit-sepet (*astringent*) khas teh hijau asli berpadu manis susu memberikan tekstur gurih alami yang menyeimbangkan kopi robusta.</p>
      </>
    )
  }
];

export default function Articles() {
  const [selectedArticle, setSelectedArticle] = useState(null);
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
            <div className="eyebrow">Cerita & Edukasi</div>
            <h2>Cerita Kopi Warkop 1001cc</h2>
            <p>Pelajari lebih dalam tentang asal-usul kopi, rahasia cara seduh terbaik, dan informasi menarik lainnya seputar kultur kopi Indonesia.</p>
          </div>
          <div className="articles-grid">
            {[1, 2, 3].map((n) => (
              <div className="skeleton-card" key={n} style={{ height: '340px' }}>
                <div className="skeleton-img animate-shimmer" style={{ height: '180px' }}></div>
                <div className="skeleton-line title animate-shimmer" style={{ background: 'rgba(245,237,225,0.05)', marginTop: '8px' }}></div>
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
          <div className="eyebrow">Cerita & Edukasi</div>
          <h2>Cerita Kopi Warkop 1001cc</h2>
          <p>Pelajari lebih dalam tentang asal-usul kopi, rahasia cara seduh terbaik, dan informasi menarik lainnya seputar kultur kopi Indonesia.</p>
        </div>

        <div className="articles-grid">
          {ARTICLES.map((article) => (
            <div 
              className="art-card" 
              key={article.id}
              onClick={() => setSelectedArticle(article)}
            >
              <div className="art-img-container">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="art-img"
                  loading="lazy"
                />
              </div>
              <div className="art-content">
                <div className="art-meta">
                  <span style={{ color: 'var(--copper-light)', fontWeight: 'bold' }}>{article.category}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '3px', color: 'var(--ink-soft)' }}>
                    <Clock size={11} /> {article.time}
                  </span>
                </div>
                <h3 className="art-title">{article.title}</h3>
                <p className="art-excerpt">{article.excerpt}</p>
                <div className="art-read-more">
                  <span>Baca Selengkapnya</span>
                  <ChevronRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Article Overlay */}
      {selectedArticle && (
        <div 
          className="article-overlay" 
          onClick={() => setSelectedArticle(null)}
        >
          <div 
            className="article-full" 
            onClick={(e) => e.stopPropagation()}
            style={{ animation: 'print-in 0.4s cubic-bezier(.2,.8,.2,1) both' }}
          >
            <button 
              className="article-full-close" 
              onClick={() => setSelectedArticle(null)}
              aria-label="Tutup"
            >
              <X size={20} />
            </button>

            <div className="art-meta" style={{ marginBottom: '14px', fontSize: '0.8rem' }}>
              <span style={{ color: 'var(--copper-light)', fontWeight: 'bold' }}>{selectedArticle.category}</span>
              <span style={{ color: 'var(--ink-soft)' }}>{selectedArticle.date}</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '3px', color: 'var(--ink-soft)' }}>
                <Clock size={12} /> {selectedArticle.time}
              </span>
            </div>

            <h2 className="article-full-title" style={{ fontFamily: 'Fraunces, serif' }}>
              {selectedArticle.title}
            </h2>

            <div style={{ 
              height: '300px', 
              width: '100%', 
              overflow: 'hidden', 
              borderRadius: '6px', 
              margin: '24px 0',
              background: '#120a06'
            }}>
              <img 
                src={selectedArticle.image} 
                alt={selectedArticle.title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <div className="article-full-body">
              {selectedArticle.content}
            </div>

            <div style={{ 
              borderTop: '1px solid var(--line)', 
              paddingTop: '24px', 
              marginTop: '32px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <span className="mono" style={{ fontSize: '0.75rem', color: 'var(--ink-soft)' }}>
                Diterbitkan oleh Warkop 1001cc
              </span>
              <button 
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Tautan artikel disalin!');
                }}
                className="btn-ghost"
                style={{ padding: '8px 12px', fontSize: '0.75rem' }}
              >
                <Share2 size={12} /> Bagikan
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
