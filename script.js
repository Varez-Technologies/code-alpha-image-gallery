/* ==========================================================================
   WARM ARTISANAL FILM EDITORIAL — INTERACTIVITY (script.js)
   Archival Darkroom Examination & Exhibition Indexing
   CodeAlpha Frontend Internship — Task 1: Image Gallery
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ---------- ARCHIVAL CATALOGUE DATA ----------
  const archiveCatalogue = [
    {
      index: 0,
      category: 'nature',
      frame: 'FRAME 01A',
      title: 'Himalayan Cedar Canopy',
      note: 'First light piercing fog through deodar needles. Damp earth & silent wind.',
      film: 'Kodak Portra 400',
      gear: 'Leica M6 • Summicron 50mm • ƒ/2.8 • 1/125s',
      src: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=85'
    },
    {
      index: 1,
      category: 'city',
      frame: 'FRAME 02B',
      title: 'Late Night Rain in Shinjuku',
      note: 'Wet asphalt reflecting neon lamps. Umbrella tucked under arm.',
      film: 'Cinestill 800T',
      gear: 'Pentax 67 • Takumar 105mm • ƒ/1.4 • 1/60s',
      src: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1400&q=85'
    },
    {
      index: 2,
      category: 'nature',
      frame: 'FRAME 03A',
      title: 'Alpenglow on Mount Moran',
      note: 'Frozen lake reflections just before twilight turned deep indigo.',
      film: 'Kodak Ektar 100',
      gear: 'Hasselblad 500 C/M • Planar 80mm • ƒ/8.0 • 1/30s',
      src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=85'
    },
    {
      index: 3,
      category: 'fauna',
      frame: 'FRAME 04C',
      title: 'Sentinel at Dusk',
      note: 'Unblinking amber eyes through dry golden grasses of the Serengeti.',
      film: 'Kodak Gold 200',
      gear: 'Nikon FM2 • Nikkor 135mm • ƒ/4.0 • 1/500s',
      src: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=1400&q=85'
    },
    {
      index: 4,
      category: 'artifacts',
      frame: 'FRAME 05A',
      title: 'Wood-Fired Sourdough & Basil',
      note: 'Charred blistered crust straight from brick oven in Naples.',
      film: 'Fujifilm Pro 400H',
      gear: 'Contax G2 • Biogon 28mm • ƒ/2.0 • 1/90s',
      src: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1600&q=85'
    },
    {
      index: 5,
      category: 'voyage',
      frame: 'FRAME 06B',
      title: "Oia's White Terraces",
      note: 'Limestone walls still retaining midday warmth as the sun dipped.',
      film: 'Kodak Tri-X 400',
      gear: 'Leica MP • Elmarit 28mm • ƒ/5.6 • 1/250s',
      src: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1400&q=85'
    },
    {
      index: 6,
      category: 'city',
      frame: 'FRAME 07A',
      title: 'Monoliths in Blue Mist',
      note: 'Steel and stone vanishing into low autumn clouds over Lake Michigan.',
      film: 'Ilford HP5 Plus',
      gear: 'Canon Canonet QL17 • 40mm • ƒ/4.0 • 1/60s',
      src: 'https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=1600&q=85'
    },
    {
      index: 7,
      category: 'fauna',
      frame: 'FRAME 08D',
      title: 'The Matriarch’s Path',
      note: 'Soft rhythmic footsteps kicking red dust into the evening backlight.',
      film: 'Kodak Portra 160',
      gear: 'Pentax 67 • SMC 105mm • ƒ/3.5 • 1/400s',
      src: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=1400&q=85'
    },
    {
      index: 8,
      category: 'voyage',
      frame: 'FRAME 09A',
      title: 'Flavian Ochre Ruins',
      note: 'Two thousand years of travertine limestone illuminated by Roman sunset.',
      film: 'Kodak Gold 200',
      gear: 'Olympus OM-1 • Zuiko 35mm • ƒ/5.6 • 1/125s',
      src: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1600&q=85'
    },
    {
      index: 9,
      category: 'artifacts',
      frame: 'FRAME 10C',
      title: 'Ginza Omakase Arrangement',
      note: 'Ceramic glaze made by Kyoto potters. Rice seasoned with aged red vinegar.',
      film: 'Fujifilm Velvia 50',
      gear: 'Nikon F3 • Micro-Nikkor 55mm • ƒ/2.8 • 1/90s',
      src: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1400&q=85'
    },
    {
      index: 10,
      category: 'nature',
      frame: 'FRAME 11B',
      title: 'Glen of the Weeping Moss',
      note: 'Long exposure on tripod set in freezing river pebbles. Isle of Skye.',
      film: 'Kodak Portra 400',
      gear: 'Linhof Master Technika 4x5 • Schneider 90mm • ƒ/16 • 2.5s',
      src: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1400&q=85'
    },
    {
      index: 11,
      category: 'fauna',
      frame: 'FRAME 12A',
      title: 'Azure Kingfisher Waiting',
      note: 'Three hours motionless in lakeside reeds before it struck the water.',
      film: 'Kodak Ektar 100',
      gear: 'Leica R8 • Vario-Elmar 70-210mm • ƒ/4.0 • 1/1000s',
      src: 'https://images.unsplash.com/photo-144464666168-49d633b86797?auto=format&fit=crop&w=1600&q=85'
    }
  ];

  // ---------- STATE VARIABLES ----------
  let currentActiveFilter = 'all';
  let activeCatalogueSubset = [...archiveCatalogue];
  let activeExaminationIndex = 0;

  // ---------- DOM REFERENCES ----------
  const cards = Array.from(document.querySelectorAll('.polaroid-card'));
  const filterChips = document.querySelectorAll('.filter-chip');
  const emptyState = document.getElementById('emptyState');
  const returnSeal = document.getElementById('returnSeal');

  // Lightbox / Modal DOM
  const modal = document.getElementById('darkroomModal');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalImage = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  const modalFilm = document.getElementById('modalFilm');
  const modalFieldNote = document.getElementById('modalFieldNote');
  const modalGear = document.getElementById('modalGear');
  const modalCounter = document.getElementById('modalCounter');
  const prevFrameBtn = document.getElementById('prevFrameBtn');
  const nextFrameBtn = document.getElementById('nextFrameBtn');

  // ---------- FILTERING SYSTEM ----------
  function executeFilter(category) {
    currentActiveFilter = category;
    activeCatalogueSubset = category === 'all' 
      ? [...archiveCatalogue] 
      : archiveCatalogue.filter(item => item.category === category);

    let visibleCount = 0;

    cards.forEach((card) => {
      const cardCategory = card.getAttribute('data-category');
      const shouldShow = (category === 'all' || cardCategory === category);

      if (shouldShow) {
        card.classList.remove('hidden');
        card.style.animation = 'none';
        // Subtle human-like staggered arrival
        setTimeout(() => {
          card.style.animation = `cardFadeIn 0.45s ease ${visibleCount * 0.04}s both`;
        }, 10);
        visibleCount++;
      } else {
        card.classList.add('hidden');
      }
    });

    // Handle Empty State
    if (emptyState) {
      emptyState.style.display = (visibleCount === 0) ? 'block' : 'none';
    }
  }

  // Filter Chip Click Listeners
  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      filterChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const targetCategory = chip.getAttribute('data-filter');
      executeFilter(targetCategory);
    });
  });

  // ---------- LIGHTBOX INSPECTION LOGIC ----------
  function displayFrame(subsetIndex) {
    if (subsetIndex < 0 || subsetIndex >= activeCatalogueSubset.length) return;
    activeExaminationIndex = subsetIndex;

    const data = activeCatalogueSubset[activeExaminationIndex];

    // Smooth print fade
    modalImage.classList.add('fading');
    setTimeout(() => {
      modalImage.src = data.src;
      modalImage.alt = data.title;
      modalImage.onload = () => {
        modalImage.classList.remove('fading');
      };

      modalTitle.textContent = data.title;
      modalFilm.textContent = data.film;
      modalFieldNote.textContent = `“${data.note}”`;
      modalGear.textContent = data.gear;
      
      const currentNumber = String(activeExaminationIndex + 1).padStart(2, '0');
      const totalNumber = String(activeCatalogueSubset.length).padStart(2, '0');
      modalCounter.textContent = `FRAME ${currentNumber} OF ${totalNumber}`;
    }, 150);
  }

  function openDarkroom(cardIndex) {
    // Find item in active subset
    const subsetIdx = activeCatalogueSubset.findIndex(item => item.index === cardIndex);
    if (subsetIdx !== -1) {
      displayFrame(subsetIdx);
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeDarkroom() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  function advanceFrame(direction) {
    const total = activeCatalogueSubset.length;
    if (total === 0) return;
    const nextIndex = (activeExaminationIndex + direction + total) % total;
    displayFrame(nextIndex);
  }

  // Attach card click handlers
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const idx = parseInt(card.getAttribute('data-index'), 10);
      openDarkroom(idx);
    });
  });

  // Modal event bindings
  modalCloseBtn.addEventListener('click', closeDarkroom);
  modalBackdrop.addEventListener('click', closeDarkroom);
  prevFrameBtn.addEventListener('click', () => advanceFrame(-1));
  nextFrameBtn.addEventListener('click', () => advanceFrame(1));

  // ---------- KEYBOARD NAVIGATION ----------
  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;

    if (e.key === 'Escape') {
      closeDarkroom();
    } else if (e.key === 'ArrowLeft') {
      advanceFrame(-1);
    } else if (e.key === 'ArrowRight') {
      advanceFrame(1);
    }
  });

  // ---------- TOUCH GESTURES (SWIPE ON MOBILE) ----------
  let touchStartX = 0;
  let touchEndX = 0;

  modal.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  modal.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const swipeDelta = touchStartX - touchEndX;
    if (Math.abs(swipeDelta) > 50) {
      if (swipeDelta > 0) {
        advanceFrame(1); // Swipe left = next
      } else {
        advanceFrame(-1); // Swipe right = prev
      }
    }
  }, { passive: true });

  // ---------- RETURN TO TOP SEAL ----------
  window.addEventListener('scroll', () => {
    if (window.scrollY > 450) {
      returnSeal.classList.add('visible');
    } else {
      returnSeal.classList.remove('visible');
    }
  });

  returnSeal.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Initial setup
  executeFilter('all');
});
