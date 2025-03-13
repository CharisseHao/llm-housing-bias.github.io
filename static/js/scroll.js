// scroll.js
// function setupFadeInObserver() {
//     const elements = document.querySelectorAll('.fade-in');

//     if ('IntersectionObserver' in window) {
//         const observer = new IntersectionObserver((entries) => {
//             entries.forEach(entry => {
//                 if (entry.isIntersecting) {
//                     entry.target.classList.add('visible');
//                 } else {
//                     entry.target.classList.remove('visible');
//                 }
//             });
//         }, { threshold: 0.1 });

//         elements.forEach(el => observer.observe(el));
//     }
// }
// scroll.js

function setupFadeInObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, { threshold: 0.05 });
    
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    setupFadeInObserver();
});