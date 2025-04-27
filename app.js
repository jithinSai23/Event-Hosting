// Mobile Menu Toggle
const hamburgerMenu = document.querySelector('.hamburger-menu');
const links = document.querySelector('.links');
const overlay = document.querySelector('.overlay');

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
  links.classList.toggle('active');
  overlay.classList.toggle('active');
  document.body.classList.toggle('stop-scrolling');
});

// Close menu when clicking on overlay or links
overlay.addEventListener('click', () => {
  hamburgerMenu.classList.remove('active');
  links.classList.remove('active');
  overlay.classList.remove('active');
  document.body.classList.remove('stop-scrolling');
});

// Sticky Header
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  header.classList.toggle('scrolled', window.scrollY > 100);
});

// Countdown Timer for Techspardha
function updateCountdown() {
  const eventDate = new Date('Nov 15, 2023 09:00:00').getTime();
  const now = new Date().getTime();
  const distance = eventDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  document.getElementById('days').innerHTML = days.toString().padStart(2, '0');
  document.getElementById('hours').innerHTML = hours.toString().padStart(2, '0');
  document.getElementById('minutes').innerHTML = minutes.toString().padStart(2, '0');

  if (distance < 0) {
    clearInterval(countdownTimer);
    document.querySelector('.countdown').innerHTML = '<div class="event-live">EVENT LIVE NOW!</div>';
  }
}

const countdownTimer = setInterval(updateCountdown, 1000);
updateCountdown();

// Schedule Tab Switching
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const day = btn.dataset.day;
    
    // Update active tab
    tabBtns.forEach(tb => tb.classList.remove('active'));
    btn.classList.add('active');
    
    // Show corresponding content
    tabContents.forEach(content => {
      content.classList.remove('active');
      if (content.id === day) {
        content.classList.add('active');
      }
    });
  });
});

// Form Validation and Submission
const eventForm = document.getElementById('eventForm');

eventForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const formData = new FormData(eventForm);
  const data = Object.fromEntries(formData);
  
  try {
    // In a real implementation, you would send this to your backend
    console.log('Form submitted:', data);
    
    // Show success message
    const originalBtnText = eventForm.querySelector('.submit-btn').textContent;
    const submitBtn = eventForm.querySelector('.submit-btn');
    submitBtn.textContent = 'Registration Successful!';
    submitBtn.style.backgroundColor = '#2ecc71';
    
    // Reset form after 2 seconds
    setTimeout(() => {
      eventForm.reset();
      submitBtn.textContent = originalBtnText;
      submitBtn.style.backgroundColor = '';
    }, 2000);
    
  } catch (error) {
    console.error('Error:', error);
    alert('Registration failed. Please try again.');
  }
});

// Esports Tournament Registration Modal
const esportsBtns = document.querySelectorAll('.esports-register');
const esportsModal = document.getElementById('esportsModal');
const closeModal = document.querySelector('.close-modal');

esportsBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    esportsModal.classList.add('active');
    document.body.classList.add('stop-scrolling');
  });
});

closeModal.addEventListener('click', () => {
  esportsModal.classList.remove('active');
  document.body.classList.remove('stop-scrolling');
});

// Image Gallery Lightbox
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const lightboxClose = document.querySelector('.lightbox-close');

galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    const imgSrc = item.querySelector('img').src;
    lightboxImg.src = imgSrc;
    lightbox.classList.add('active');
    document.body.classList.add('stop-scrolling');
  });
});

lightboxClose.addEventListener('click', () => {
  lightbox.classList.remove('active');
  document.body.classList.remove('stop-scrolling');
});

// Sports Team Registration
const teamMemberInputs = document.querySelectorAll('.team-member-input');
const addMemberBtn = document.getElementById('addMemberBtn');
let memberCount = 1;

addMemberBtn.addEventListener('click', () => {
  if (memberCount < 5) {
    memberCount++;
    const newMemberInput = `
      <div class="form-group team-member-input">
        <input type="text" placeholder="Team Member ${memberCount} Name" required>
        <input type="email" placeholder="Team Member ${memberCount} Email" required>
      </div>
    `;
    addMemberBtn.insertAdjacentHTML('beforebegin', newMemberInput);
    
    if (memberCount === 5) {
      addMemberBtn.style.display = 'none';
    }
  }
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('change', () => {
  body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
});

// Check for saved dark mode preference
if (localStorage.getItem('darkMode') === 'true') {
  body.classList.add('dark-mode');
  darkModeToggle.checked = true;
}

// Event Filtering System
const filterButtons = document.querySelectorAll('.filter-btn');
const eventCards = document.querySelectorAll('.event-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Update active filter button
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    
    const filterValue = button.dataset.filter;
    
    // Filter event cards
    eventCards.forEach(card => {
      if (filterValue === 'all' || card.classList.contains(filterValue)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Animate elements when scrolling
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.animate');
  
  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    
    if (elementPosition < screenPosition) {
      element.classList.add('animated');
    }
  });
};

window.addEventListener('scroll', animateOnScroll);
animateOnScroll(); // Run once on page load