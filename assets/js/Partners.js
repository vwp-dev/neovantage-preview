document.addEventListener('DOMContentLoaded', () => {
    if (document.readyState !== 'interactive') {
        return;
    } 

    let partnersSplide = new Splide(document.getElementById('our-partners-splide'), {
      type   : 'loop',
      perPage: 5,
      autoplay: true,
      interval: 0,
      speed: 100000
    }).mount();
});