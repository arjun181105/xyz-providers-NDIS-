// Minimal JS for nav toggle and year stamp
const btn = document.querySelector('.nav-toggle');
const menu = document.getElementById('nav-menu');
if (btn && menu){
  btn.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}
document.getElementById('year').textContent = new Date().getFullYear();
