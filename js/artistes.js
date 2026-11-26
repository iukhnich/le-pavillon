const burger = document.querySelector('.navbar-menu');
  const dropdown = document.querySelector('.navbar-dropdown');

  burger.addEventListener('click', () => {
    const isOpen = burger.classList.toggle('is-open');

    dropdown.classList.toggle('is-open', isOpen);
    burger.setAttribute('aria-expanded', String(isOpen));
    burger.setAttribute(
      'aria-label',
      isOpen ? 'Fermer le menu' : 'Ouvrir le menu'
    );
  });

  document.addEventListener('click', (event) => {
    if (!event.target.closest('.navbar-menu') &&
        !event.target.closest('.navbar-dropdown')) {
      burger.classList.remove('is-open');
      dropdown.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
      burger.setAttribute('aria-label', 'Ouvrir le menu');
    }
  });

  dropdown.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('is-open');
      dropdown.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
      burger.setAttribute('aria-label', 'Ouvrir le menu');
    });
  });