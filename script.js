// Warkop 1001cc — Minimal Vanilla JavaScript Logic (No Animations)

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Drawer Toggle
  const burgerBtn = document.getElementById('mobile-menu-burger');
  const drawer = document.getElementById('mobile-nav-drawer-menu');
  if (burgerBtn && drawer) {
    burgerBtn.addEventListener('click', () => {
      drawer.classList.toggle('open');
      const isOpen = drawer.classList.contains('open');
      burgerBtn.innerHTML = isOpen 
        ? `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg>`
        : `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>`;
    });
  }

  // 2. Close mobile drawer on navigation click
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (drawer && drawer.classList.contains('open')) {
        drawer.classList.remove('open');
        burgerBtn.innerHTML = `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>`;
      }
    });
  });

  // 3. Scroll Spy (Highlight active navigation links on scroll)
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.navlinks a');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  const spyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        
        // Update desktop nav
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });

        // Update mobile drawer nav
        mobileNavLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, { threshold: 0.25, rootMargin: '-10% 0px -50% 0px' });

  sections.forEach(sec => spyObserver.observe(sec));

  // 4. Click to Zoom Event Flyer (Dynamic Lightbox)
  document.querySelectorAll('.event-card img').forEach(img => {
    img.addEventListener('click', () => {
      const src = img.getAttribute('src');
      const alt = img.getAttribute('alt') || 'Flyer Detail';
      
      // Create lightbox backdrop
      const backdrop = document.createElement('div');
      backdrop.className = 'lightbox-backdrop';
      backdrop.style.cursor = 'zoom-out';
      
      // Create content container
      const content = document.createElement('div');
      content.className = 'lightbox-content';
      content.style.position = 'relative';
      content.style.width = 'auto';
      content.style.maxWidth = '90%';
      content.style.maxHeight = '90vh';
      content.style.display = 'flex';
      content.style.justifyContent = 'center';
      content.style.alignItems = 'center';
      
      // Prevent closing when clicking the image itself
      content.addEventListener('click', (e) => e.stopPropagation());
      
      // Create image element
      const zoomImg = document.createElement('img');
      zoomImg.setAttribute('src', src);
      zoomImg.setAttribute('alt', alt);
      zoomImg.className = 'lightbox-img-fade';
      zoomImg.style.maxWidth = '100%';
      zoomImg.style.maxHeight = '88vh';
      zoomImg.style.borderRadius = '12px';
      zoomImg.style.boxShadow = '0 20px 50px rgba(0,0,0,0.5)';
      zoomImg.style.objectFit = 'contain';
      
      // Create close button
      const closeBtn = document.createElement('button');
      closeBtn.className = 'modal-close';
      closeBtn.style.top = '-20px';
      closeBtn.style.right = '-20px';
      closeBtn.style.background = 'rgba(0,0,0,0.6)';
      closeBtn.style.color = '#FFFFFF';
      closeBtn.style.borderRadius = '50%';
      closeBtn.style.width = '36px';
      closeBtn.style.height = '36px';
      closeBtn.style.display = 'flex';
      closeBtn.style.alignItems = 'center';
      closeBtn.style.justifyContent = 'center';
      closeBtn.style.border = 'none';
      closeBtn.style.cursor = 'pointer';
      closeBtn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" x2="6" y1="6" y2="18" /><line x1="6" x2="18" y1="6" y2="18" /></svg>`;
      
      closeBtn.addEventListener('click', () => {
        backdrop.style.opacity = '0';
        setTimeout(() => backdrop.remove(), 250);
      });
      
      backdrop.addEventListener('click', () => {
        backdrop.style.opacity = '0';
        setTimeout(() => backdrop.remove(), 250);
      });
      
      // Append children
      content.appendChild(zoomImg);
      content.appendChild(closeBtn);
      backdrop.appendChild(content);
      document.body.appendChild(backdrop);
      document.body.style.overflow = 'hidden';
      
      // Handle ESC key to close
      const escHandler = (e) => {
        if (e.key === 'Escape') {
          backdrop.style.opacity = '0';
          setTimeout(() => {
            backdrop.remove();
            document.body.style.overflow = '';
          }, 250);
          document.removeEventListener('keydown', escHandler);
        }
      };
      document.addEventListener('keydown', escHandler);
      
      // Cleanup overflow on remove
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          mutation.removedNodes.forEach((node) => {
            if (node === backdrop) {
              document.body.style.overflow = '';
              observer.disconnect();
            }
          });
        });
      });
      observer.observe(document.body, { childList: true });
    });
  });
});

// 3. Modals Management
window.openReservationModal = function() {
  const backdrop = document.getElementById('reservation-modal');
  if (backdrop) {
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
};

window.closeReservationModal = function() {
  const backdrop = document.getElementById('reservation-modal');
  if (backdrop) {
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }
};

// 4. Handle Reservation Submission to WhatsApp
window.handleReservationSubmit = function(event) {
  event.preventDefault();
  const name = document.getElementById('res-name').value;
  const phone = document.getElementById('res-phone').value;
  const date = document.getElementById('res-date').value;
  const guests = document.getElementById('res-guests').value;
  const note = document.getElementById('res-note').value;

  closeReservationModal();

  const waMessage = `Halo Warkop 1001cc, saya ingin reservasi tempat:\nNama: ${name}\nNo WA/Telp: ${phone}\nTanggal & Waktu: ${date}\nJumlah Orang: ${guests}\nCatatan: ${note || '-'}`;
  const waNumberRaw = '6288289277876';
  
  window.open(`https://wa.me/${waNumberRaw}?text=${encodeURIComponent(waMessage)}`, '_blank');
};

// 5. Direct WhatsApp Redirection Functions
const WA_NUMBER = '6288289277876';

window.redirectToWhatsAppReservation = function() {
  const message = 'Halo Warkop 1001cc, saya ingin reservasi tempat di warkop 1001cc';
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
};

window.redirectToWhatsAppEvent = function(eventName) {
  const message = `Halo Warkop 1001cc, saya ingin mengikuti event ini: ${eventName}`;
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
};
