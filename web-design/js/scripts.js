// Basic DOM manipulations and event handling for your blog

// Navbar toggle for smaller screens (optional if implementing mobile menu)
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelector('.nav-links');
    const toggleButton = document.querySelector('.toggle-button');
  
    if (toggleButton) {
      toggleButton.addEventListener('click', () => {
        navLinks.classList.toggle('active');
      });
    }
  });
  
  // Form validation for contact page
  const contactForm = document.querySelector('form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault(); // Prevent default form submission for demonstration
      const name = contactForm.querySelector('input[name="name"]').value.trim();
      const email = contactForm.querySelector('input[name="email"]').value.trim();
      const message = contactForm.querySelector('textarea[name="message"]').value.trim();
  
      if (!name || !email || !message) {
        alert('Please fill in all fields before submitting.');
      } else if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
      } else {
        alert('Message sent successfully!');
        contactForm.reset();
      }
    });
  }
  
  // Email validation function
  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  
  // Comment form functionality for post details page
  const commentForm = document.querySelector('.comment-form');
  if (commentForm) {
    commentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const commentInput = commentForm.querySelector('textarea[name="comment"]').value.trim();
      
      if (commentInput) {
        const commentSection = document.querySelector('.comments');
        const newComment = document.createElement('div');
        newComment.classList.add('comment');
        newComment.innerHTML = `<p><strong>Anonymous:</strong> ${commentInput}</p>`;
        commentSection.appendChild(newComment);
        commentForm.reset();
      } else {
        alert('Please enter a comment before submitting.');
      }
    });
  }
  
  