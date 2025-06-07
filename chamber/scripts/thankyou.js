
const urlParams = new URLSearchParams(window.location.search);
document.getElementById('firstName').textContent = urlParams.get('firstName') || 'N/A';
document.getElementById('lastName').textContent = urlParams.get('lastName') || 'N/A';
document.getElementById('email').textContent = urlParams.get('email') || 'N/A';
document.getElementById('phone').textContent = urlParams.get('phone') || 'N/A';
document.getElementById('organization').textContent = urlParams.get('organization') || 'N/A';
