(function () {
  var toggle = document.querySelector('.menu-toggle');
  var menu = document.getElementById('menu');
  var year = document.getElementById('ano');

  if (year) year.textContent = new Date().getFullYear();
  if (!toggle || !menu) return;

  function setOpen(open) {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    menu.classList.toggle('is-open', open);
  }

  toggle.addEventListener('click', function () {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });

  menu.addEventListener('click', function (e) {
    if (e.target.closest('a')) setOpen(false);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setOpen(false);
  });

  window.matchMedia('(min-width: 761px)').addEventListener('change', function (e) {
    if (e.matches) setOpen(false);
  });
})();
