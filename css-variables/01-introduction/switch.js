const sw = document.querySelectorAll('.switch span');
const root = document.querySelector(':root');

sw.forEach(swt => {
  swt.addEventListener('click', e => {
    root.style.setProperty('--theme-color', e.target.style.background);
  });
});
