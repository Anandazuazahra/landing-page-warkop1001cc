import React, { useState } from 'react';
import { X, Calendar, Check } from 'lucide-react';

export default function ContactModal({ isOpen, onClose, onSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    guests: '2',
    dateTime: '',
    purpose: 'Nongkrong Santai',
    whatsapp: ''
  });
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate booking process
    setTimeout(() => {
      setLoading(false);
      onSuccess(formData.name, formData.guests);
      onClose();
      // Reset form
      setFormData({
        name: '',
        guests: '2',
        dateTime: '',
        purpose: 'Nongkrong Santai',
        whatsapp: ''
      });
    }, 1000);
  };

  return (
    <div className={`modal-backdrop ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className="modal-content animate-fade-up" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Tutup">
          <X size={20} />
        </button>
        
        <div className="modal-header">
          <h3>Reservasi Tempat & Meja</h3>
          <p>Butuh meja khusus untuk meeting kerja, nonton bareng, atau kumpul komunitas? Isi form di bawah ini.</p>
        </div>

        <form className="modal-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nama Lengkap</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input"
              placeholder="Contoh: Farhan Syah"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div>
              <label htmlFor="guests">Jumlah Orang</label>
              <select
                id="guests"
                name="guests"
                className="form-input"
                style={{ appearance: 'none', WebkitAppearance: 'none' }}
                value={formData.guests}
                onChange={handleChange}
              >
                <option value="1-2">1 - 2 Orang</option>
                <option value="3-5">3 - 5 Orang</option>
                <option value="6-10">6 - 10 Orang</option>
                <option value=">10">Lebih dari 10 Orang</option>
              </select>
            </div>
            <div>
              <label htmlFor="purpose">Tujuan Acara</label>
              <select
                id="purpose"
                name="purpose"
                className="form-input"
                style={{ appearance: 'none', WebkitAppearance: 'none' }}
                value={formData.purpose}
                onChange={handleChange}
              >
                <option value="Nongkrong Santai">Nongkrong Santai</option>
                <option value="Meeting Kerja">Meeting Kerja (WFC)</option>
                <option value="Ulang Tahun">Acara Ulang Tahun</option>
                <option value="Kumpul Komunitas">Kumpul Komunitas</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="dateTime">Tanggal & Jam Datang</label>
            <input
              type="datetime-local"
              id="dateTime"
              name="dateTime"
              className="form-input"
              required
              value={formData.dateTime}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="whatsapp">Nomor WhatsApp Aktif</label>
            <input
              type="tel"
              id="whatsapp"
              name="whatsapp"
              className="form-input"
              placeholder="Contoh: 081234567890"
              required
              value={formData.whatsapp}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn-submit" disabled={loading}>
            {loading ? 'Mengirim Permohonan...' : 'Ajukan Reservasi Meja'}
          </button>
        </form>
      </div>
    </div>
  );
}
