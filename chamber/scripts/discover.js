const section = document.getElementById("discover-section");

fetch("data/discover.json")
  .then(response => response.json())
  .then(data => {
    data.forEach(place => {
      const card = document.createElement("div");
      card.classList.add("discover-card");

card.innerHTML = `
  <div class="card-content">
    <h2 class="card-title">${place.name}</h2>
    <figure class="card-image">
      <img src="${place.image}" alt="Image of ${place.name}" width="300" height="200" loading="lazy">
      
    </figure>
    <p class="card-description">${place.description}</p>
    <address class="card-address">${place.address}</address>
    <button class="card-button">Learn More</button>
  </div>
`;

      section.appendChild(card);
    });
  })
  .catch(error => {
    console.error("Error loading discover data:", error);
    section.innerHTML = `<p>Sorry, something went wrong loading the attractions.</p>`;
  });
