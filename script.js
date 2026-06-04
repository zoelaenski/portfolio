const setActiveLink = () => {
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
};


setActiveLink();


// ===== HAMBURGER MENU =====
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navMenu.classList.toggle('open');
});



// ===== SCROLL REVEAL =====
const revealElements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

revealElements.forEach(el => observer.observe(el));


// ===== TYPING ANIMATION =====
const typingElement = document.getElementById('typing');
const phrases = [
  'Backend Developer.',
  'Web3 Builder.',
  'Problem Solver.'
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

const type = () => {
  const currentPhrase = phrases[phraseIndex];

  if (isDeleting) {
    typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
  }

  if (!isDeleting && charIndex === currentPhrase.length) {
    isDeleting = true;
    setTimeout(type, 1500);
    return;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
  }

  setTimeout(type, isDeleting ? 50 : 100);
};

type();


// ===== NAME TYPING ANIMATION =====
const nameElement = document.getElementById('name-typing');
const fullName = 'Zoe Francis';
let nameIndex = 0;

// ===== ADD BREATHE AFTER DROP IN =====
const heroName = document.querySelector('.hero-title span');
if (heroName) {
  setTimeout(() => {
    heroName.style.animation = 'breathe 3s ease-in-out infinite';
  }, 1100);
}