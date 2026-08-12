document.addEventListener('DOMContentLoaded', function() {

  // ===== BRAND DATA =====
  const brandsData = [{
    name: 'Apple Laptops & Devices',
    icon: 'fab fa-apple',
    description: 'Expert repairs for MacBooks, iMacs, and Apple laptops. Screen, battery, motherboard, and more.',
    images: [
      '20260618_085723.jpg',
      '20260618_090027.jpg',
      '20260618_090053.jpg',
      '20260618_085948.jpg',
      '20260618_090125.jpg',
      '20260618_091610.jpg'
    ]
  }, {
    name: 'HP Laptops',
    icon: 'fas fa-laptop',
    description: 'Reliable HP laptop repairs including screen, keyboard, charging port, and motherboard issues.',
    images: [
      '20260618_090631.jpg',
      '20260618_090642.jpg',
      '20260618_090928.jpg'
    ]
  }, {
    name: 'Lenovo Laptops',
    icon: 'fas fa-laptop',
    description: 'Professional Lenovo repairs for ThinkPad, Yoga, and IdeaPad series. Fast turnaround.',
    images: [
      '20260618_093350.jpg'
    ]
  }, {
    name: 'Acer Laptops',
    icon: 'fas fa-laptop',
    description: 'Quality Acer laptop repairs from Aspire to Predator. We fix hardware and software problems.',
    images: [
      '20260618_091049.jpg'
    ]
  }, {
    name: 'Phone Repairs (Samsung, Tecno, Redmi)',
    icon: 'fas fa-mobile-alt',
    description: 'Expert phone repairs for Samsung, Tecno, Redmi, and other Android brands. Screen, battery, charging port.',
    images: [
      '20260618_092744.jpg',
      '20260618_092802.jpg',
      '20260618_092842.jpg',
      '20260618_092850.jpg'
    ]
  }];

  // ===== ACCESSORY DATA =====
  const accessories = [{
    name: 'Iphone Chargers',
    images: [
      '20260619_032421.jpg',
      '20260619_032418.jpg',
      '20260619_032423.jpg',
      '20260619_032425.jpg',
      '20260619_032427.jpg',
      '20260619_032431.jpg'
    ]
  }, {
    name: 'Android Chargers',
    images: [
      '20260619_032723.jpg',
      '20260619_032715.jpg',
      '20260619_032717.jpg',
      '20260619_032720.jpg'
    ]
  }, {
    name: 'Laptop Chargers',
    images: [
      '20260618_065629.jpg',
      '20260618_065632.jpg',
      '20260618_065634.jpg'
    ]
  }, {
    name: 'Phone Cases',
    images: [
      '20260618_103329.jpg',
      '20260618_103324.jpg'
    ]
  }, {
    name: 'Earphones',
    images: [
      'iphone cable earphones.jpeg',
      'WhatsApp Image 2026-06-17 at 19.57.33 (2).jpeg',
      'WhatsApp Image 2026-06-17 at 19.57.32.jpeg',
      'WhatsApp Image 2026-06-17 at 19.57.31.jpeg',
      'WhatsApp Image 2026-06-17 at 19.57.32 (2).jpeg'
    ]
  }, {
    name: 'Headphones',
    images: [
      'WhatsApp Image 2026-06-17 at 19.57.33 (3).jpeg'
    ]
  }, {
    name: 'Earpods',
    images: [
      '20260618_104019.jpg'
    ]
  }, {
    name: 'Wired Mouse',
    images: [
      '20260618_104108.jpg',
      '20260618_104045.jpg'
    ]
  }, {
    name: 'Wireless Mouse-bluetooth',
    images: [
      '20260618_103956.jpg',
      '20260618_104052.jpg'
    ]
  }, {
    name: 'HDMI Cables',
    images: [
      '20260618_104140.jpg',
      '20260618_104139.jpg'
    ]
  }, {
    name: 'Sim Card Tray Ejector Pins',
    images: [
      '20260618_103344.jpg'
    ]
  }, {
    name: 'Flash Disk',
    images: [
      'WhatsApp Image 2026-06-17 at 19.57.33.jpeg'
    ]
  }, {
    name: 'Micro SD Card Reader',
    images: [
      'WhatsApp Image 2026-06-17 at 19.57.37_watermarked (1).png'
    ]
  }, {
    name: 'Jack Adapter',
    images: [
      'WhatsApp Image 2026-06-17 at 19.57.32 (3).jpeg'
    ]
  }, {
    name: 'Cables',
    images: [
      'WhatsApp Image 2026-06-17 at 19.57.30 (2).jpeg',
      'WhatsApp Image 2026-06-17 at 19.57.32 (4).jpeg',
      'WhatsApp Image 2026-06-17 at 19.57.33 (1).jpeg'
    ]
  }];

  // ===== POPULATE BRANDS GRID =====
  const brandsGrid = document.getElementById('brandsGrid');
  if (brandsGrid) {
    brandsData.forEach((brand) => {
      const card = document.createElement('div');
      card.className = 'brand-card-modern';
      card.innerHTML = `
        <div class="brand-card-icon"><i class="${brand.icon}"></i></div>
        <h4>${brand.name}</h4>
        <p class="brand-desc">${brand.description}</p>
        <div class="brand-meta"><i class="fas fa-images"></i> Click to view examples</div>
      `;
      card.addEventListener('click', function(e) {
        e.preventDefault();
        openBrandGallery(brand);
      });
      brandsGrid.appendChild(card);
    });
  }

  // ===== POPULATE ACCESSORIES =====
  const grid = document.getElementById('accessoryGrid');
  if (grid) {
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
  }

  // ===== GALLERY MODAL (shared) =====
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

  function openBrandGallery(brand) {
    galleryTitle.textContent = brand.name;
    galleryGrid.innerHTML = '';
    const validImages = brand.images.filter(img => img && img.trim() !== '');
    if (validImages.length > 0) {
      validImages.forEach((imgSrc, index) => {
        const img = document.createElement('img');
        img.src = imgSrc;
        img.alt = `${brand.name} - Image ${index + 1}`;
        img.loading = 'lazy';
        img.onerror = function() {
          this.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found';
        };
        img.style.cursor = 'pointer';
        img.onclick = function() {
          openImageExpand(this.src, brand.name);
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

  // ===== SPEEDOMETER GAUGE (Bigger Scale: 0 - 500) =====
  function drawSpeedometer(percent) {
    const canvas = document.getElementById('speedometerCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = canvas.width; // 600
    const h = canvas.height; // 350
    const cx = w / 2; // 300
    const cy = h * 0.85; // 297.5
    const radius = 220;
    const lineWidth = 22;

    // Clear
    ctx.clearRect(0, 0, w, h);

    const startAngle = Math.PI * 0.75;
    const endAngle = Math.PI * 2.25;
    const totalAngle = endAngle - startAngle;

    // Background arc
    ctx.beginPath();
    ctx.arc(cx, cy, radius, startAngle, endAngle);
    ctx.strokeStyle = 'rgba(255,255,255,0.25)';
    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';
    ctx.stroke();

    // Colored arc
    const clamped = Math.min(Math.max(percent, 0), 100);
    const currentAngle = startAngle + (clamped / 100) * totalAngle;

    const gradient = ctx.createLinearGradient(0, 0, w, 0);
    gradient.addColorStop(0, '#4caf50');
    gradient.addColorStop(0.5, '#ffeb3b');
    gradient.addColorStop(1, '#f44336');

    ctx.beginPath();
    ctx.arc(cx, cy, radius, startAngle, currentAngle);
    ctx.strokeStyle = gradient;
    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';
    ctx.stroke();

    // Needle
    const needleLen = radius - 30;
    const needleAngle = startAngle + (clamped / 100) * totalAngle;
    const tipX = cx + Math.cos(needleAngle) * needleLen;
    const tipY = cy + Math.sin(needleAngle) * needleLen;

    ctx.shadowColor = 'rgba(0,0,0,0.4)';
    ctx.shadowBlur = 15;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(tipX, tipY);
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 4;
    ctx.lineCap = 'round';
    ctx.stroke();
    ctx.shadowBlur = 0;

    // Center dot
    ctx.beginPath();
    ctx.arc(cx, cy, 14, 0, Math.PI * 2);
    ctx.fillStyle = '#ffffff';
    ctx.fill();
    ctx.beginPath();
    ctx.arc(cx, cy, 7, 0, Math.PI * 2);
    ctx.fillStyle = '#0d6efd';
    ctx.fill();

    // Value text
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 42px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    const displayVal = Math.round((clamped / 100) * 500); // Map to 500 scale
    ctx.fillText(displayVal + '+', cx, cy - 70);

    ctx.font = '18px Inter, sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.8)';
    ctx.fillText('Devices Repaired', cx, cy - 30);

    // Ticks & Labels (0 to 500)
    ctx.font = '16px Inter, sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.7)';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    for (let i = 0; i <= 5; i++) {
      const tickAngle = startAngle + (i / 5) * totalAngle;
      const val = i * 100;

      // Tick line
      const inner = radius + 5;
      const outer = radius + 18;
      const x1 = cx + Math.cos(tickAngle) * inner;
      const y1 = cy + Math.sin(tickAngle) * inner;
      const x2 = cx + Math.cos(tickAngle) * outer;
      const y2 = cy + Math.sin(tickAngle) * outer;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = i % 5 === 0 ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.4)';
      ctx.lineWidth = i % 5 === 0 ? 3 : 2;
      ctx.stroke();

      // Label
      const labelRadius = radius + 35;
      const lx = cx + Math.cos(tickAngle) * labelRadius;
      const ly = cy + Math.sin(tickAngle) * labelRadius;
      ctx.fillStyle = 'rgba(255,255,255,0.7)';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(val, lx, ly);
    }
  }

  // ===== ANIMATE GAUGE =====
  let gaugeAnimated = false;

  function animateGauge() {
    if (gaugeAnimated) return;
    const statsSection = document.getElementById('statsSection');
    if (!statsSection) return;
    const rect = statsSection.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      gaugeAnimated = true;
      const targetPercent = 70; // 70% of 500 = 350
      let current = 0;
      const step = () => {
        current += 1.5;
        if (current >= targetPercent) {
          drawSpeedometer(targetPercent);
          return;
        }
        drawSpeedometer(current);
        requestAnimationFrame(step);
      };
      step();
    }
  }

  // ===== ANIMATED STATISTICS (numbers) =====
  let statsAnimated = false;

  function animateCounters() {
    if (statsAnimated) return;
    const statsSection = document.getElementById('statsSection');
    if (!statsSection) return;
    const rect = statsSection.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      statsAnimated = true;
      const statNumbers = statsSection.querySelectorAll('.stat-number');
      statNumbers.forEach(stat => {
        const target = parseFloat(stat.dataset.target);
        if (isNaN(target)) return;
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

  // ===== CHECK VISIBILITY =====
  let animationTriggered = false;

  function checkStatsVisibility() {
    if (animationTriggered) return;
    const statsSection = document.getElementById('statsSection');
    if (!statsSection) return;
    const rect = statsSection.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      animationTriggered = true;
      animateGauge();
      animateCounters();
    }
  }

  setTimeout(checkStatsVisibility, 500);
  window.addEventListener('scroll', checkStatsVisibility);
  window.addEventListener('resize', checkStatsVisibility);

  // ===== PAGE NAVIGATION =====
  const pages = {
    home: document.getElementById('page-home'),
    services: document.getElementById('page-services'),
    products: document.getElementById('page-products'),
    location: document.getElementById('page-location'),
    contact: document.getElementById('page-contact')
  };

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

  // ===== DARK MODE TOGGLE =====
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
      // Redraw gauge if visible
      if (gaugeAnimated) {
        drawSpeedometer(70);
      }
    });
  }

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
