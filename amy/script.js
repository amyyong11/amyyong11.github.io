
// Mobile nav toggle + active link set
const toggle=document.querySelector('.nav__toggle');
const list=document.querySelector('.nav__list');
if(toggle){toggle.addEventListener('click',()=>{const open=list.classList.toggle('open'); toggle.setAttribute('aria-expanded',String(open));});}
const y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();
// Mark active link based on URL
const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
document.querySelectorAll('.nav__list a').forEach(a => {
  const href = a.getAttribute('href').toLowerCase();
  if (href === path) a.classList.add('active');
});
