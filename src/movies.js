document.addEventListener("DOMContentLoaded", function() {
    const apiKey = '3bdbbc7774806ef322aac777bb786e18'; 
    const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYmRiYmM3Nzc0ODA2ZWYzMjJhYWM3NzdiYjc4NmUxOCIsIm5iZiI6MTcyMDE2NzYzNS45NDk1MDEsInN1YiI6IjY2ODY5MjdiOTc5ZDgwYjg1OTFhNmJjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n3nr8T4O4nIU5_CMmNX8KDHJbTi_JPGycyn5PwEyo9s';

    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');

    if (searchForm) {
        searchForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const query = searchInput.value;
            if (query) {
                searchMovies(query);
            }
        });
    }

    function searchMovies(query) {
        const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}`;

        fetch(apiUrl, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        .then(response => response.json())
        .then(data => {
            displaySearchResults(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }

    function displaySearchResults(data) {
        const imgContainer = document.getElementById('img-container');
        imgContainer.innerHTML = '';

        data.results.forEach(film => {
            if (film.poster_path) {
                const container = document.createElement('div');
                container.className = 'image-container';

                const img = document.createElement('img');
                img.src = `https://image.tmdb.org/t/p/w500${film.poster_path}`;
                img.alt = film.title;
                img.className = 'movie-poster';

                const title = document.createElement('h3');
                title.textContent = film.title;
                title.className = 'movie-title';

                const releaseDate = document.createElement('p');
                releaseDate.textContent = `Release date: ${film.release_date}`;
                releaseDate.className = 'release-date';

                container.addEventListener('click', () => {
                    const url = `details.html?title=${encodeURIComponent(film.title)}&description=${encodeURIComponent(film.overview)}&src=${encodeURIComponent(img.src)}`;
                    window.location.href = url;
                });

                container.appendChild(img);
                container.appendChild(title);
                container.appendChild(releaseDate);
                imgContainer.appendChild(container);
            }
        });
    }
});

// document.addEventListener("DOMContentLoaded", function() {
//     // API Configuration
//     const apiKey = '3bdbbc7774806ef322aac777bb786e18'; 
//     const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYmRiYmM3Nzc0ODA2ZWYzMjJhYWM3NzdiYjc4NmUxOCIsIm5iZiI6MTcyMDE2NzYzNS45NDk1MDEsInN1YiI6IjY2ODY5MjdiOTc5ZDgwYjg1OTFhNmJjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n3nr8T4O4nIU5_CMmNX8KDHJbTi_JPGycyn5PwEyo9s'; // Remplacez par votre jeton d'accès

//     const searchForm = document.getElementById('search-form');
//     const searchInput = document.getElementById('search-input');

//     if (searchForm) {
//         searchForm.addEventListener('submit', function(event) {
//             event.preventDefault();
//             const query = searchInput.value;
//             if (query) {
//                 searchMovies(query);
//             }
//         });
//     }

//     // Fonction de recherche de films
//     function searchMovies(query) {
//         const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}`;

//         fetch(apiUrl, {
//             headers: {
//                 'Authorization': `Bearer ${accessToken}`
//             }
//         })
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network error: ' + response.statusText);
//             }
//             return response.json();
//         })
//         .then(data => {
//             console.log(data); // Afficher les données dans la console
//             displayImages(data);
//         })
//         .catch(error => {
//             console.error('Fetch operation failed:', error);
//         });
//     }

//     function displayImages(data) {
//         const imgContainer = document.getElementById('img-container');
//         imgContainer.innerHTML = '';

//         let rowDiv; // Variable pour contenir la ligne actuelle

//         data.results.forEach((film, index) => {
//             if (film.poster_path) {
//                 // Créer un conteneur pour chaque paire d'images avec le titre et la date de sortie
//                 const container = document.createElement('div');
//                 container.className = 'image-container'; // Stylisez cette classe selon vos besoins

//                 // Créer l'élément image
//                 const img = document.createElement('img');
//                 img.src = `https://image.tmdb.org/t/p/w500${film.poster_path}`;
//                 img.alt = film.title;
//                 img.className = 'movie-poster'; // Stylisez cette classe selon vos besoins

//                 // Créer l'élément titre
//                 const title = document.createElement('h3');
//                 title.textContent = film.title;
//                 title.className = 'movie-title'; // Stylisez cette classe selon vos besoins

//                 // Créer l'élément date de sortie
//                 const releaseDate = document.createElement('p');
//                 releaseDate.textContent = `Release date: ${film.release_date}`;
//                 releaseDate.className = 'release-date'; // Stylisez cette classe selon vos besoins

//                 // Ajouter un écouteur d'événement clic au conteneur
//                 container.addEventListener('click', () => {
//                     const url = `details.html?title=${encodeURIComponent(film.title)}&description=${encodeURIComponent(film.overview)}&src=${encodeURIComponent(img.src)}`;
//                     window.location.href = url;
//                 });

//                 // Ajouter les éléments au conteneur
//                 container.appendChild(img);
//                 container.appendChild(title);
//                 container.appendChild(releaseDate);

//                 // Vérifier si l'index est pair pour commencer une nouvelle ligne
//                 if (index % 2 === 0) {
//                     rowDiv = document.createElement('div');
//                     rowDiv.className = 'image-row'; // Stylisez cette classe selon vos besoins
//                     imgContainer.appendChild(rowDiv);
//                 }

//                 // Ajouter le conteneur à la ligne actuelle
//                 rowDiv.appendChild(container);
//             }
//         });
//     }
// });
