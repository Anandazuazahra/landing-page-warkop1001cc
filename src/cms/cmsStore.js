import { useState, useEffect } from 'react';
import { DEFAULT_CMS_DATA } from './defaultData';

const STORAGE_KEY = 'warkop_1001cc_cms_data';
const CMS_EVENT = 'warkop_cms_update';

/**
 * Retrieve local cached CMS data or fallback to defaults
 */
export function getCMSData() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return DEFAULT_CMS_DATA;
    const parsed = JSON.parse(stored);
    
    return {
      siteInfo: { ...DEFAULT_CMS_DATA.siteInfo, ...(parsed.siteInfo || {}) },
      signatureMenu: parsed.signatureMenu || DEFAULT_CMS_DATA.signatureMenu,
      events: parsed.events || DEFAULT_CMS_DATA.events,
      testimonials: parsed.testimonials || DEFAULT_CMS_DATA.testimonials,
      gallery: parsed.gallery || DEFAULT_CMS_DATA.gallery,
      articles: parsed.articles || DEFAULT_CMS_DATA.articles
    };
  } catch (err) {
    console.error('Failed to parse CMS data from localStorage:', err);
    return DEFAULT_CMS_DATA;
  }
}

/**
 * Save CMS data to localStorage and sync to VPS API server
 */
export async function saveCMSData(data) {
  try {
    // 1. Save to local storage & dispatch local event immediately
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    window.dispatchEvent(new CustomEvent(CMS_EVENT, { detail: data }));

    // 2. Sync to VPS backend API (/api/cms)
    fetch('/api/cms', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).catch((err) => console.warn('VPS API Sync notice:', err.message));

    return true;
  } catch (err) {
    console.error('Failed to save CMS data:', err);
    return false;
  }
}

/**
 * Reset CMS data back to factory defaults
 */
export async function resetCMSData() {
  localStorage.removeItem(STORAGE_KEY);
  window.dispatchEvent(new CustomEvent(CMS_EVENT, { detail: DEFAULT_CMS_DATA }));
  
  fetch('/api/cms', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(DEFAULT_CMS_DATA)
  }).catch(() => {});

  return DEFAULT_CMS_DATA;
}

/**
 * Export CMS Data as JSON string download
 */
export function exportCMSDataJSON() {
  const data = getCMSData();
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", `warkop1001cc_cms_backup_${new Date().toISOString().slice(0, 10)}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}

/**
 * Custom React Hook to consume live CMS data with VPS server sync & polling
 */
export function useCMSData() {
  const [data, setData] = useState(() => getCMSData());

  useEffect(() => {
    // Fetch initial data from VPS API
    const fetchServerData = async () => {
      try {
        const res = await fetch('/api/cms');
        if (res.ok) {
          const serverData = await res.json();
          if (serverData && serverData.siteInfo) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(serverData));
            setData(serverData);
          }
        }
      } catch (err) {
        // Silently fallback to localStorage cache
      }
    };

    fetchServerData();

    // Listen for local updates
    const handleUpdate = () => {
      setData(getCMSData());
    };

    window.addEventListener(CMS_EVENT, handleUpdate);
    window.addEventListener('storage', handleUpdate);

    // Poll server every 10 seconds for real-time changes across visitors
    const interval = setInterval(fetchServerData, 10000);

    return () => {
      window.removeEventListener(CMS_EVENT, handleUpdate);
      window.removeEventListener('storage', handleUpdate);
      clearInterval(interval);
    };
  }, []);

  return {
    cmsData: data,
    updateCMSData: (newData) => saveCMSData(newData),
    resetCMSData: () => resetCMSData()
  };
}
