document.addEventListener('DOMContentLoaded', function() {

  // ===== ACCESSORY DATA =====
  const accessories = [
    {
      name: 'Iphone Chargers',
      images: [
        '20260619_032421.jpg',
        '20260619_032418.jpg',
        '20260619_032423.jpg',
        '20260619_032425.jpg',
        '20260619_032427.jpg',
        '20260619_032431.jpg'
      ]
    },
    {
      name: 'Android Chargers',
      images: [
        '20260619_032723.jpg',
        '20260619_032715.jpg',
        '20260619_032717.jpg',
        '20260619_032720.jpg'
      ]
    },
    {
      name: 'Laptop Chargers',
      images: [
        '20260618_065629.jpg',
        '20260618_065632.jpg',
        '20260618_065634.jpg'
      ]
    },
    {
      name: 'Phone Cases',
      images: [
        '20260618_103329.jpg',
        '20260618_103324.jpg'
      ]
    },
    {
      name: 'Earphones',
      images: [
        'iphone cable earphones.jpeg',
        'WhatsApp Image 2026-06-17 at 19.57.33 (2).jpeg',
        'WhatsApp Image 2026-06-17 at 19.57.32.jpeg',
        'WhatsApp Image 2026-06-17 at 19.57.31.jpeg',
        'WhatsApp Image 2026-06-17 at 19.57.32 (2).jpeg'
      ]
    },
    {
      name: 'Headphones',
      images: [
        'WhatsApp Image 2026-06-17 at 19.57.33 (3).jpeg'
      ]
    },
    {
      name: 'Earpods',
      images: [
        '20260618_104019.jpg'
      ]
    },
    {
      name: 'Wired Mouse',
      images: [
        '20260618_104108.jpg',
        '20260618_104045.jpg'
      ]
    },
    {
      name: 'Wireless Mouse-bluetooth',
      images: [
        '20260618_103956.jpg',
        '20260618_104052.jpg'
      ]
    },
    {
      name: 'HDMI Cables',
      images: [
        '20260618_104140.jpg',
        '20260618_104139.jpg'
      ]
    },
    {
      name: 'Sim Card Tray Ejector Pins',
      images: [
        '20260618_103344.jpg'
      ]
    },
    {
      name: 'Flash Disk',
      images: [
        'WhatsApp Image 2026-06-17 at 19.57.33.jpeg'
      ]
    },
    {
      name: 'Micro SD Card Reader',
      images: [
        'WhatsApp Image 2026-06-17 at 19.57.37_watermarked (1).png'
      ]
    },
    {
      name: 'Jack Adapter',
      images: [
        'WhatsApp Image 2026-06-17 at 19.57.32 (3).jpeg'
      ]
    },
    {
      name: 'Cables',
      images: [
        'WhatsApp Image 2026-06-17 at 19.57.30 (2).jpeg',
        'WhatsApp Image 2026-06-17 at 19.57.32 (4).jpeg',
        'WhatsApp Image 2026-06-17 at 19.57.33 (1).jpeg'
      ]
    }
  ];

  const grid = document.getElementById('accessoryGrid');
  if (!grid) return;

  grid.innerHTML = '';

  accessories.forEach((item) => {
    const card = document.createElement('div');
    card.className = 'product-card';
    const hasValidImage = item.images && item.images.length > 0 && item.images[0];
    const thumb = hasValidImage ? item.images[0] : 'https://via.placeholder.com/300x200?text=Click+to+Add+Image';
    card.innerHTML = `
      <img src="${thumb}" alt="${item.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/300x200?text=Image+Not+Found'" style="cursor:pointer;">
      <h4>${item.name}</h4>
    `;
    card.addEventListener('click', function(e) {
      e.preventDefault();
      openGallery(item);
    });
    grid.appendChild(card);
  });

  // ===== GALLERY MODAL =====
  const modal = document.getElementById('galleryModal');
  const galleryTitle = document.getElementById('galleryTitle');
  const galleryGrid = document.getElementById('galleryGrid');
  const closeBtn = document.getElementById('closeModal');

  function openGallery(item) {
    galleryTitle.textContent = item.name;
    galleryGrid.innerHTML = '';
    const validImages = item.images.filter(img => img && img.trim() !== '');
    if (validImages.length > 0) {
      validImages.forEach((imgSrc, index) => {
        const img = document.createElement('img');
        img.src = imgSrc;
        img.alt = `${item.name} - Image ${index + 1}`;
        img.loading = 'lazy';
        img.onerror = function() {
          this.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found';
        };
        img.style.cursor = 'pointer';
        img.onclick = function() {
          openImageExpand(this.src, item.name);
        };
        galleryGrid.appendChild(img);
      });
    } else {
      const placeholder = document.createElement('div');
      placeholder.style.cssText = 'grid-column: 1 / -1; text-align: center; padding: 60px 20px;';
      placeholder.innerHTML = `
        <i class="fas fa-image" style="font-size: 3rem; color: var(--primary); opacity: 0.5; display: block; margin-bottom: 20px;"></i>
        <p style="font-size: 1.1rem; color: #888;">No images added yet</p>
        <p style="font-size: 0.9rem; color: #aaa; margin-top: 8px;">Please add your images in the script.js file</p>
      `;
      galleryGrid.appendChild(placeholder);
    }
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeGallery() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeGallery);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeGallery();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeGallery();
  });

  // ===== PAGE NAVIGATION =====
  const pages = {
    home: document.getElementById('page-home'),
    services: document.getElementById('page-services'),
    products: document.getElementById('page-products'),
    location: document.getElementById('page-location'),
    contact: document.getElementById('page-contact')
  };

  // Get all navigation links (sidebar + bottom nav)
  const allNavLinks = document.querySelectorAll('.sidebar nav a, .bottom-nav a');

  function showPage(pageId) {
    Object.keys(pages).forEach(key => {
      if (pages[key]) pages[key].classList.add('hidden');
    });
    if (pages[pageId]) pages[pageId].classList.remove('hidden');

    allNavLinks.forEach(link => {
      link.classList.remove('active');
      if (link.dataset.page === pageId) link.classList.add('active');
    });

    // Close sidebar on mobile
    if (window.innerWidth <= 820) {
      const sidebar = document.getElementById('sidebar');
      const overlay = document.getElementById('sidebarOverlay');
      if (sidebar) sidebar.classList.remove('open');
      if (overlay) overlay.classList.remove('active');
      document.body.style.overflow = '';
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  allNavLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const page = link.dataset.page;
      if (page) showPage(page);
    });
  });

  // ===== DARK MODE TOGGLE (Switch) =====
  const themeSwitch = document.getElementById('themeSwitch');
  const body = document.body;

  let currentTheme = localStorage.getItem('theme');
  if (!currentTheme) {
    currentTheme = 'dark';
    localStorage.setItem('theme', 'dark');
  }

  if (currentTheme === 'dark') {
    body.classList.add('dark');
    if (themeSwitch) themeSwitch.checked = true;
  } else {
    body.classList.remove('dark');
    if (themeSwitch) themeSwitch.checked = false;
  }

  if (themeSwitch) {
    themeSwitch.addEventListener('change', function() {
      body.classList.toggle('dark');
      if (body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
      }
    });
  }

  // ===== ANIMATED STATISTICS =====
  function animateCounters() {
    const statsSection = document.getElementById('statsSection');
    if (!statsSection || statsSection.dataset.animated === 'true') return;
    const rect = statsSection.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      statsSection.dataset.animated = 'true';
      const statNumbers = statsSection.querySelectorAll('.stat-number');
      statNumbers.forEach(stat => {
        const target = parseFloat(stat.dataset.target);
        const isDecimal = target % 1 !== 0;
        const duration = 2000;
        const startTime = performance.now();
        function updateCounter(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easeOutQuart = 1 - Math.pow(1 - progress, 4);
          const current = target * easeOutQuart;
          stat.textContent = isDecimal ? current.toFixed(1) : Math.round(current);
          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          } else {
            stat.textContent = isDecimal ? target.toFixed(1) : target;
          }
        }
        requestAnimationFrame(updateCounter);
      });
    }
  }

  let animationTriggered = false;
  function checkStatsVisibility() {
    if (animationTriggered) return;
    const statsSection = document.getElementById('statsSection');
    if (!statsSection) return;
    const rect = statsSection.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      animationTriggered = true;
      animateCounters();
    }
  }

  setTimeout(checkStatsVisibility, 500);
  window.addEventListener('scroll', checkStatsVisibility);
  window.addEventListener('resize', checkStatsVisibility);

  // ===== CTA BUTTON NAVIGATION =====
  document.querySelectorAll('.btn[data-page]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const page = btn.dataset.page;
      if (page) showPage(page);
    });
  });

  // ===== MOBILE HAMBURGER MENU =====
  const hamburger = document.getElementById('hamburgerBtn');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');

  function toggleSidebar() {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('active');
    document.body.style.overflow = sidebar.classList.contains('open') ? 'hidden' : '';
  }

  if (hamburger && sidebar && overlay) {
    hamburger.addEventListener('click', toggleSidebar);
    overlay.addEventListener('click', toggleSidebar);

    document.querySelectorAll('.sidebar nav a').forEach(link => {
      link.addEventListener('click', () => {
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && sidebar.classList.contains('open')) {
        toggleSidebar();
      }
    });
  }

  // Show home by default
  showPage('home');

  console.log('✅ Ultra Electronics website loaded successfully!');
});

// ===== IMAGE EXPAND FUNCTIONS =====
function openImageExpand(imageSrc, caption) {
  const overlay = document.getElementById('imageExpandOverlay');
  const img = document.getElementById('imageExpandImg');
  const captionEl = document.getElementById('imageExpandCaption');
  if (!overlay || !img) return;
  img.src = imageSrc;
  img.alt = caption || 'Expanded image';
  captionEl.textContent = caption || '';
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
  document.addEventListener('keydown', handleImageExpandEsc);
}

function closeImageExpand() {
  const overlay = document.getElementById('imageExpandOverlay');
  if (!overlay) return;
  overlay.classList.remove('active');
  document.body.style.overflow = '';
  document.removeEventListener('keydown', handleImageExpandEsc);
}

function handleImageExpandEsc(e) {
  if (e.key === 'Escape') closeImageExpand();
}

window.openImageExpand = openImageExpand;
window.closeImageExpand = closeImageExpand;