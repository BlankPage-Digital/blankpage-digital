document.addEventListener('DOMContentLoaded', function() {
  const container = document.body;
  const particleCount = 60; // Increased from 30
  const dirtyWhiteColor = '#F5F5F5'; // Dirty white color

  // Function to create a particle with a dirty white color
  function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle'; // Add class for new styling

    particle.style.cssText = `
      position: fixed;
      width: 30px;
      height: 30px;
      background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="${dirtyWhiteColor}" stroke-width="2" d="M4 2h12l4 4v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"/><path fill="none" stroke="${dirtyWhiteColor}" stroke-width="2" d="M14 2v4h4"/></svg>');
      background-size: contain;
      background-repeat: no-repeat;
      opacity: 0.6;
      pointer-events: none;
      z-index: -1;
    `;

    // Initial random position
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.top = Math.random() * 100 + 'vh';

    return particle;
  }

  // Function to animate particles
  function animateParticle(particle) {
    const speed = Math.random() * 0.5; // Adjusted speed for better visibility
    const angle = Math.random() * 360;
    setInterval(() => {
      const x = parseFloat(particle.style.left) + Math.cos(angle) * speed;
      const y = parseFloat(particle.style.top) + Math.sin(angle) * speed;
      particle.style.left = (x > 100 ? -10 : x < -10 ? 100 : x) + 'vw';
      particle.style.top = (y > 100 ? -10 : y < -10 ? 100 : y) + 'vh';
    }, 50);
  }

  // Create and animate particles
  for (let i = 0; i < particleCount; i++) {
    const particle = createParticle();
    animateParticle(particle);
    container.appendChild(particle);
  }
});
