// Get the current year dynamically
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = `© ${currentYear} | Babatunde Junior | Nigeria`;

// Get the last modified date of the document
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;