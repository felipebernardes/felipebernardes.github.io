[].forEach.call(document.querySelectorAll('.card .actions a:first-child'), function(el) {
  el.addEventListener('click', function(e) {
    e.preventDefault();
    var details = el.parentNode.previousElementSibling;
    details.classList.add('show');
    return true;
  })
});