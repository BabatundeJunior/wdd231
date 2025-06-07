
    
    document.getElementById('timestamp').value = new Date().toISOString();

    // Modal functionality
    document.querySelectorAll('.modal-trigger').forEach(trigger => {
      trigger.addEventListener('click', e => {
        e.preventDefault();
        const modal = document.getElementById(trigger.dataset.modal);
        if (modal) modal.style.display = 'block';
      });
    });

    document.querySelectorAll('.close').forEach(closeBtn => {
      closeBtn.addEventListener('click', () => {
        closeBtn.closest('.modal').style.display = 'none';
      });
    });

    window.onclick = function(event) {
      document.querySelectorAll('.modal').forEach(modal => {
        if (event.target === modal) {
          modal.style.display = 'none';
        }
      });
    };
