$(document).ready(() => {

  // - add animation to View More Button
  $('.sec-greeting #viewMore').click((e) => {
    $('html, body').animate({
      scrollTop: $('#details').offset().top
    }, 100);
  })


  // -
  var intersectionObserver = new IntersectionObserver(function(entries) {
    for (let i = 0; i < entries.length; ++i) {
      if (entries[i].intersectionRatio <= 0) continue;

      const el = entries[i].target;
      console.log(el.classList);
      if (el.classList.contains('show-color')) {

        entries[i].target.classList.add('show-color-ani');
        this.unobserve(entries[i].target);
      }

    }
  });

  document.querySelectorAll('.observe-in').forEach(e => {
    console.log(e);
    intersectionObserver.observe(e);
  });

});
