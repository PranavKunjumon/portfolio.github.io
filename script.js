// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Flicker effect for glitch elements
  const glitchElements = document.querySelectorAll('.glitch');
  
  glitchElements.forEach(el => {
    setInterval(() => {
      el.style.visibility = (Math.random() > 0.9) ? 'hidden' : 'visible';
    }, 100);
  });
  