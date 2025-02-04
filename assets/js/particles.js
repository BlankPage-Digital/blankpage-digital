document.addEventListener('DOMContentLoaded', function() {
  const container = document.body;
  const particleCount = 30;

  // Create particles
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.style.cssText = `
      position: fixed;
      width: ${Math.random() * 5 + 2}px;
      height: ${Math.random() * 5 + 2}px;
      background: rgba(89,40,177,${Math.random() * 0.4 + 0.2});
      border-radius: 50%;
      pointer-events: none;
      z-index: -1;
    `;

    // Initial random position
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.top = Math.random() * 100 + 'vh';

    // Animation logic
    const speed = Math.random() * 4 + 2;
    const angle = Math.random() * 360;
    setInterval(() => {
      const x = parseFloat(particle.style.left) + Math.cos(angle) * speed;
      const y = parseFloat(particle.style.top) + Math.sin(angle) * speed;
      particle.style.left = (x > 100 ? -10 : x < -10 ? 100 : x) + 'vw';
      particle.style.top = (y > 100 ? -10 : y < -10 ? 100 : y) + 'vh';
    }, 50);

    container.appendChild(particle);
  }
});
