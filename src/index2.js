import './layout.js';
document.addEventListener("DOMContentLoaded", function() {
    const apiKey = '3bdbbc7774806ef322aac777bb786e18'; 
    const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYmRiYmM3Nzc0ODA2ZWYzMjJhYWM3NzdiYjc4NmUxOCIsIm5iZiI6MTcyMDE2NzYzNS45NDk1MDEsInN1YiI6IjY2ODY5MjdiOTc5ZDgwYjg1OTFhNmJjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n3nr8T4O4nIU5_CMmNX8KDHJbTi_JPGycyn5PwEyo9s';

    function getPopularMovies() {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        .then(response => response.json())
        .then(data => {
            displayImages(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }

    function displayImages(data) {
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

    getPopularMovies();
});


// import './layout.js';
// document.addEventListener("DOMContentLoaded", function() {
//     // API Configuration
//     const apiKey = '3bdbbc7774806ef322aac777bb786e18'; 
//     const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYmRiYmM3Nzc0ODA2ZWYzMjJhYWM3NzdiYjc4NmUxOCIsIm5iZiI6MTcyMDE2NzYzNS45NDk1MDEsInN1YiI6IjY2ODY5MjdiOTc5ZDgwYjg1OTFhNmJjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n3nr8T4O4nIU5_CMmNX8KDHJbTi_JPGycyn5PwEyo9s'; // Remplacez par votre jeton d'accès

//     // Fonction pour récupérer les films populaires
//     function getPopularMovies() {
//         fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`, {
//             headers: {
//                 Authorization: `Bearer ${accessToken}`
//             }
//         })
//         .then(response => response.json())
//         .then(data => {
//             displayImages(data);
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//         });
//     }

//     // Fonction pour afficher les images
//     function displayImages(data) {
//         const imgContainer = document.getElementById('img-container');
//         imgContainer.innerHTML = '';

//         data.results.forEach(film => {
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
//                 imgContainer.appendChild(container);
//             }
//         });
//     }

//     // Charger les films populaires lors du chargement de la page
//     getPopularMovies();
// });
