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
            const priceBooks = arrayBooks.map(item => item.price)
            console.log(priceBooks)
            const cardContainer = document.getElementById('cardContainer');

                    
         imgBooks.forEach((url, index) => {
     
            const cardCol = document.createElement('div');
            cardCol.className = 'col-6 col-md-4 col-lg-3 m-3';

            const card = document.createElement('div');
            card.className = 'card';

            const img = document.createElement('img');
            img.src = url;
            img.alt = titleBooks[index];
            card.appendChild(img);

            const cardBody = document.createElement('div');
            cardBody.className = 'card-body';

            const title = document.createElement('h5');
            title.className = 'card-title';
            title.textContent = titleBooks[index];
            cardBody.appendChild(title);

            const price = document.createElement('p');
            price.className = 'card-price';
            price.textContent = `$${priceBooks[index].toFixed(2)}`;
            cardBody.appendChild(price);

            const discardButton = document.createElement('button');
            discardButton.className = 'btn btn-danger btn-discard';
            discardButton.textContent = 'Scarta';
            discardButton.addEventListener('click', () => {
                cardCol.remove();
            });
            cardBody.appendChild(discardButton);

            card.appendChild(cardBody);

            cardCol.appendChild(card);

            cardContainer.appendChild(cardCol);
        });


        })
        .catch((err) => {
            console.log('ERROR', err)
        })
}

getLibrary()

