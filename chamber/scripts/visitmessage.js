document.addEventListener('DOMContentLoaded', () => {
    const messageDiv = document.getElementById('visit-message');
    const lastVisit = localStorage.getItem('lastVisit');
    const now = Date.now();
  
    let message = '';
  
    if (!lastVisit) {
      message = "Welcome! Let us know if you have any questions.";
    } else {
      const timeDiff = now - parseInt(lastVisit, 10);
      const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  
      if (daysDiff < 1) {
        message = "Back so soon! Awesome!";
      } else if (daysDiff === 1) {
        message = "You last visited 1 day ago.";
      } else {
        message = `You last visited ${daysDiff} days ago.`;
      }
    }
  
    messageDiv.textContent = message;
    localStorage.setItem('lastVisit', now.toString());
  });
  