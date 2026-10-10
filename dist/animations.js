const motionButton = document.querySelector('#motion-control');
const motionLabel = document.querySelector('#motion-label');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let userPaused = false;
try { userPaused = localStorage.getItem('oscar-projects-motion') === 'paused'; } catch { /* Storage may be unavailable in a private browser. */ }
let isPaused = reducedMotion.matches || userPaused;

function updateMotion() {
  document.documentElement.classList.toggle('motion-paused', isPaused);
  motionButton.setAttribute('aria-pressed', String(isPaused));
  const label = isPaused ? 'Activar animaciones' : 'Pausar animaciones';
  motionButton.setAttribute('aria-label', label);
  motionLabel.textContent = label;
  motionButton.disabled = reducedMotion.matches;
  motionButton.title = reducedMotion.matches ? 'Movimiento reducido según la configuración del dispositivo' : label;
}

motionButton.addEventListener('click', () => {
  userPaused = !userPaused;
  isPaused = reducedMotion.matches || userPaused;
  try { localStorage.setItem('oscar-projects-motion', userPaused ? 'paused' : 'active'); } catch { /* The control still works without storage. */ }
  updateMotion();
});
reducedMotion.addEventListener('change', () => { isPaused = reducedMotion.matches || userPaused; updateMotion(); });
updateMotion();

const cards = [...document.querySelectorAll('.project-card')];
const filterButtons = [...document.querySelectorAll('.filter-button')];
const filters = document.querySelector('.project-filters');
const resultsCount = document.querySelector('#results-count');

function filterProjects(category) {
  let count = 0;
  for (const card of cards) {
    card.hidden = category !== 'all' && card.dataset.category !== category;
    if (!card.hidden) count += 1;
  }
  for (const button of filterButtons) button.setAttribute('aria-pressed', String(button.dataset.filter === category));
  resultsCount.textContent = `${count} ${count === 1 ? 'proyecto' : 'proyectos'}`;
}
for (const button of filterButtons) {
  const category = button.dataset.filter;
  button.querySelector('span').textContent = String(cards.filter(card => category === 'all' || card.dataset.category === category).length);
  button.addEventListener('click', () => filterProjects(category));
}
filters.hidden = false;

// A subtle pointer light is limited to devices with a precise pointing device.
const precisePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
for (const card of cards) {
  let frame = 0;
  card.addEventListener('pointermove', (event) => {
    if (!precisePointer.matches || isPaused || frame) return;
    const { clientX, clientY } = event;
    frame = requestAnimationFrame(() => {
      const bounds = card.getBoundingClientRect();
      card.style.setProperty('--pointer-x', `${clientX - bounds.left}px`);
      card.style.setProperty('--pointer-y', `${clientY - bounds.top}px`);
      frame = 0;
    });
  });
  card.addEventListener('pointerleave', () => {
    cancelAnimationFrame(frame);
    frame = 0;
    card.style.removeProperty('--pointer-x');
    card.style.removeProperty('--pointer-y');
  });
}

// CSS does the per-frame work; JS only creates a fixed number of particles.
document.querySelectorAll('.scene-particles, .snowfall').forEach((container) => {
  const snow = container.classList.contains('snowfall');
  for (let index = 0; index < (snow ? 25 : 12); index += 1) {
    const particle = document.createElement('span');
    particle.className = snow ? 'snowflake' : 'scene-particle';
    particle.style.left = `${(index * 37 + 11) % 100}%`;
    particle.style.setProperty('--size', `${2 + (index % 3)}px`);
    particle.style.setProperty('--duration', `${5 + (index % 5)}s`);
    particle.style.setProperty('--delay', `${-(index * 1.7)}s`);
    particle.style.setProperty('--drift', `${(index % 2 ? -1 : 1) * (10 + (index % 4) * 8)}px`);
    container.append(particle);
  }
});

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) entry.target.classList.toggle('offscreen', !entry.isIntersecting);
  }, { rootMargin: '100px' });
  cards.forEach((card) => observer.observe(card));
}
document.addEventListener('visibilitychange', () => {
  document.documentElement.classList.toggle('page-hidden', document.hidden);
});
