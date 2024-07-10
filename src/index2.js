// import './layout.js';

// document.addEventListener("DOMContentLoaded", function() {
//     const apiKey = '3bdbbc7774806ef322aac777bb786e18'; 
//     const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYmRiYmM3Nzc0ODA2ZWYzMjJhYWM3NzdiYjc4NmUxOCIsIm5iZiI6MTcyMDE2NzYzNS45NDk1MDEsInN1YiI6IjY2ODY5MjdiOTc5ZDgwYjg1OTFhNmJjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n3nr8T4O4nIU5_CMmNX8KDHJbTi_JPGycyn5PwEyo9s';

//     // Fonction pour récupérer les films populaires ou recherchés
//     function searchMovies(query) {
//         fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}`, {
//             headers: {
//                 Authorization: `Bearer ${accessToken}`
//             }
//         })
//         .then(response => response.json())
//         .then(data => {
//             displayMovies(data);
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//         });
//     }

//     // Fonction pour afficher les films dans le conteneur d'images
//     function displayMovies(data) {
//         const imgContainer = document.getElementById('img-container');
//         imgContainer.innerHTML = '';

//         data.results.forEach(movie => {
//             if (movie.poster_path) {
//                 const container = document.createElement('div');
//                 container.className = 'image-container';

//                 const img = document.createElement('img');
//                 img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
//                 img.alt = movie.title;
//                 img.className = 'movie-poster';

//                 const title = document.createElement('h3');
//                 title.textContent = movie.title;
//                 title.className = 'movie-title';

//                 const releaseDate = document.createElement('p');
//                 releaseDate.textContent = `Release date: ${movie.release_date}`;
//                 releaseDate.className = 'release-date';

//                 container.addEventListener('click', () => {
//                     const url = `details.html?title=${encodeURIComponent(movie.title)}&description=${encodeURIComponent(movie.overview)}&src=${encodeURIComponent(img.src)}`;
//                     window.location.href = url;
//                 });

//                 container.appendChild(img);
//                 container.appendChild(title);
//                 container.appendChild(releaseDate);
//                 imgContainer.appendChild(container);
//             }
//         });
//     }

//     // Gérer la soumission du formulaire de recherche
//     const searchForm = document.getElementById('search-form');
//     const searchInput = document.getElementById('search-input');

//     searchForm.addEventListener('submit', function(event) {
//         event.preventDefault();
//         const searchTerm = searchInput.value.trim();
//         if (searchTerm !== '') {
//             searchMovies(searchTerm);
//         } else {
//             // Rechercher des films populaires si aucun terme n'est saisi
//             getPopularMovies();
//         }
//     });

//     // Fonction pour récupérer les films populaires
//     function getPopularMovies() {
//         fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`, {
//             headers: {
//                 Authorization: `Bearer ${accessToken}`
//             }
//         })
//         .then(response => response.json())
//         .then(data => {
//             displayMovies(data);
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//         });
//     }

//     // Charger les films populaires lors du chargement de la page
//     getPopularMovies();
// });
