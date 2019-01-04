(function() {
  const root = document.querySelector('html');

  root.addEventListener('mousemove', (e) => {
    const viewportWidth = window.innerWidth;
    const cursorPosition = e.pageX;
    const currentPercentage = Math.floor(cursorPosition / viewportWidth * 100);

    if (currentPercentage < 25) {
      root.style.setProperty('--color-main-light', getComputedStyle(root).getPropertyValue('--pink-light'));
      root.style.setProperty('--color-main-dark', getComputedStyle(root).getPropertyValue('--pink-dark'));
    }

    if (currentPercentage >= 25 && currentPercentage < 50) {
      root.style.setProperty('--color-main-light', getComputedStyle(root).getPropertyValue('--yellow-light'));
      root.style.setProperty('--color-main-dark', getComputedStyle(root).getPropertyValue('--yellow-dark'));
    }

    if (currentPercentage >= 50 && currentPercentage < 75) {
      console.log('green');
      root.style.setProperty('--color-main-light', getComputedStyle(root).getPropertyValue('--green-light'));
      root.style.setProperty('--color-main-dark', getComputedStyle(root).getPropertyValue('--green-dark'));
    }

    if (currentPercentage >= 75) {
      root.style.setProperty('--color-main-light', getComputedStyle(root).getPropertyValue('--blue-light'));
      root.style.setProperty('--color-main-dark', getComputedStyle(root).getPropertyValue('--blue-dark'));
    }
  })
})();
