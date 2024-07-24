const getLibrary = function () {
    fetch('https://striveschool-api.herokuapp.com/books')
        .then((response) => {
            console.log(response)
            if (response.ok) {
                return response.json()
            } else {
                throw new Error('Rete non trovata')
            }
        })
        .then((arrayBooks) => {
            console.log(arrayBooks)
            const imgBooks = arrayBooks.map(item => item.img)
            console.log(imgBooks)
            const titleBooks = arrayBooks.map(item => item.title)
            console.log(titleBooks)
            const cardContainer = document.getElementById('cardContainer');

            imgBooks.forEach((url, index) => {

                const cardCol = document.createElement('div');
                cardCol.className = 'col-6 col-md-4 col-lg-3 m-3';

                const cardDiv = document.createElement('div');
                cardDiv.className = 'card';

                const imgSpan = document.createElement('span');
                imgSpan.className = 'd-block';

                const imgElement = document.createElement('img');
                imgElement.src = url;
                imgElement.alt = 'Immagine';
                imgElement.className = 'card-img-top';

                imgSpan.appendChild(imgElement);
                cardDiv.appendChild(imgSpan);

                const cardBody = document.createElement('div');
                cardBody.className = 'card-body';

                const cardTitle = document.createElement('h5');
                cardTitle.className = 'card-title text-center';
                cardTitle.textContent = titleBooks[index];

                const cardText = document.createElement('p');
                cardText.className = 'card-text';
                cardText.textContent = 'Some quick example text to build on the card title and make up the bulk of the card\'s content.';

                const cardLink = document.createElement('a');
                cardLink.href = '#';
                cardLink.className = 'btn btn-primary';
                cardLink.textContent = 'Go somewhere';

                cardBody.appendChild(cardTitle);
                cardBody.appendChild(cardText);
                cardBody.appendChild(cardLink);

                cardDiv.appendChild(cardBody);
                cardCol.appendChild(cardDiv);
                cardContainer.appendChild(cardCol);
            });

        })
        .catch((err) => {
            console.log('ERROR', err)
        })
}

getLibrary()