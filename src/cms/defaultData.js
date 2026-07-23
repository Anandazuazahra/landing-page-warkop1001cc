import kopiCakraGlassImg from '../assets/kopi_cakra_glass.webp';
import matchaCakraGlassImg from '../assets/matcha_cakra_glass.webp';
import matchaSplashImg from '../assets/matcha_splash.webp';
import floatingBeansImg from '../assets/floating_coffee_beans.webp';
import floatingChocolateImg from '../assets/floating_chocolate.webp';
import heroLatteImg from '../assets/hero_latte_art.webp';

import eventSayembaraImg from '../assets/event_sayembara_kreator.webp';
import eventKaraokeImg from '../assets/event_lomba_karaoke.webp';

import warkopPhotoImg from '../assets/warkop_photo.webp';
import berandaWarkopPhotoImg from '../assets/beranda_warkop_photo.webp';

export const DEFAULT_CMS_DATA = {
  siteInfo: {
    brandName: "Warkop 1001cc",
    adminUsername: "admin",
    adminPassword: "warkop1001",
    eyebrow: "Warkop & Ruang Kolaborasi",
    heroTitleLine1: "Tempat Nongkrong Hangat,",
    heroTitleLine2: "Kopi Terbaik Setiap Saat.",
    heroLead: "Nikmati kopi nusantara pilihan, makanan favorit, dan suasana nyaman untuk bekerja, berdiskusi, maupun bersantai bersama teman.",
    address: "Kalisuren, Tajur Halang, Bojonggede - Kemang (Bomang)",
    mapsUrl: "https://maps.google.com/?q=Warkop+1001cc+Bojonggede+Kemang+Bomang+Kalisuren",
    phoneWA: "0882-8927-7876",
    waNumberRaw: "6288289277876",
    email: "warkop1001cc@gmail.com",
    instagram: "@warkop1001cc",
    instagramUrl: "https://www.instagram.com/warkop1001cc",
    hours: "Buka 24 Jam Non-Stop Setiap Hari (Senin - Minggu)",
    establishedDate: "20 September 2025",
    googleRating: "4.8",
    googleReviewsCountText: "Ulasan Asli Google Reviews · Warkop 1001cc Naik Kelas",
    aboutTitle: "Tentang Warkop 1001cc",
    aboutSubtitle: "Rumah bagi setiap cerita — tempat bertemunya kehangatan kopi, inspirasi, dan kebersamaan 24 jam non-stop.",
    aboutStoryPart1: "Warkop 1001cc resmi berdiri pada 20 September 2025. Berawal dari kebiasaan tim yang sering berkumpul, berdiskusi, dan menikmati kopi di berbagai kafe, muncul sebuah ide sederhana: mengapa tidak membangun tempat nongkrong sendiri?",
    aboutStoryPart2: "Melihat masih terbatasnya tempat yang buka selama 24 jam, lahirlah Warkop 1001cc sebagai warkop yang nyaman, buka 24 jam, dan menjadi tempat berkumpul, bekerja, maupun bersantai kapan saja. Dengan menghadirkan kopi berkualitas dan suasana yang hangat, 1001cc hadir untuk menjadi rumah bagi setiap cerita dan pertemuan."
  },

  signatureMenu: [
    {
      id: 'kopi_cakra',
      tag: 'Best Seller #1',
      category: 'Signature Coffee #1',
      name: 'Kopi Cakra',
      badgeText: 'Ngopi Sambil Nyoklat',
      headline: 'Kopi Cakra: Nikmati Sensasi Ngopi Sambil Nyoklat',
      descText: 'Di tengah berkembangnya budaya minum kopi, Kopi Cakra hadir sebagai signature coffee andalan 1001cc yang menawarkan pengalaman berbeda melalui konsep "Ngopi Sambil Nyoklat." Bukan sekadar mencampurkan kopi dan cokelat, Kopi Cakra menghadirkan perpaduan rasa yang harmonis—pahit khas kopi berpadu dengan manis lembut cokelat, menciptakan cita rasa yang kaya, seimbang, dan berkarakter dalam setiap tegukan.\n\nKeunikan Kopi Cakra terletak pada kemampuannya menghadirkan dua kenikmatan dalam satu cangkir. Aroma kopi yang kuat memberikan sensasi semangat, sementara sentuhan cokelat menghadirkan rasa lembut yang membuat pengalaman menikmati kopi terasa lebih nyaman dan menyenangkan.\n\nKopi Cakra — Ngopi Sambil Nyoklat.',
      bgGradient: 'radial-gradient(ellipse at 50% 50%, #4D2814 0%, #351A0C 55%, #1C0C05 100%)',
      bgText: 'CAKRA',
      textColor: '#D97706',
      pillBg: '#C96E28',
      glassImage: kopiCakraGlassImg,
      floatLeftImg: floatingBeansImg,
      floatRightImg: floatingChocolateImg
    },
    {
      id: 'matcha_cakra',
      tag: 'Trending Inovasi',
      category: 'Signature Non-Coffee',
      name: 'Cakra Matcha Latte',
      badgeText: 'Japanese Matcha Meets Espresso Cakra',
      headline: 'Cakra Matcha Latte: Nikmati Kesegaran Matcha dalam Setiap Tegukan',
      descText: 'Cakra Matcha Latte merupakan signature non-coffee dari 1001cc yang memadukan matcha berkualitas dengan susu creamy untuk menghasilkan rasa yang lembut, segar, dan nikmat. Perpaduan keduanya menciptakan minuman yang cocok dinikmati kapan saja.\n\nSelain memiliki cita rasa yang khas, matcha juga dikenal mengandung antioksidan alami (katekin EGCG) serta L-theanine yang membantu meningkatkan fokus sekaligus memberikan efek rileks.\n\nDengan rasa yang seimbang dan lembut, Cakra Matcha Latte menjadi pilihan tepat bagi pencinta matcha maupun alternatif non-kopi.',
      bgGradient: 'radial-gradient(ellipse at 50% 50%, #25441B 0%, #183011 55%, #0B1907 100%)',
      bgText: 'MATCHA',
      textColor: '#84CC16',
      pillBg: '#558b2f',
      glassImage: matchaCakraGlassImg,
      floatLeftImg: floatingBeansImg,
      floatRightImg: matchaSplashImg
    }
  ],

  events: [
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
  ],

  testimonials: [
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
  ],

  gallery: [
    {
      id: 1,
      title: 'Area Duduk & Mural Kopi Cakra',
      category: 'Suasana Warkop',
      image: warkopPhotoImg,
      location: 'Area Utama Warkop 1001cc',
      desc: 'Suasana hangat tempat duduk kayu dengan sentuhan mural Kopi Cakra yang ikonik. Dilengkapi colokan listrik di setiap meja.'
    },
    {
      id: 2,
      title: 'Beranda Outdoor & Parkir Luas',
      category: 'Suasana Warkop',
      image: berandaWarkopPhotoImg,
      location: 'Jalur Bomang, Kalisuren',
      desc: 'Area terbuka 24 jam dengan parkir kendaraan melimpah, suasana sejuk untuk nongkrong malam bersama teman.'
    },
    {
      id: 3,
      title: 'Kopi Cakra (Ngopi Sambil Nyoklat)',
      category: 'Signature Menu',
      image: kopiCakraGlassImg,
      location: 'Barista Station 1001cc',
      desc: 'Signature coffee andalan 1001cc dengan konsep "Ngopi Sambil Nyoklat." Perpaduan rasa pahit khas kopi robusta Dampit pilihan dan manis lembut cokelat pekat dalam setiap tegukan.'
    },
    {
      id: 4,
      title: 'Cakra Matcha Latte Japanese Blend',
      category: 'Signature Menu',
      image: matchaCakraGlassImg,
      location: 'Barista Station 1001cc',
      desc: 'Matcha jepang pilihan dipadu susu gurih creamy, pilihan favorit pengunjung non-coffee.'
    },
    {
      id: 5,
      title: 'Latte Art Nusantara Freshly Brewed',
      category: 'Signature Menu',
      image: heroLatteImg,
      location: 'Espresso Bar 1001cc',
      desc: 'Racikan kopi espresso dari biji kopi sangrai nusantara dengan foam halus nan elegan.'
    },
    {
      id: 6,
      title: 'Sayembara Kreator 1001cc',
      category: 'Event & Komunitas',
      image: eventSayembaraImg,
      location: 'Warkop 1001cc & Digital',
      desc: 'Ajang kreasi video Reels & TikTok komunitas pengunjung dengan Grand Prize total Rp 4.000.000.'
    },
    {
      id: 7,
      title: 'Keseruan Lomba Karaoke Batch 2',
      category: 'Event & Komunitas',
      image: eventKaraokeImg,
      location: 'Panggung Utama Warkop 1001cc',
      desc: 'Dokumentasi momen meriah lomba karaoke anak & remaja dengan antusiasme penonton memadati warkop.'
    }
  ],

  articles: [
    {
      id: 'kopi_cakra_story',
      title: 'Kisah di Balik Kopi Cakra: Resep Legendaris Warkop Naik Kelas',
      category: 'Kisah Rasa',
      time: '3 mnt baca',
      image: kopiCakraGlassImg,
      date: '14 Juli 2026',
      excerpt: 'Bagaimana segelas kopi susu bisa merubah definisi nongkrong di warkop? Mari telusuri perjalanan lahirnya Kopi Cakra yang legendaris.',
      content: 'Di Warkop 1001cc, Kopi Cakra bukan sekadar menu biasa — ini adalah tonggak sejarah kami. Lahir dari eksperimen panjang untuk menghadirkan rasa es kopi susu gula aren yang benar-benar kuat, pekat, namun tetap bersahabat di lidah.\n\nFilosofi Nama "Cakra"\nDalam tradisi kuno, Cakra melambangkan pusat energi dan kekuatan yang berputar dalam tubuh. Kami ingin setiap orang yang meminum kopi ini merasakan kembali aliran energi positif.\n\nProses Pembuatan yang Khas\nKopi Cakra dibuat dengan menggunakan double-shot espresso robusta pilihan dari Dampit. Karakter cokelat hitam tebal robusta berpadu sempurna dengan racikan susu segar dan gula aren murni pilihan.'
    },
    {
      id: 'matcha_cakra_innovation',
      title: 'Kopi Matcha Cakra: Ketika Kultur Jepang Bertemu Tradisi Warkop',
      category: 'Inovasi Menu',
      time: '3 mnt baca',
      image: matchaCakraGlassImg,
      date: '14 Juli 2026',
      excerpt: 'Perpaduan berani antara pahit gurihnya teh hijau matcha asli Jepang dengan espreso robusta lokal yang pekat khas Cakra.',
      content: 'Banyak yang meragukan kombinasi antara teh hijau Jepang (matcha) dengan kopi susu tradisional. Namun di Warkop 1001cc, kami menyukai tantangan inovasi. Dari sanalah lahir Kopi Matcha Cakra.\n\nKeseimbangan Rasa Dua Benua\nKunci kelezatan menu ini terletak pada kualitas bahan dan presisi lapisan. Kami menggunakan bubuk matcha murni kualitas premium yang dilarutkan perlahan dengan susu segar krimi.'
    }
  ]
};
