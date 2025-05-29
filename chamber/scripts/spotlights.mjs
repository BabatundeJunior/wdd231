export async function loadSpotlights() {
    const spotlightContainer = document.getElementById('spotlight-cards');
    const dataURL = 'data/members.json';
  
    try {
      const res = await fetch(dataURL);
      const members = await res.json();
  
      const qualified = members.filter(m => m.membership === 2 || m.membership === 3);
      const selected = qualified.sort(() => 0.5 - Math.random()).slice(0, 3);
  
      selected.forEach(member => {
        const card = `
        <div class="spotlight-card level-${member.membership}" data-level="${member.membership === 2 ? 'Gold Member' : 'Silver Member'}">
          <h3>${member.name}</h3>
          <p>Level : ${member.membership}</p>
          <img src="images/${member.image}" alt="${member.name} logo">
          <p>${member.address}</p>
          <p>${member.phone}</p>
          <a href="${member.website}" target="_blank">Visit Website</a>
        </div>
      `;
        spotlightContainer.innerHTML += card;
      });
    } catch (error) {
      console.error('Error loading spotlights:', error);
    }
  }
  