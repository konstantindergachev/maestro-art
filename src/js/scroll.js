export function currentYPosition() {
  if (self.pageYOffset) return self.pageYOffset;

  if (document.documentElement && document.documentElement.scrollTop)
    return document.documentElement.scrollTop;

  if (document.body.scrollTop) return document.body.scrollTop;
  return 0;
}

export function scrollTo(id) {
  const el = document.getElementById(id);
  let y = '';
  let node = el;

  if (!el) return 0;

  y = el.offsetTop;

  while (node.offsetParent && node.offsetParent != document.body) {
    node = node.offsetParent;
    y += node.offsetTop;
  }
  return y;
}
window.smoothScroller = (id) => {
  const start = currentYPosition();
  const stop = scrollTo(id);
  const distance = stop > start ? stop - start : start - stop;

  const denominator = 250;

  if (distance < 100) return scrollTo(0, stop);

  let speed = Math.round(distance / 100);

  if (speed >= 20) speed = 20;

  const step = Math.round(distance / denominator);
  let leap = stop > start ? start + step : start - step;
  let timer = 0;

  if (stop > start) {
    for (let i = start; i < stop; i += step) {
      setTimeout('window.scrollTo(0, ' + leap + ')', timer * speed);
      leap += step;
      if (leap > stop) leap = stop;
      timer++;
    }
    return;
  }

  for (let i = start; i > stop; i -= step) {
    setTimeout('window.scrollTo(0, ' + leap + ')', timer * speed);
    leap -= step;
    if (leap < stop) leap = stop;

    timer++;
  }
};
