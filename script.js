const body=document.body;
window.addEventListener('load',()=>{setTimeout(()=>{document.querySelector('.loader').classList.add('done');body.classList.remove('loading');document.querySelectorAll('.hero .reveal').forEach((el,i)=>setTimeout(()=>el.classList.add('in-view'),350+i*130));},1250)});
body.classList.add('loading');
const menuButton=document.querySelector('.menu-toggle');const nav=document.querySelector('.nav-links');
menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-expanded',String(!open));nav.classList.toggle('open',!open)});
document.querySelectorAll('.nav-link').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false')}));
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in-view');observer.unobserve(entry.target)}}),{threshold:.13,rootMargin:'0px 0px -35px 0px'});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const sections=[...document.querySelectorAll('main section[id],main section.hero')];const navLinks=[...document.querySelectorAll('.nav-link')];
const activeObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){const id=entry.target.id||'top';navLinks.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+id))}}),{rootMargin:'-35% 0px -55% 0px'});sections.forEach(s=>activeObserver.observe(s));
const backTop=document.querySelector('.back-top');window.addEventListener('scroll',()=>backTop.classList.toggle('visible',window.scrollY>650),{passive:true});
document.getElementById('year').textContent=new Date().getFullYear();
// Give collection cards a contextual WhatsApp enquiry while retaining the same contact destination.
document.querySelectorAll('.collection-card').forEach(card=>card.addEventListener('click',()=>{const label=card.dataset.category;const wa=document.querySelector('.contact-actions .button');wa.href='https://wa.me/923132076808?text='+encodeURIComponent('Hello Quality Works Furniture, I would like to enquire about '+label+'. Please share more details.')}));
