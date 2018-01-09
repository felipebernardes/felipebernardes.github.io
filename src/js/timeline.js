(function() {
  if (window.innerWidth < 1024) return;

  const entries = document.querySelectorAll('.entries__item');
  const titles = document.querySelectorAll('.entries__item__title');
  const details = document.querySelectorAll('.entries__item__detail');

  let lastActiveIndex;
  const hidePreviouslyActive = () => {
    $(entries[lastActiveIndex]).removeClass('active');
    $(details[lastActiveIndex]).removeClass('active');
  };

  titles.forEach((t, i) => {
    if (i === lastActiveIndex) return;
    t.addEventListener('mouseover', (ev) => {
      hidePreviouslyActive();
      $(entries[i]).addClass('active');
      $(details[i]).addClass('active');
      lastActiveIndex = i;
    }); 
  });
})();
