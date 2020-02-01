function preload() {
  const loader = document.querySelector('.load');
  const body = document.getElementsByTagName('BODY')[0];
  const wrapper = document.getElementById('wrapper');
  const navBtn = document.querySelector('.navigation__btn');
  const navBcg = document.querySelector('.navigation__bcg');

  wrapper.style.display = 'block';
  loader.style.display = 'none';
  loader.style.transition = 'display .3s easy-out';
  navBtn.style.display = 'block';
  navBcg.style.display = 'block';
  body.style.overflowY = 'auto';
}

export default preload;
