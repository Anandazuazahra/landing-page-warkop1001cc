import React from 'react';
import { Coffee, Flame, Heart, Sparkles, Navigation } from 'lucide-react';

export default function AboutWarkop() {
  return (
    <div className="animate-fade-up">
      {/* Intro Hero Section */}
      <section className="section" style={{ paddingBottom: '40px' }}>
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Tentang Kami</div>
            <div className="steaming-mug-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '80px', margin: '20px 0', position: 'relative' }}>
              <div className="steam-wrapper" style={{ display: 'flex', gap: '6px', position: 'absolute', top: '0px' }}>
                <div className="steam-element steam-1" style={{ width: '2px', height: '14px', background: 'var(--copper-light)', borderRadius: '50%', opacity: 0 }}></div>
                <div className="steam-element steam-2" style={{ width: '2px', height: '14px', background: 'var(--copper-light)', borderRadius: '50%', opacity: 0 }}></div>
                <div className="steam-element steam-3" style={{ width: '2px', height: '14px', background: 'var(--copper-light)', borderRadius: '50%', opacity: 0 }}></div>
              </div>
              <Coffee size={40} color="var(--copper)" style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))' }} />
            </div>
            <h2>Kisah Warkop 1001cc</h2>
            <p>Lebih dari sekadar tempat minum kopi — kami adalah ruang ketiga Anda, tempat bertemunya ide, energi, dan kebersamaan.</p>
          </div>

          <div className="about-grid">
            <div className="about-story">
              <h3>Asal Usul Nama "1001cc"</h3>
              <p>
                Banyak pelanggan bertanya-tanya, dari mana angka <strong>1001cc</strong> berasal? Angka ini tidak dipilih secara acak. Di dunia otomotif, mesin berkapasitas besar di atas 1000cc melambangkan kekuatan, daya tahan, dan jiwa petualang tanpa batas. 
              </p>
              <p>
                Kami mengambil filosofi tersebut ke dalam setiap cangkir kopi kami. Kopi kami diseduh dengan presisi tinggi dan takaran ganda (double-shot) untuk menghasilkan energi murni setara mesin legendaris 1001cc — dirancang khusus untuk mengisi kembali tenaga para pekerja kreatif, pengemudi jalanan, dan komunitas lokal yang tidak pernah lelah mengejar mimpi mereka.
              </p>
              <p>
                Dimulai dari sebuah garasi kecil di pinggiran kota Bogor pada tahun 2020, Warkop 1001cc berkembang menjadi titik kumpul favorit bagi mereka yang mengapresiasi segelas kopi hitam tradisional tubruk maupun kopi susu modern yang disajikan dengan cepat tanpa antrean.
              </p>
            </div>

            <div className="about-values">
              <h3 style={{ fontSize: '1.4rem', fontFamily: 'Fraunces, serif', marginBottom: '24px', borderBottom: '1px solid var(--line)', paddingBottom: '12px' }}>
                Nilai Utama Kami
              </h3>

              <div className="value-item">
                <h4><Flame size={16} /> Tradisi & Inovasi</h4>
                <p>Kami menyatukan metode seduh tarik tradisional yang menghasilkan aroma pekat dengan teknologi digital modern QR order untuk efisiensi transaksi.</p>
              </div>

              <div className="value-item">
                <h4><Coffee size={16} /> 100% Kopi Nusantara</h4>
                <p>Kami hanya menggunakan biji kopi lokal terbaik seperti Robusta Dampit (Malang) yang tebal cokelatnya, dan Arabika Preanger (Jawa Barat) dengan fruity acidity yang menyegarkan.</p>
              </div>

              <div className="value-item">
                <h4><Heart size={16} /> Hub Komunitas</h4>
                <p>Warkop 1001cc didesain ramah stopkontak, Wi-Fi kencang, dan meja luas agar nyaman digunakan untuk bekerja (WFC), diskusi kelompok, maupun sekadar mengobrol santai.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <div className="stats-banner">
        <div className="wrap">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-num">1001cc</div>
              <div className="stat-label">Kekuatan Kopi</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">100%</div>
              <div className="stat-label">Biji Kopi Lokal</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">15+</div>
              <div className="stat-label">Pilihan Menu</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">12k+</div>
              <div className="stat-label">Cangkir / Bulan</div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <section className="section" style={{ paddingTop: '40px' }}>
        <div className="wrap">
          <div className="section-head" style={{ maxWidth: '700px' }}>
            <div className="eyebrow">Proses Pembuatan</div>
            <h2>Dari Biji Kopi Pilihan hingga ke Meja Anda</h2>
            <p>Setiap cangkir melewati proses kontrol kualitas yang ketat agar rasa yang Anda nikmati hari ini sama nikmatnya dengan cangkir pertama Anda.</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '24px',
            marginTop: '40px'
          }}>
            <div style={{ background: 'var(--roast)', padding: '28px', borderRadius: '6px', border: '1px solid var(--line)' }}>
              <span className="mono" style={{ color: 'var(--copper-light)', fontSize: '0.8rem', fontWeight: 'bold' }}>TAHAP 01</span>
              <h3 style={{ fontSize: '1.15rem', margin: '12px 0 8px' }}>Kurasi Biji Kopi</h3>
              <p style={{ color: 'var(--ink-soft)', fontSize: '0.88rem', lineHeight: '1.6' }}>Biji kopi robusta dan arabika dipilih langsung dari petani mitra lokal pada tingkat kematangan ceri merah sempurna.</p>
            </div>

            <div style={{ background: 'var(--roast)', padding: '28px', borderRadius: '6px', border: '1px solid var(--line)' }}>
              <span className="mono" style={{ color: 'var(--copper-light)', fontSize: '0.8rem', fontWeight: 'bold' }}>TAHAP 02</span>
              <h3 style={{ fontSize: '1.15rem', margin: '12px 0 8px' }}>Penyangraian Presisi</h3>
              <p style={{ color: 'var(--ink-soft)', fontSize: '0.88rem', lineHeight: '1.6' }}>Proses sangrai dilakukan dengan profil medium-to-dark roast untuk mengeluarkan aroma karamel manis alami khas robusta.</p>
            </div>

            <div style={{ background: 'var(--roast)', padding: '28px', borderRadius: '6px', border: '1px solid var(--line)' }}>
              <span className="mono" style={{ color: 'var(--copper-light)', fontSize: '0.8rem', fontWeight: 'bold' }}>TAHAP 03</span>
              <h3 style={{ fontSize: '1.15rem', margin: '12px 0 8px' }}>Penyeduhan Segar</h3>
              <p style={{ color: 'var(--ink-soft)', fontSize: '0.88rem', lineHeight: '1.6' }}>Kopi baru akan digiling (grind-on-demand) sesaat sebelum diseduh guna menjaga kesegaran minyak alami kopi.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
