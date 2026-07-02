// ── NAV SCROLL ──
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    nav.classList.toggle('stuck', window.scrollY > 50);
});

// ── TYPED TEXT ──
const phrases = ['cool stuff.', 'web apps.', 'random projects.', 'things that work (mostly).'];
let pi = 0, ci = 0, deleting = false;
const el = document.getElementById('typed');

function type() {
    const phrase = phrases[pi];
    if (!deleting) {
        el.textContent = phrase.slice(0, ci + 1);
        ci++;
        if (ci === phrase.length) { deleting = true; setTimeout(type, 1800); return; }
    } else {
        el.textContent = phrase.slice(0, ci - 1);
        ci--;
        if (ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; }
    }
    setTimeout(type, deleting ? 45 : 95);
}
setTimeout(type, 1600);

// ── SCROLL REVEAL ──
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('show'); io.unobserve(e.target); }
    });
}, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' });
reveals.forEach(el => io.observe(el));
