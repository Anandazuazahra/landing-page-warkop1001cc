import React, { useState } from 'react';
import {
  X,
  Save,
  RotateCcw,
  Download,
  Upload,
  Plus,
  Trash2,
  Edit2,
  CheckCircle,
  Coffee,
  Calendar,
  Star,
  Camera,
  FileText,
  Info,
  Settings,
  Lock,
  Unlock,
  Eye,
  EyeOff,
  User,
  ShieldCheck,
  Sparkles,
  LayoutDashboard,
  LogOut,
  Sliders,
  Store,
  Layers,
  ArrowRight
} from 'lucide-react';
import { useCMSData, exportCMSDataJSON } from '../cms/cmsStore';

export default function AdminCMSModal({ isOpen, onClose }) {
  const { cmsData, updateCMSData, resetCMSData } = useCMSData();
  const [activeTab, setActiveTab] = useState('siteInfo');

  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('cms_authenticated') === 'true';
  });
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');

  // Form states initialized from cmsData
  const [formData, setFormData] = useState(cmsData);
  const [activeItemIndex, setActiveItemIndex] = useState(null);
  const [editingCategory, setEditingCategory] = useState(null); // 'signatureMenu', 'events', etc.
  const [itemForm, setItemForm] = useState({});
  const [toastMessage, setToastMessage] = useState('');

  if (!isOpen) return null;

  const handleLogin = (e) => {
    e.preventDefault();
    const validUser = cmsData?.siteInfo?.adminUsername || 'admin';
    const validPass = cmsData?.siteInfo?.adminPassword || 'warkop1001';

    if (loginUsername.trim().toLowerCase() === validUser.toLowerCase() && loginPassword === validPass) {
      setIsAuthenticated(true);
      sessionStorage.setItem('cms_authenticated', 'true');
      setLoginError('');
      setLoginPassword('');
    } else {
      setLoginError('Username atau password yang Anda masukkan salah!');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('cms_authenticated');
    setLoginUsername('');
    setLoginPassword('');
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const handleSiteInfoChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      siteInfo: {
        ...prev.siteInfo,
        [field]: value
      }
    }));
  };

  const handleSaveAll = () => {
    updateCMSData(formData);
    showToast('✨ Semua perubahan CMS berhasil disimpan!');
  };

  const handleReset = () => {
    if (window.confirm('Apakah Anda yakin ingin mengembalikan semua data CMS ke standar pabrik? Perubahan manual akan hilang.')) {
      const def = resetCMSData();
      setFormData(def);
      showToast('🔄 CMS berhasil di-reset ke data default.');
    }
  };

  const handleImportJSON = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target.result);
        if (parsed && parsed.siteInfo) {
          setFormData(parsed);
          updateCMSData(parsed);
          showToast('📥 Data JSON CMS berhasil diimpor!');
        } else {
          alert('Format JSON tidak valid untuk CMS Warkop 1001cc.');
        }
      } catch (err) {
        alert('Gagal membaca file JSON: ' + err.message);
      }
    };
    reader.readAsText(file);
  };

  // --- ITEM LEVEL CRUD HELPERS ---
  const handleOpenItemEditor = (catKey, index = null) => {
    setEditingCategory(catKey);
    setActiveItemIndex(index);
    if (index !== null) {
      setItemForm({ ...formData[catKey][index] });
    } else {
      // New item template
      if (catKey === 'signatureMenu') {
        setItemForm({
          id: 'sig_' + Date.now(),
          tag: 'Menu Baru',
          category: 'Signature Coffee',
          name: 'Nama Menu Baru',
          badgeText: 'Keterangan Singkat',
          headline: 'Headline Promosi Menu',
          descText: 'Deskripsi lengkap keunikan rasa menu baru ini...',
          bgGradient: 'radial-gradient(ellipse at 50% 50%, #4D2814 0%, #351A0C 55%, #1C0C05 100%)',
          bgText: 'MENU',
          textColor: '#D97706',
          pillBg: '#C96E28',
          glassImage: cmsData.signatureMenu[0]?.glassImage || ''
        });
      } else if (catKey === 'events') {
        setItemForm({
          id: 'evt_' + Date.now(),
          title: 'Judul Event Baru',
          date: 'Sabtu, 20 Agustus 2026 (19.00 WIB)',
          location: 'Warkop 1001cc Bomang',
          category: 'Lomba & Kompetisi',
          image: cmsData.events[0]?.image || '',
          status: 'MENDATANG',
          isFinished: false,
          desc: 'Deskripsi lengkap kegiatan event...'
        });
      } else if (catKey === 'testimonials') {
        setItemForm({
          id: Date.now(),
          name: 'Nama Pengunjung',
          initials: 'NP',
          role: 'Pelanggan Setia · Google Review',
          rating: 5,
          tag: 'Suasana Nyaman',
          comment: 'Komentar atau ulasan positif pengunjung...',
          scores: 'Makanan 5/5 · Layanan 5/5 · Suasana 5/5'
        });
      } else if (catKey === 'gallery') {
        setItemForm({
          id: Date.now(),
          title: 'Judul Foto Momen',
          category: 'Suasana Warkop',
          image: cmsData.gallery[0]?.image || '',
          location: 'Warkop 1001cc',
          desc: 'Keterangan gambar...'
        });
      } else if (catKey === 'articles') {
        setItemForm({
          id: 'art_' + Date.now(),
          title: 'Judul Artikel Baru',
          category: 'Kisah Rasa',
          time: '3 mnt baca',
          image: cmsData.articles[0]?.image || '',
          date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
          excerpt: 'Ringkasan singkat artikel...',
          content: 'Isi lengkap artikel...'
        });
      }
    }
  };

  const handleImageFileUpload = (e, targetKey = 'image') => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;
        const MAX_SIZE = 1200;

        if (width > height) {
          if (width > MAX_SIZE) {
            height = Math.round((height * MAX_SIZE) / width);
            width = MAX_SIZE;
          }
        } else {
          if (height > MAX_SIZE) {
            width = Math.round((width * MAX_SIZE) / height);
            height = MAX_SIZE;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        const dataUrl = canvas.toDataURL('image/jpeg', 0.82);

        if (targetKey === 'aboutImage') {
          handleSiteInfoChange('aboutImage', dataUrl);
        } else if (targetKey === 'heroImage') {
          handleSiteInfoChange('heroImage', dataUrl);
        } else {
          setItemForm((prev) => ({
            ...prev,
            [targetKey]: dataUrl,
            image: dataUrl,
            glassImage: dataUrl,
            avatar: dataUrl
          }));
        }
        showToast('📸 Foto berhasil diunggah & dioptimasi!');
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  };

  const handleSaveItem = () => {
    if (!editingCategory) return;
    setFormData((prev) => {
      const list = [...(prev[editingCategory] || [])];
      if (activeItemIndex !== null) {
        list[activeItemIndex] = itemForm;
      } else {
        list.push(itemForm);
      }
      const updated = { ...prev, [editingCategory]: list };
      updateCMSData(updated);
      return updated;
    });
    setEditingCategory(null);
    setActiveItemIndex(null);
    showToast('Item berhasil diperbarui!');
  };

  const handleDeleteItem = (catKey, index) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus item ini?')) {
      setFormData((prev) => {
        const list = [...(prev[catKey] || [])];
        list.splice(index, 1);
        const updated = { ...prev, [catKey]: list };
        updateCMSData(updated);
        return updated;
      });
      showToast('Item berhasil dihapus.');
    }
  };

  return (
    <div
      className="cms-modal-overlay"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        background: 'rgba(44, 24, 11, 0.75)',
        backdropFilter: 'blur(12px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px'
      }}
      onClick={onClose}
    >
      {!isAuthenticated ? (
        /* --- ADMIN LOGIN FORM --- */
        <div
          style={{
            width: '100%',
            maxWidth: '430px',
            background: 'linear-gradient(145deg, #1F1008 0%, #140A05 100%)',
            borderRadius: '24px',
            border: '1px solid rgba(201, 110, 40, 0.4)',
            boxShadow: '0 30px 80px rgba(0, 0, 0, 0.85)',
            padding: '36px 30px',
            color: '#FFFFFF',
            position: 'relative'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: 'rgba(255,255,255,0.08)',
              color: '#FFFFFF',
              border: '1px solid rgba(255,255,255,0.15)',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            <X size={18} color="#FFFFFF" />
          </button>

          <div style={{ textAlign: 'center', marginBottom: '28px' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '20px',
                background: '#C96E28',
                boxShadow: '0 8px 24px rgba(201, 110, 40, 0.4)',
                color: '#FFF',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '18px'
              }}
            >
              <ShieldCheck size={32} color="#FFFFFF" />
            </div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '800', fontFamily: 'Fraunces, serif', color: '#FFFFFF', margin: '0 0 6px', letterSpacing: '-0.02em' }}>
              Autentikasi Admin CMS
            </h2>
            <p style={{ fontSize: '0.84rem', color: '#D4A373', margin: 0, fontFamily: 'Space Mono, monospace' }}>
              Warkop 1001cc Control Panel
            </p>
          </div>

          {loginError && (
            <div
              style={{
                background: 'rgba(239, 68, 68, 0.15)',
                border: '1px solid rgba(239, 68, 68, 0.4)',
                color: '#FCA5A5',
                padding: '12px 16px',
                borderRadius: '14px',
                fontSize: '0.82rem',
                fontWeight: '600',
                marginBottom: '22px',
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
            >
              <Lock size={16} color="#FCA5A5" /> {loginError}
            </div>
          )}

          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: '18px' }}>
              <label style={{ display: 'block', fontSize: '0.78rem', color: '#FFFFFF', marginBottom: '8px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Username Admin
              </label>
              <div style={{ position: 'relative' }}>
                <User size={18} color="#D4A373" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
                <input
                  type="text"
                  value={loginUsername}
                  onChange={(e) => setLoginUsername(e.target.value)}
                  placeholder="Masukkan username"
                  required
                  autoFocus
                  style={{
                    width: '100%',
                    padding: '12px 14px 12px 42px',
                    borderRadius: '14px',
                    background: '#120804',
                    border: '1.5px solid rgba(201, 110, 40, 0.4)',
                    color: '#FFFFFF',
                    fontSize: '0.92rem',
                    outline: 'none',
                    transition: 'all 0.2s ease'
                  }}
                />
              </div>
            </div>

            <div style={{ marginBottom: '28px' }}>
              <label style={{ display: 'block', fontSize: '0.78rem', color: '#FFFFFF', marginBottom: '8px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Password Admin
              </label>
              <div style={{ position: 'relative' }}>
                <Lock size={18} color="#D4A373" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  placeholder="Masukkan password"
                  required
                  style={{
                    width: '100%',
                    padding: '12px 46px 12px 42px',
                    borderRadius: '14px',
                    background: '#120804',
                    border: '1.5px solid rgba(201, 110, 40, 0.4)',
                    color: '#FFFFFF',
                    fontSize: '0.92rem',
                    outline: 'none'
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute',
                    right: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    color: '#D4A373',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '4px'
                  }}
                >
                  {showPassword ? <EyeOff size={18} color="#D4A373" /> : <Eye size={18} color="#D4A373" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              style={{
                width: '100%',
                background: 'linear-gradient(135deg, #D97706 0%, #C96E28 100%)',
                color: '#FFFFFF',
                border: 'none',
                padding: '14px',
                borderRadius: '14px',
                fontWeight: '800',
                fontSize: '0.95rem',
                cursor: 'pointer',
                boxShadow: '0 8px 20px rgba(201, 110, 40, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                letterSpacing: '0.02em'
              }}
            >
              <span style={{ color: '#FFFFFF' }}>Masuk ke Dashboard CMS</span>
              <ArrowRight size={18} color="#FFFFFF" />
            </button>
          </form>
        </div>
      ) : (
        /* --- MAIN CMS DASHBOARD MODAL --- */
        <div
          className="cms-modal-container"
          style={{
            width: '100%',
            maxWidth: '1080px',
            maxHeight: '92vh',
            background: '#FAF6F0',
            borderRadius: '24px',
            border: '1px solid #E0D0BC',
            boxShadow: '0 25px 60px rgba(62, 35, 18, 0.25)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            color: '#3E2312'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Bar */}
          <div
            className="cms-header-bar"
            style={{
              padding: '20px 24px',
              background: 'linear-gradient(90deg, #3E2312 0%, #2C180B 100%)',
              borderBottom: '1px solid #E0D0BC',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '12px',
                  background: '#C96E28',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFF'
                }}
              >
                <Settings size={22} />
              </div>
              <div>
                <div style={{ fontSize: '1.2rem', fontWeight: '800', fontFamily: 'Fraunces, serif', color: '#FFF' }}>
                  CMS Admin Warkop 1001cc
                </div>
                <div style={{ fontSize: '0.78rem', color: '#E7DCCB', fontFamily: 'Space Mono, monospace' }}>
                  Pengaturan Konten Real-Time Tanpa Ubah Desain
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <button
                onClick={handleSaveAll}
                style={{
                  background: '#C96E28',
                  color: '#FFF',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '12px',
                  fontWeight: '700',
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 14px rgba(201, 110, 40, 0.35)'
                }}
              >
                <Save size={16} /> Simpan Perubahan
              </button>

              <button
                onClick={handleLogout}
                title="Keluar / Logout Admin"
                style={{
                  background: 'rgba(239, 68, 68, 0.15)',
                  color: '#EF4444',
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                  padding: '10px 14px',
                  borderRadius: '12px',
                  fontWeight: '700',
                  fontSize: '0.82rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <Lock size={15} /> Keluar
              </button>

              <button
                onClick={onClose}
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  color: '#FFF',
                  border: 'none',
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Toast Alert Banner */}
          {toastMessage && (
            <div
              style={{
                background: '#C96E28',
                color: '#FFF',
                padding: '10px 24px',
                fontSize: '0.85rem',
                fontWeight: '700',
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
            >
              <CheckCircle size={16} /> {toastMessage}
            </div>
          )}

          {/* CMS Body Layout: Left Sidebar + Right Form Panel */}
          <div className="cms-body-layout" style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
            {/* Left Navigation Tabs */}
            <div
              className="cms-sidebar-tabs"
              style={{
                width: '260px',
                background: '#EFE6D8',
                borderRight: '1px solid #E0D0BC',
                padding: '20px 14px',
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
                flexShrink: 0
              }}
            >
              <div className="cms-sidebar-tabs-title" style={{ fontSize: '0.72rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#665544', marginBottom: '8px', paddingLeft: '8px', fontFamily: 'Space Mono, monospace' }}>
                MODUL MANAJEMEN
              </div>

              <button
                onClick={() => { setActiveTab('siteInfo'); setEditingCategory(null); }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 14px',
                  borderRadius: '12px',
                  border: activeTab === 'siteInfo' ? '1px solid #C96E28' : '1px solid transparent',
                  background: activeTab === 'siteInfo' ? '#C96E28' : 'transparent',
                  color: activeTab === 'siteInfo' ? '#FFF' : '#3E2312',
                  fontWeight: '700',
                  fontSize: '0.86rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: activeTab === 'siteInfo' ? '0 4px 14px rgba(201, 110, 40, 0.3)' : 'none'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Store size={18} color={activeTab === 'siteInfo' ? '#FFF' : '#C96E28'} />
                  <span>Info Situs & Beranda</span>
                </div>
              </button>

              <button
                onClick={() => { setActiveTab('signatureMenu'); setEditingCategory(null); }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 14px',
                  borderRadius: '12px',
                  border: activeTab === 'signatureMenu' ? '1px solid #C96E28' : '1px solid transparent',
                  background: activeTab === 'signatureMenu' ? '#C96E28' : 'transparent',
                  color: activeTab === 'signatureMenu' ? '#FFF' : '#3E2312',
                  fontWeight: '700',
                  fontSize: '0.86rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: activeTab === 'signatureMenu' ? '0 4px 14px rgba(201, 110, 40, 0.3)' : 'none'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Coffee size={18} color={activeTab === 'signatureMenu' ? '#FFF' : '#C96E28'} />
                  <span>Menu Signature</span>
                </div>
                <span style={{ fontSize: '0.72rem', background: activeTab === 'signatureMenu' ? 'rgba(255,255,255,0.25)' : '#E0D0BC', color: activeTab === 'signatureMenu' ? '#FFF' : '#3E2312', padding: '2px 7px', borderRadius: '10px', fontWeight: '800' }}>
                  {formData.signatureMenu?.length || 0}
                </span>
              </button>

              <button
                onClick={() => { setActiveTab('events'); setEditingCategory(null); }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 14px',
                  borderRadius: '12px',
                  border: activeTab === 'events' ? '1px solid #C96E28' : '1px solid transparent',
                  background: activeTab === 'events' ? '#C96E28' : 'transparent',
                  color: activeTab === 'events' ? '#FFF' : '#3E2312',
                  fontWeight: '700',
                  fontSize: '0.86rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: activeTab === 'events' ? '0 4px 14px rgba(201, 110, 40, 0.3)' : 'none'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Calendar size={18} color={activeTab === 'events' ? '#FFF' : '#C96E28'} />
                  <span>Event & Agenda</span>
                </div>
                <span style={{ fontSize: '0.72rem', background: activeTab === 'events' ? 'rgba(255,255,255,0.25)' : '#E0D0BC', color: activeTab === 'events' ? '#FFF' : '#3E2312', padding: '2px 7px', borderRadius: '10px', fontWeight: '800' }}>
                  {formData.events?.length || 0}
                </span>
              </button>

              <button
                onClick={() => { setActiveTab('testimonials'); setEditingCategory(null); }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 14px',
                  borderRadius: '12px',
                  border: activeTab === 'testimonials' ? '1px solid #C96E28' : '1px solid transparent',
                  background: activeTab === 'testimonials' ? '#C96E28' : 'transparent',
                  color: activeTab === 'testimonials' ? '#FFF' : '#3E2312',
                  fontWeight: '700',
                  fontSize: '0.86rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: activeTab === 'testimonials' ? '0 4px 14px rgba(201, 110, 40, 0.3)' : 'none'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Star size={18} color={activeTab === 'testimonials' ? '#FFF' : '#C96E28'} />
                  <span>Testimoni Google</span>
                </div>
                <span style={{ fontSize: '0.72rem', background: activeTab === 'testimonials' ? 'rgba(255,255,255,0.25)' : '#E0D0BC', color: activeTab === 'testimonials' ? '#FFF' : '#3E2312', padding: '2px 7px', borderRadius: '10px', fontWeight: '800' }}>
                  {formData.testimonials?.length || 0}
                </span>
              </button>

              <button
                onClick={() => { setActiveTab('gallery'); setEditingCategory(null); }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 14px',
                  borderRadius: '12px',
                  border: activeTab === 'gallery' ? '1px solid #C96E28' : '1px solid transparent',
                  background: activeTab === 'gallery' ? '#C96E28' : 'transparent',
                  color: activeTab === 'gallery' ? '#FFF' : '#3E2312',
                  fontWeight: '700',
                  fontSize: '0.86rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: activeTab === 'gallery' ? '0 4px 14px rgba(201, 110, 40, 0.3)' : 'none'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Camera size={18} color={activeTab === 'gallery' ? '#FFF' : '#C96E28'} />
                  <span>Galeri Foto</span>
                </div>
                <span style={{ fontSize: '0.72rem', background: activeTab === 'gallery' ? 'rgba(255,255,255,0.25)' : '#E0D0BC', color: activeTab === 'gallery' ? '#FFF' : '#3E2312', padding: '2px 7px', borderRadius: '10px', fontWeight: '800' }}>
                  {formData.gallery?.length || 0}
                </span>
              </button>

              <button
                onClick={() => { setActiveTab('articles'); setEditingCategory(null); }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 14px',
                  borderRadius: '12px',
                  border: activeTab === 'articles' ? '1px solid #C96E28' : '1px solid transparent',
                  background: activeTab === 'articles' ? '#C96E28' : 'transparent',
                  color: activeTab === 'articles' ? '#FFF' : '#3E2312',
                  fontWeight: '700',
                  fontSize: '0.86rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: activeTab === 'articles' ? '0 4px 14px rgba(201, 110, 40, 0.3)' : 'none'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <FileText size={18} color={activeTab === 'articles' ? '#FFF' : '#C96E28'} />
                  <span>Artikel & Blog</span>
                </div>
                <span style={{ fontSize: '0.72rem', background: activeTab === 'articles' ? 'rgba(255,255,255,0.25)' : '#E0D0BC', color: activeTab === 'articles' ? '#FFF' : '#3E2312', padding: '2px 7px', borderRadius: '10px', fontWeight: '800' }}>
                  {formData.articles?.length || 0}
                </span>
              </button>

              <div className="cms-sidebar-actions" style={{ marginTop: 'auto', borderTop: '1px solid #E0D0BC', paddingTop: '14px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <button
                  onClick={exportCMSDataJSON}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 12px',
                    borderRadius: '10px',
                    background: '#FFFFFF',
                    border: '1px solid #E0D0BC',
                    color: '#3E2312',
                    fontSize: '0.78rem',
                    fontWeight: '700',
                    cursor: 'pointer'
                  }}
                >
                  <Download size={15} color="#C96E28" /> Ekspor Data JSON
                </button>

                <label
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 12px',
                    borderRadius: '10px',
                    background: '#FFFFFF',
                    border: '1px solid #E0D0BC',
                    color: '#3E2312',
                    fontSize: '0.78rem',
                    fontWeight: '700',
                    cursor: 'pointer'
                  }}
                >
                  <Upload size={15} color="#C96E28" /> Impor Data JSON
                  <input type="file" accept=".json" onChange={handleImportJSON} style={{ display: 'none' }} />
                </label>

                <button
                  onClick={handleReset}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 12px',
                    borderRadius: '10px',
                    background: 'rgba(239, 68, 68, 0.08)',
                    border: '1px solid rgba(239, 68, 68, 0.25)',
                    color: '#DC2626',
                    fontSize: '0.78rem',
                    fontWeight: '700',
                    cursor: 'pointer'
                  }}
                >
                  <RotateCcw size={15} /> Reset ke Default
                </button>
              </div>
            </div>

            {/* Right Editing Content Area */}
            <div className="cms-content-panel" style={{ flex: 1, padding: '24px 28px', overflowY: 'auto', background: '#FAF6F0' }}>
              {/* Top Stat Metrics Banner (shadcn Dashboard Pattern - LP Warm Theme) */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '14px', marginBottom: '24px' }}>
                <div style={{ background: '#FFFFFF', border: '1px solid #E0D0BC', borderRadius: '14px', padding: '14px 16px', boxShadow: '0 4px 14px rgba(62, 35, 18, 0.05)' }}>
                  <div style={{ fontSize: '0.74rem', color: '#665544', textTransform: 'uppercase', fontWeight: '700', letterSpacing: '0.05em', marginBottom: '4px' }}>
                    Menu Signature
                  </div>
                  <div style={{ fontSize: '1.4rem', fontWeight: '900', color: '#C96E28', fontFamily: 'Fraunces, serif', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Coffee size={20} /> {formData.signatureMenu?.length || 0} Varian
                  </div>
                </div>

                <div style={{ background: '#FFFFFF', border: '1px solid #E0D0BC', borderRadius: '14px', padding: '14px 16px', boxShadow: '0 4px 14px rgba(62, 35, 18, 0.05)' }}>
                  <div style={{ fontSize: '0.74rem', color: '#665544', textTransform: 'uppercase', fontWeight: '700', letterSpacing: '0.05em', marginBottom: '4px' }}>
                    Event & Agenda
                  </div>
                  <div style={{ fontSize: '1.4rem', fontWeight: '900', color: '#C96E28', fontFamily: 'Fraunces, serif', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Calendar size={20} /> {formData.events?.length || 0} Event
                  </div>
                </div>

                <div style={{ background: '#FFFFFF', border: '1px solid #E0D0BC', borderRadius: '14px', padding: '14px 16px', boxShadow: '0 4px 14px rgba(62, 35, 18, 0.05)' }}>
                  <div style={{ fontSize: '0.74rem', color: '#665544', textTransform: 'uppercase', fontWeight: '700', letterSpacing: '0.05em', marginBottom: '4px' }}>
                    Rating Google
                  </div>
                  <div style={{ fontSize: '1.4rem', fontWeight: '900', color: '#C96E28', fontFamily: 'Fraunces, serif', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Star size={20} fill="#C96E28" color="#C96E28" /> {formData.siteInfo?.googleRating || '4.8'} / 5.0
                  </div>
                </div>

                <div style={{ background: '#FFFFFF', border: '1px solid #E0D0BC', borderRadius: '14px', padding: '14px 16px', boxShadow: '0 4px 14px rgba(62, 35, 18, 0.05)' }}>
                  <div style={{ fontSize: '0.74rem', color: '#665544', textTransform: 'uppercase', fontWeight: '700', letterSpacing: '0.05em', marginBottom: '4px' }}>
                    Galeri Foto
                  </div>
                  <div style={{ fontSize: '1.4rem', fontWeight: '900', color: '#C96E28', fontFamily: 'Fraunces, serif', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Camera size={20} /> {formData.gallery?.length || 0} Momen
                  </div>
                </div>
              </div>

              {/* 1. TAB SITE INFO */}
              {activeTab === 'siteInfo' && (
                <div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '16px', color: '#2C180B', fontFamily: 'Fraunces, serif' }}>
                    Informasi Utama Situs & Teks Beranda
                  </h3>

                  {/* Admin Credential Change Card */}
                  <div style={{ background: '#1F1008', padding: '16px 20px', borderRadius: '16px', border: '1px solid rgba(201, 110, 40, 0.4)', boxShadow: '0 4px 14px rgba(0, 0, 0, 0.2)', marginBottom: '24px' }}>
                    <div style={{ fontSize: '0.92rem', fontWeight: '800', color: '#D97706', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Lock size={16} color="#D97706" /> Keamanan & Akun Login CMS Admin
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.78rem', color: '#FFFFFF', marginBottom: '4px', fontWeight: 'bold' }}>Username Login Admin</label>
                        <input
                          type="text"
                          value={formData.siteInfo.adminUsername || 'admin'}
                          onChange={(e) => handleSiteInfoChange('adminUsername', e.target.value)}
                          style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', background: '#120804', border: '1px solid rgba(201, 110, 40, 0.4)', color: '#FFFFFF' }}
                        />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.78rem', color: '#FFFFFF', marginBottom: '4px', fontWeight: 'bold' }}>Password Login Admin</label>
                        <input
                          type="text"
                          value={formData.siteInfo.adminPassword || 'warkop1001'}
                          onChange={(e) => handleSiteInfoChange('adminPassword', e.target.value)}
                          style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', background: '#120804', border: '1px solid rgba(201, 110, 40, 0.4)', color: '#FFFFFF' }}
                        />
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginBottom: '20px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', color: '#3E2312', marginBottom: '6px', fontWeight: 'bold' }}>Nama Brand</label>
                      <input
                        type="text"
                        value={formData.siteInfo.brandName}
                        onChange={(e) => handleSiteInfoChange('brandName', e.target.value)}
                        style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', background: '#FFFFFF', border: '1.5px solid #E0D0BC', color: '#2C180B', boxShadow: '0 2px 6px rgba(62, 35, 18, 0.04)' }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', color: '#3E2312', marginBottom: '6px', fontWeight: 'bold' }}>Sub-Tagline (Eyebrow)</label>
                      <input
                        type="text"
                        value={formData.siteInfo.eyebrow}
                        onChange={(e) => handleSiteInfoChange('eyebrow', e.target.value)}
                        style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', background: '#FFFFFF', border: '1.5px solid #E0D0BC', color: '#2C180B', boxShadow: '0 2px 6px rgba(62, 35, 18, 0.04)' }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginBottom: '20px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', color: '#3E2312', marginBottom: '6px', fontWeight: 'bold' }}>Judul Utama Hero (Baris 1)</label>
                      <input
                        type="text"
                        value={formData.siteInfo.heroTitleLine1}
                        onChange={(e) => handleSiteInfoChange('heroTitleLine1', e.target.value)}
                        style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', background: '#FFFFFF', border: '1.5px solid #E0D0BC', color: '#2C180B', boxShadow: '0 2px 6px rgba(62, 35, 18, 0.04)' }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', color: '#3E2312', marginBottom: '6px', fontWeight: 'bold' }}>Judul Utama Hero (Baris 2 Accent)</label>
                      <input
                        type="text"
                        value={formData.siteInfo.heroTitleLine2}
                        onChange={(e) => handleSiteInfoChange('heroTitleLine2', e.target.value)}
                        style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', background: '#FFFFFF', border: '1.5px solid #E0D0BC', color: '#2C180B', boxShadow: '0 2px 6px rgba(62, 35, 18, 0.04)' }}
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: '#3E2312', marginBottom: '6px', fontWeight: 'bold' }}>Deskripsi Utama (Hero Lead Text)</label>
                    <textarea
                      rows={3}
                      value={formData.siteInfo.heroLead}
                      onChange={(e) => handleSiteInfoChange('heroLead', e.target.value)}
                      style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', background: '#FFFFFF', border: '1.5px solid #E0D0BC', color: '#2C180B', lineHeight: '1.5', boxShadow: '0 2px 6px rgba(62, 35, 18, 0.04)' }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginBottom: '20px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', color: '#3E2312', marginBottom: '6px', fontWeight: 'bold' }}>Nomor WhatsApp (Display)</label>
                      <input
                        type="text"
                        value={formData.siteInfo.phoneWA}
                        onChange={(e) => handleSiteInfoChange('phoneWA', e.target.value)}
                        style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', background: '#FFFFFF', border: '1.5px solid #E0D0BC', color: '#2C180B', boxShadow: '0 2px 6px rgba(62, 35, 18, 0.04)' }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', color: '#3E2312', marginBottom: '6px', fontWeight: 'bold' }}>Nomor WA Raw (format: 628xxxx)</label>
                      <input
                        type="text"
                        value={formData.siteInfo.waNumberRaw}
                        onChange={(e) => handleSiteInfoChange('waNumberRaw', e.target.value)}
                        style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', background: '#FFFFFF', border: '1.5px solid #E0D0BC', color: '#2C180B', boxShadow: '0 2px 6px rgba(62, 35, 18, 0.04)' }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginBottom: '20px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', color: '#3E2312', marginBottom: '6px', fontWeight: 'bold' }}>Alamat Warkop</label>
                      <input
                        type="text"
                        value={formData.siteInfo.address}
                        onChange={(e) => handleSiteInfoChange('address', e.target.value)}
                        style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', background: '#FFFFFF', border: '1.5px solid #E0D0BC', color: '#2C180B', boxShadow: '0 2px 6px rgba(62, 35, 18, 0.04)' }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', color: '#3E2312', marginBottom: '6px', fontWeight: 'bold' }}>Jam Operasional</label>
                      <input
                        type="text"
                        value={formData.siteInfo.hours}
                        onChange={(e) => handleSiteInfoChange('hours', e.target.value)}
                        style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', background: '#FFFFFF', border: '1.5px solid #E0D0BC', color: '#2C180B', boxShadow: '0 2px 6px rgba(62, 35, 18, 0.04)' }}
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: '#3E2312', marginBottom: '6px', fontWeight: 'bold' }}>Kisah Sejarah Warkop (Bagian 1)</label>
                    <textarea
                      rows={3}
                      value={formData.siteInfo.aboutStoryPart1}
                      onChange={(e) => handleSiteInfoChange('aboutStoryPart1', e.target.value)}
                      style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', background: '#FFFFFF', border: '1.5px solid #E0D0BC', color: '#2C180B', lineHeight: '1.5', boxShadow: '0 2px 6px rgba(62, 35, 18, 0.04)' }}
                    />
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: '#3E2312', marginBottom: '6px', fontWeight: 'bold' }}>Kisah Sejarah Warkop (Bagian 2)</label>
                    <textarea
                      rows={3}
                      value={formData.siteInfo.aboutStoryPart2}
                      onChange={(e) => handleSiteInfoChange('aboutStoryPart2', e.target.value)}
                      style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', background: '#FFFFFF', border: '1.5px solid #E0D0BC', color: '#2C180B', lineHeight: '1.5', boxShadow: '0 2px 6px rgba(62, 35, 18, 0.04)' }}
                    />
                  </div>

                  {/* About Warkop Main Photo Upload */}
                  <div style={{ background: '#FAF6F0', padding: '16px', borderRadius: '14px', border: '1.5px dashed #C96E28', marginBottom: '20px' }}>
                    <label style={{ display: 'block', fontSize: '0.82rem', color: '#C96E28', marginBottom: '10px', fontWeight: '800' }}>
                      📸 Foto Utama Warkop (Tentang 1001cc)
                    </label>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
                      {formData.siteInfo.aboutImage && (
                        <img
                          src={formData.siteInfo.aboutImage}
                          alt="Foto Utama Warkop"
                          style={{ width: '100px', height: '70px', objectFit: 'cover', borderRadius: '10px', border: '2px solid #C96E28' }}
                        />
                      )}
                      <label
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '8px',
                          padding: '10px 16px',
                          borderRadius: '10px',
                          background: '#C96E28',
                          color: '#FFFFFF',
                          fontSize: '0.84rem',
                          fontWeight: '700',
                          cursor: 'pointer',
                          boxShadow: '0 4px 14px rgba(201, 110, 40, 0.3)'
                        }}
                      >
                        <Upload size={16} color="#FFFFFF" /> Unggah Foto Utama Warkop
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleImageFileUpload(e, 'aboutImage')}
                          style={{ display: 'none' }}
                        />
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {/* LIST OR ITEM EDITOR FOR OTHER TABS */}
              {activeTab !== 'siteInfo' && !editingCategory && (
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <h3 style={{ fontSize: '1.2rem', color: '#2C180B', fontFamily: 'Fraunces, serif', margin: 0 }}>
                      Kelola Data {activeTab.toUpperCase()} ({formData[activeTab]?.length || 0} Item)
                    </h3>

                    <button
                      onClick={() => handleOpenItemEditor(activeTab)}
                      style={{
                        background: '#C96E28',
                        color: '#FFF',
                        border: 'none',
                        padding: '8px 16px',
                        borderRadius: '10px',
                        fontWeight: '700',
                        fontSize: '0.85rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        boxShadow: '0 4px 14px rgba(201, 110, 40, 0.3)'
                      }}
                    >
                      <Plus size={16} /> Tambah Item Baru
                    </button>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {formData[activeTab]?.map((item, idx) => (
                      <div
                        key={item.id || idx}
                        style={{
                          background: '#FFFFFF',
                          padding: '16px',
                          borderRadius: '14px',
                          border: '1px solid #E0D0BC',
                          boxShadow: '0 4px 14px rgba(62, 35, 18, 0.05)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: '16px'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                          {item.image || item.glassImage ? (
                            <img
                              src={item.image || item.glassImage}
                              alt=""
                              style={{ width: '48px', height: '48px', objectFit: 'cover', borderRadius: '8px', border: '1px solid #E0D0BC' }}
                            />
                          ) : (
                            <div style={{ width: '48px', height: '48px', borderRadius: '8px', background: '#FAF6F0', border: '1px solid #E0D0BC', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#C96E28', fontWeight: 'bold' }}>
                              #{idx + 1}
                            </div>
                          )}

                          <div>
                            <div style={{ fontWeight: '700', fontSize: '1rem', color: '#2C180B' }}>
                              {item.name || item.title}
                            </div>
                            <div style={{ fontSize: '0.78rem', color: '#665544', marginTop: '2px' }}>
                              {item.category || item.role || item.status}
                            </div>
                          </div>
                        </div>

                        <div style={{ display: 'flex', gap: '8px' }}>
                          <button
                            onClick={() => handleOpenItemEditor(activeTab, idx)}
                            style={{
                              background: '#FAF6F0',
                              color: '#3E2312',
                              border: '1px solid #E0D0BC',
                              padding: '8px 12px',
                              borderRadius: '8px',
                              cursor: 'pointer',
                              fontSize: '0.8rem',
                              fontWeight: '700',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '4px'
                            }}
                          >
                            <Edit2 size={14} color="#C96E28" /> Edit
                          </button>

                          <button
                            onClick={() => handleDeleteItem(activeTab, idx)}
                            style={{
                              background: 'rgba(239, 68, 68, 0.08)',
                              color: '#DC2626',
                              border: '1px solid rgba(239, 68, 68, 0.25)',
                              padding: '8px 12px',
                              borderRadius: '8px',
                              cursor: 'pointer',
                              fontSize: '0.8rem',
                              fontWeight: '700',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '4px'
                            }}
                          >
                            <Trash2 size={14} /> Hapus
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ITEM EDIT FORM MODAL INLINE */}
              {editingCategory && (
                <div style={{ background: '#FFFFFF', padding: '24px', borderRadius: '16px', border: '1px solid #E0D0BC', boxShadow: '0 4px 20px rgba(62, 35, 18, 0.08)' }}>
                  <h3 style={{ fontSize: '1.1rem', color: '#C96E28', marginBottom: '18px', fontFamily: 'Fraunces, serif' }}>
                    {activeItemIndex !== null ? 'Edit Item' : 'Tambah Item Baru'} ({editingCategory.toUpperCase()})
                  </h3>

                  {/* Media / Photo Upload Section */}
                  <div style={{ background: '#FAF6F0', padding: '16px', borderRadius: '14px', border: '1.5px dashed #C96E28', marginBottom: '20px' }}>
                    <label style={{ display: 'block', fontSize: '0.82rem', color: '#C96E28', marginBottom: '10px', fontWeight: '800' }}>
                      📸 Media & Foto Item
                    </label>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
                      {/* Preview Thumbnail */}
                      {(itemForm.image || itemForm.glassImage || itemForm.avatar) ? (
                        <div style={{ position: 'relative' }}>
                          <img
                            src={itemForm.image || itemForm.glassImage || itemForm.avatar}
                            alt="Preview Foto"
                            style={{ width: '90px', height: '90px', objectFit: 'cover', borderRadius: '12px', border: '2px solid #C96E28', boxShadow: '0 4px 12px rgba(62, 35, 18, 0.15)' }}
                          />
                          <button
                            type="button"
                            onClick={() => setItemForm(prev => ({ ...prev, image: '', glassImage: '', avatar: '' }))}
                            style={{
                              position: 'absolute',
                              top: '-6px',
                              right: '-6px',
                              background: '#DC2626',
                              color: '#FFFFFF',
                              border: 'none',
                              borderRadius: '50%',
                              width: '22px',
                              height: '22px',
                              cursor: 'pointer',
                              fontSize: '11px',
                              fontWeight: 'bold',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              boxShadow: '0 2px 6px rgba(0,0,0,0.3)'
                            }}
                            title="Hapus foto item ini"
                          >
                            ✕
                          </button>
                          <div style={{ fontSize: '0.68rem', textAlign: 'center', color: '#665544', marginTop: '4px', fontWeight: 'bold' }}>Pratinjau</div>
                        </div>
                      ) : (
                        <div style={{ width: '90px', height: '90px', borderRadius: '12px', background: '#E0D0BC', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#665544', fontSize: '0.72rem', fontWeight: 'bold' }}>
                          <Camera size={24} color="#C96E28" />
                          <span>Belum Ada</span>
                        </div>
                      )}

                      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '10px', minWidth: '220px' }}>
                        {/* File Upload Button */}
                        <div>
                          <label
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '8px',
                              padding: '10px 16px',
                              borderRadius: '10px',
                              background: '#C96E28',
                              color: '#FFFFFF',
                              fontSize: '0.84rem',
                              fontWeight: '700',
                              cursor: 'pointer',
                              boxShadow: '0 4px 14px rgba(201, 110, 40, 0.3)'
                            }}
                          >
                            <Upload size={16} color="#FFFFFF" /> Unggah Foto dari Perangkat
                            <input
                              type="file"
                              accept="image/*"
                              onChange={(e) => handleImageFileUpload(e, editingCategory === 'signatureMenu' ? 'glassImage' : (editingCategory === 'testimonials' ? 'avatar' : 'image'))}
                              style={{ display: 'none' }}
                            />
                          </label>
                        </div>

                        {/* Or Paste Image URL */}
                        <div>
                          <label style={{ display: 'block', fontSize: '0.74rem', color: '#665544', marginBottom: '4px', fontWeight: 'bold' }}>Atau Masukkan URL Gambar / Path Asset:</label>
                          <input
                            type="text"
                            value={itemForm.image || itemForm.glassImage || itemForm.avatar || ''}
                            onChange={(e) => setItemForm(prev => ({
                              ...prev,
                              image: e.target.value,
                              glassImage: e.target.value,
                              avatar: e.target.value
                            }))}
                            placeholder="https://... atau /assets/foto.jpg"
                            style={{ width: '100%', padding: '8px 12px', borderRadius: '8px', background: '#FFFFFF', border: '1.5px solid #E0D0BC', color: '#2C180B', fontSize: '0.82rem' }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginBottom: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', color: '#3E2312', marginBottom: '4px', fontWeight: 'bold' }}>Nama / Judul Item</label>
                      <input
                        type="text"
                        value={itemForm.name || itemForm.title || ''}
                        onChange={(e) => setItemForm(prev => ({ ...prev, name: e.target.value, title: e.target.value }))}
                        style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', background: '#FFFFFF', border: '1.5px solid #E0D0BC', color: '#2C180B' }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', color: '#3E2312', marginBottom: '4px', fontWeight: 'bold' }}>Kategori / Tag</label>
                      <input
                        type="text"
                        value={itemForm.category || itemForm.tag || ''}
                        onChange={(e) => setItemForm(prev => ({ ...prev, category: e.target.value, tag: e.target.value }))}
                        style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', background: '#FFFFFF', border: '1.5px solid #E0D0BC', color: '#2C180B' }}
                      />
                    </div>
                  </div>

                  {/* Conditional Fields based on Category */}
                  {editingCategory === 'signatureMenu' && (
                    <>
                      <div style={{ marginBottom: '16px' }}>
                        <label style={{ display: 'block', fontSize: '0.8rem', color: '#3E2312', marginBottom: '4px', fontWeight: 'bold' }}>Headline Promosi Menu</label>
                        <input
                          type="text"
                          value={itemForm.headline || ''}
                          onChange={(e) => setItemForm(prev => ({ ...prev, headline: e.target.value }))}
                          style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', background: '#FFFFFF', border: '1.5px solid #E0D0BC', color: '#2C180B' }}
                        />
                      </div>

                      <div style={{ marginBottom: '16px' }}>
                        <label style={{ display: 'block', fontSize: '0.8rem', color: '#3E2312', marginBottom: '4px', fontWeight: 'bold' }}>Deskripsi Teks Menu</label>
                        <textarea
                          rows={4}
                          value={itemForm.descText || ''}
                          onChange={(e) => setItemForm(prev => ({ ...prev, descText: e.target.value }))}
                          style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', background: '#FFFFFF', border: '1.5px solid #E0D0BC', color: '#2C180B', lineHeight: '1.5' }}
                        />
                      </div>
                    </>
                  )}

                  {editingCategory === 'events' && (
                    <>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginBottom: '16px' }}>
                        <div>
                          <label style={{ display: 'block', fontSize: '0.8rem', color: '#3E2312', marginBottom: '4px', fontWeight: 'bold' }}>Tanggal & Waktu Event</label>
                          <input
                            type="text"
                            value={itemForm.date || ''}
                            onChange={(e) => setItemForm(prev => ({ ...prev, date: e.target.value }))}
                            style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', background: '#FFFFFF', border: '1.5px solid #E0D0BC', color: '#2C180B' }}
                          />
                        </div>

                        <div>
                          <label style={{ display: 'block', fontSize: '0.8rem', color: '#3E2312', marginBottom: '4px', fontWeight: 'bold' }}>Lokasi Event</label>
                          <input
                            type="text"
                            value={itemForm.location || ''}
                            onChange={(e) => setItemForm(prev => ({ ...prev, location: e.target.value }))}
                            style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', background: '#FFFFFF', border: '1.5px solid #E0D0BC', color: '#2C180B' }}
                          />
                        </div>
                      </div>

                      <div style={{ marginBottom: '16px' }}>
                        <label style={{ display: 'block', fontSize: '0.8rem', color: '#3E2312', marginBottom: '4px', fontWeight: 'bold' }}>Deskripsi Event</label>
                        <textarea
                          rows={3}
                          value={itemForm.desc || ''}
                          onChange={(e) => setItemForm(prev => ({ ...prev, desc: e.target.value }))}
                          style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', background: '#FFFFFF', border: '1.5px solid #E0D0BC', color: '#2C180B' }}
                        />
                      </div>
                    </>
                  )}

                  {editingCategory === 'testimonials' && (
                    <div style={{ marginBottom: '16px' }}>
                      <label style={{ display: 'block', fontSize: '0.8rem', color: '#3E2312', marginBottom: '4px', fontWeight: 'bold' }}>Isi Komentar Review</label>
                      <textarea
                        rows={3}
                        value={itemForm.comment || ''}
                        onChange={(e) => setItemForm(prev => ({ ...prev, comment: e.target.value }))}
                        style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', background: '#FFFFFF', border: '1.5px solid #E0D0BC', color: '#2C180B' }}
                      />
                    </div>
                  )}

                  {/* Form Action Buttons */}
                  <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end', marginTop: '20px' }}>
                    <button
                      onClick={() => setEditingCategory(null)}
                      style={{
                        background: '#FAF6F0',
                        color: '#3E2312',
                        border: '1px solid #E0D0BC',
                        padding: '10px 18px',
                        borderRadius: '10px',
                        fontWeight: '700',
                        cursor: 'pointer'
                      }}
                    >
                      Batal
                    </button>

                    <button
                      onClick={handleSaveItem}
                      style={{
                        background: '#C96E28',
                        color: '#FFF',
                        border: 'none',
                        padding: '10px 20px',
                        borderRadius: '10px',
                        fontWeight: '700',
                        cursor: 'pointer',
                        boxShadow: '0 4px 14px rgba(201, 110, 40, 0.3)'
                      }}
                    >
                      Simpan Item
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
