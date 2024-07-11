// // import './layout.js';
// document.addEventListener("DOMContentLoaded", function() {
//     const apiKey = '3bdbbc7774806ef322aac777bb786e18';
//     const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYmRiYmM3Nzc0ODA2ZWYzMjJhYWM3NzdiYjc4NmUxOCIsIm5iNiI6MTcyMDE2NzYzNS45NDk1MDEsInN1YiI6IjY2ODY5MjdiOTc5ZDgwYjg1OTFhNmJjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n3nr8T4O4nIU5_CMmNX8KDHJbTi_JPGycyn5PwEyo9s';

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
//             displayImages(data);
//         })
//         .catch(error => {
//             console.error('Fetch operation failed:', error);
//         });
//     }

//     function displayImages(data) {
//         const imgContainer = document.getElementById('img-container');
//         imgContainer.innerHTML = '';

//         let rowDiv; 

//         data.results.forEach((film, index) => {
//             if (film.poster_path) {
//                 const container = document.createElement('div');
//                 container.className = 'image-container';

//                 const img = document.createElement('img');
//                 img.src = `https://image.tmdb.org/t/p/w500${film.poster_path}`;
//                 img.alt = film.title;
//                 img.className = 'movie-poster';

//                 const title = document.createElement('h3');
//                 title.textContent = film.title;
//                 title.className = 'movie-title';

//                 const releaseDate = document.createElement('p');
//                 releaseDate.textContent = `Release date: ${film.release_date}`;
//                 releaseDate.className = 'release-date';

//                 container.addEventListener('click', () => {
//                     const url = `details.html?title=${encodeURIComponent(film.title)}&description=${encodeURIComponent(film.overview)}&src=${encodeURIComponent(img.src)}`;
//                     window.location.href = url;
//                 });

//                 container.appendChild(img);
//                 container.appendChild(title);
//                 container.appendChild(releaseDate);

//                 if (index % 2 === 0) {
//                     rowDiv = document.createElement('div');
//                     rowDiv.className = 'image-row';
//                     imgContainer.appendChild(rowDiv);
//                 }

//                 rowDiv.appendChild(container);
//             }
//         });
//     }
// });
