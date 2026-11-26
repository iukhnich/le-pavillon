const burger = document.querySelector('.navbar-menu');
const dropdown = document.querySelector('.navbar-dropdown');
function setMenu(open) {
  burger.classList.toggle('is-open', open);
  dropdown.classList.toggle('is-open', open);
  burger.setAttribute('aria-expanded', String(open));
  burger.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
}
burger.addEventListener('click', () => setMenu(!burger.classList.contains('is-open')));
dropdown.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
document.addEventListener('click', e => { if (!e.target.closest('.navbar')) setMenu(false); });

// Pastilles des carrousels
document.querySelectorAll('.carousel').forEach(c => {
  const dots = document.createElement('div');
  dots.className = 'dots';
  [...c.children].forEach(() => dots.appendChild(document.createElement('span')));
  c.after(dots);
  const upd = () => {
    const i = Math.round(c.scrollLeft / (c.scrollWidth / c.children.length));
    [...dots.children].forEach((d, k) => d.classList.toggle('on', k === i));
  };
  c.addEventListener('scroll', upd, { passive: true });
  upd();
});