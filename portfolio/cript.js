/* script.js
 - Typewriter for the hero name
 - IntersectionObserver reveal for elements with .reveal
 - Simple mailto form handler
*/

document.addEventListener('DOMContentLoaded', () => {
  // 1) Typewriter (Name + role) - rotates phrases
  const phrases = ['Madhumitha', 'Frontend Developer', 'UI & Accessibility Enthusiast'];
  const el = document.getElementById('typewriter');
  let p = 0, i = 0, forward = true, pause = 0;

  function tick() {
    const full = phrases[p];
    if (forward) {
      i++;
      if (i >= full.length) { forward = false; pause = 18; }
    } else {
      i--;
      if (i <= 0) { forward = true; p = (p + 1) % phrases.length; }
    }
    el.textContent = full.slice(0, i);
    setTimeout(tick, forward ? 80 : 40 + (pause-- > 0 ? 30 : 0));
  }
  tick();

  // 2) Reveal on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(ent => {
      if (ent.isIntersecting) ent.target.classList.add('visible');
    });
  }, {threshold: 0.12});

  document.querySelectorAll('.reveal').forEach(n => observer.observe(n));

  // 3) Fill year
  document.getElementById('year').textContent = new Date().getFullYear();
});

// 4) Send mail (mailto fallback)
function sendMail(e) {
  e.preventDefault();
  const name = document.getElementById('cname').value.trim();
  const email = document.getElementById('cemail').value.trim();
  const msg = document.getElementById('cmsg').value.trim();
  const subject = encodeURIComponent('Portfolio contact from ' + name);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${msg}`);
  const mailto = `mailto:hello@example.com?subject=${subject}&body=${body}`;
  window.location.href = mailto;
}

