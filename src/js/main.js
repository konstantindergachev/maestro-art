import '../styles/main.scss';
import preload from './preloader';
import './scroll';

window.addEventListener('load', () => preload());

/*--------------- smooth scroll ---------------*/
document.addEventListener('DOMContentLoaded', () => {
  const links = document.getElementsByTagName('a');
  Array.prototype.forEach.call(links, (link) => {
    link.addEventListener('click', () => {
      if (
        link.hash !== '#popup__left' &&
        link.hash !== '#popup__center' &&
        link.hash !== '#popup__right' &&
        link.hash !== '#popup__all' &&
        link.hash !== '#section__tours' &&
        link.hash !== '#another__stories'
      )
        smoothScroller(link.hash.replace(/^#/, ''));
    });
  });

  const elem = document.getElementById('navi-toggle');
  elem.addEventListener('click', (ev) => {
    const check = ev.target;
    const list = document.querySelector('.navigation__list');
    list.addEventListener('click', (ev) => {
      if (ev.target.closest('a')) check.checked = false;
    });
  });
});
