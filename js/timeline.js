(function() {
  if (window.innerWidth < 1024) return;

  const entries = document.querySelectorAll('.entries__item');
  const titles = document.querySelectorAll('.entries__item__title');
  const details = document.querySelectorAll('.entries__item__detail');

  let lastActiveIndex = 0;

  const hidePreviouslyActive = () => {
    if (typeof lastActiveIndex === 'undefined') return;
    entries[lastActiveIndex].classList.remove('active');
    details[lastActiveIndex].classList.remove('active');
  };

  titles.forEach((t, i) => {
    if (i === lastActiveIndex) return;
    t.addEventListener('mouseover', (ev) => {
      hidePreviouslyActive();
      entries[i].classList.add('active');
      details[i].classList.add('active');
      lastActiveIndex = i;
    });
  });
})();
