function fetchAndDisplayImages(query) {
    fetch(`https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}`, {
      headers: {
        Authorization: "eHOVxlqKjj0SslycsG9VRKow49Mg7BFCMOwxuHxmpQx2RFYChl7GUI0d"
      }
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Error fetching images');
      }
    })
    .then(data => {
      const cardContainer = document.getElementById('cardContainer');
      cardContainer.innerHTML = ''; 
  
      data.photos.forEach(photo => {
        const card = document.createElement('div');
        card.className = 'col-md-4';
  
        card.innerHTML = `
          <div class="card mb-4 shadow-sm">
            <img src="${photo.src.medium}" class="bd-placeholder-img card-img-top" alt="${photo.photographer}" />
            <div class="card-body">
              <h5 class="card-title">${photo.photographer}</h5>
              <p class="card-text">
                <a href="${photo.url}" target="_blank">View on Pexels</a>
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small class="text-muted">${photo.id}</small>
              </div>
            </div>
          </div>
        `;
  
        cardContainer.appendChild(card);
      });
    })
    .catch(err => {
      console.error(err);
    });
  }
  

  document.getElementById('loadImages').addEventListener('click', function(e) {
    e.preventDefault();
    fetchAndDisplayImages('hamsters');
  });
  

  document.getElementById('loadSecondaryImages').addEventListener('click', function(e) {
    e.preventDefault();
    fetchAndDisplayImages('nature');
  });
