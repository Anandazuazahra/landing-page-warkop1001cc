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
