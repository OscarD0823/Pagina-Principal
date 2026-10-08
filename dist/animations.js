const motionButton = document.querySelector('#motion-control');
const motionLabel = document.querySelector('#motion-label');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let isPaused = reducedMotion.matches;

function updateMotion() {
  document.documentElement.classList.toggle('motion-paused', isPaused);
  motionButton.setAttribute('aria-pressed', String(isPaused));
  const label = isPaused ? 'Activar animaciones' : 'Pausar animaciones';
  motionButton.setAttribute('aria-label', label);
  motionLabel.textContent = label;
  motionButton.disabled = reducedMotion.matches;
  motionButton.title = reducedMotion.matches ? 'Movimiento reducido según la configuración del dispositivo' : label;
}

motionButton.addEventListener('click', () => { isPaused = !isPaused; updateMotion(); });
reducedMotion.addEventListener('change', () => { isPaused = reducedMotion.matches; updateMotion(); });
updateMotion();

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
  document.querySelectorAll('.project-card').forEach((card) => observer.observe(card));
}
document.addEventListener('visibilitychange', () => {
  document.documentElement.classList.toggle('page-hidden', document.hidden);
});
