// API keys et jetons d'accès
const apiKey = '3bdbbc7774806ef322aac777bb786e18';
const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYmRiYmM3Nzc0ODA2ZWYzMjJhYWM3NzdiYjc4NmUxOCIsIm5iZiI6MTcyMDE2NzYzNS45NDk1MDEsInN1YiI6IjY2ODY5MjdiOTc5ZDgwYjg1OTFhNmJjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n3nr8T4O4nIU5_CMmNX8KDHJbTi_JPGycyn5PwEyo9s';

// Chargement des films populaires au chargement de la page
document.addEventListener("DOMContentLoaded", function() {
    getPopularMovies(); // Charge les films populaires par défaut
    createHeader(); // Crée l'en-tête
    createFooter(); // Crée le pied de page
});

// Gestion du formulaire de recherche
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

if (searchForm) {
    searchForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const searchTerm = searchInput.value.trim();
        if (searchTerm !== '') {
            searchMovies(searchTerm);
        } else {
            getPopularMovies(); // Recherche les films populaires si aucun terme n'est saisi
        }
    });
}

// Fonction pour récupérer les films populaires
function getPopularMovies() {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
    .then(response => response.json())
    .then(data => {
        displayMovies(data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}

// Fonction pour rechercher des films par terme de recherche
function searchMovies(query) {
    const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}`;

    fetch(apiUrl, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
    .then(response => response.json())
    .then(data => {
        displayMovies(data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}

// Fonction pour afficher les films dans le conteneur d'images
function displayMovies(data) {
    const imgContainer = document.getElementById('img-container');
    imgContainer.innerHTML = '';

    data.results.forEach(movie => {
        if (movie.poster_path) {
            const container = document.createElement('div');
            container.className = 'image-container';

            const img = document.createElement('img');
            img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
            img.alt = movie.title;
            img.className = 'movie-poster';

            const title = document.createElement('h3');
            title.textContent = movie.title;
            title.className = 'movie-title';

            const releaseDate = document.createElement('p');
            releaseDate.textContent = `Release date: ${movie.release_date}`;
            releaseDate.className = 'release-date';

            container.addEventListener('click', () => {
                const url = `info.html?title=${encodeURIComponent(movie.title)}&description=${encodeURIComponent(movie.overview)}&src=${encodeURIComponent(img.src)}`;
                window.location.href = url;
            });

            container.appendChild(img);
            container.appendChild(title);
            container.appendChild(releaseDate);
            imgContainer.appendChild(container);
        }
    });
}

// Fonction pour créer le header

function createHeader() {
    const header = document.createElement('header');
    header.classList.add('header');

    const movieBrowser = document.getElementById('movie-browser');
    movieBrowser.id = 'movie-browser';
    const categoryNav = document.getElementById('category-nav');
    
    const part1 = document.createElement("span");
    part1.innerText = 'Movie';
    part1.style.color = 'orange';

    const part2 = document.createElement("span");
    part2.innerText = 'Browser';
    part2.style.color = 'white';
    movieBrowser.appendChild(part1);
    movieBrowser.appendChild(part2);
    header.appendChild(movieBrowser);
    
         

    const categories = ['Fantasy', 'Horror', 'Science Fiction', 'Documentary'];
    categories.forEach(category => {
        const link = document.createElement("a");
        link.setAttribute("href", "#");
        link.innerText = category;
        if (categoryNav) {
            categoryNav.appendChild(link);
        }
    });

    document.body.prepend(header);
}

    //  Fonction pour créer le footer
 function createFooter() {
     const footer = document.createElement('footer');
     footer.classList.add('footer');

     const footerContent = `
         <div class="iconfooter">
             <a href="index.html">
                 <img src="footer/home.svg" class="iconfooter" alt="Home">
             </a>
             <a href="recherche.html">
                 <img src="footer/recherche.svg" class="iconfooter" alt="Search">
            </a>
             <a href="compte.html">
                 <img src="footer/compte.svg" class="iconfooter" alt="Account">
             </a>
         </div>
     `;

     footer.innerHTML = footerContent;
     document.body.appendChild(footer);
    }



// // Import de layout.js si nécessaire
// // import './layout.js';

// // API keys et jetons d'accès
// const apiKey = '3bdbbc7774806ef322aac777bb786e18';
// const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYmRiYmM3Nzc0ODA2ZWYzMjJhYWM3NzdiYjc4NmUxOCIsIm5iZiI6MTcyMDE2NzYzNS45NDk1MDEsInN1YiI6IjY2ODY5MjdiOTc5ZDgwYjg1OTFhNmJjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n3nr8T4O4nIU5_CMmNX8KDHJbTi_JPGycyn5PwEyo9s';

// // Chargement des films populaires au chargement de la page
// document.addEventListener("DOMContentLoaded", function() {
//     getPopularMovies(); // Charge les films populaires par défaut
// });

// // Gestion du formulaire de recherche
// const searchForm = document.getElementById('search-form');
// const searchInput = document.getElementById('search-input');

// if (searchForm) {
//     searchForm.addEventListener('submit', function(event) {
//         event.preventDefault();
//         const searchTerm = searchInput.value.trim();
//         if (searchTerm !== '') {
//             searchMovies(searchTerm);
//         } else {
//             getPopularMovies(); // Recherche les films populaires si aucun terme n'est saisi
//         }
//     });
// }

// // Fonction pour récupérer les films populaires
// function getPopularMovies() {
//     fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`, {
//         headers: {
//             Authorization: `Bearer ${accessToken}`
//         }
//     })
//     .then(response => response.json())
//     .then(data => {
//         displayMovies(data);
//     })
//     .catch(error => {
//         console.error('Error fetching data:', error);
//     });
// }

// // Fonction pour rechercher des films par terme de recherche
// function searchMovies(query) {
//     const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}`;

//     fetch(apiUrl, {
//         headers: {
//             Authorization: `Bearer ${accessToken}`
//         }
//     })
//     .then(response => response.json())
//     .then(data => {
//         displayMovies(data);
//     })
//     .catch(error => {
//         console.error('Error fetching data:', error);
//     });
// }

// // Fonction pour afficher les films dans le conteneur d'images
// function displayMovies(data) {
//     const imgContainer = document.getElementById('img-container');
//     imgContainer.innerHTML = '';

//     data.results.forEach(movie => {
//         if (movie.poster_path) {
//             const container = document.createElement('div');
//             container.className = 'image-container';

//             const img = document.createElement('img');
//             img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
//             img.alt = movie.title;
//             img.className = 'movie-poster';

//             const title = document.createElement('h3');
//             title.textContent = movie.title;
//             title.className = 'movie-title';

//             const releaseDate = document.createElement('p');
//             releaseDate.textContent = `Release date: ${movie.release_date}`;
//             releaseDate.className = 'release-date';

//             container.addEventListener('click', () => {
//                 const url = `info.html?title=${encodeURIComponent(movie.title)}&description=${encodeURIComponent(movie.overview)}&src=${encodeURIComponent(img.src)}`;
//                 window.location.href = url;
//             });

//             container.appendChild(img);
//             container.appendChild(title);
//             container.appendChild(releaseDate);
//             imgContainer.appendChild(container);
//         }
//     });
// }

// // Création du header et du footer
// document.addEventListener("DOMContentLoaded", function() {
//     createHeader();
//     createFooter();
// });

// // Fonction pour créer le header
// function createHeader() {
//     const header = document.createElement('header');
//     header.classList.add('header');

//     const movieBrowser = document.getElementById('movie-browser');
//     const categoryNav = document.getElementById('category-nav');

//     const part1 = document.createElement("span");
//     part1.innerText = 'Movie';
//     part1.style.color = 'orange';

//     const part2 = document.createElement("span");
//     part2.innerText = 'Browser';
//     part2.style.color = 'white';

//     if (movieBrowser) {
//         movieBrowser.appendChild(part1);
//         movieBrowser.appendChild(part2);
//     }

//     const categories = ['Fantasy', 'Horror', 'Science Fiction', 'Documentary'];
//     categories.forEach(category => {
//         const link = document.createElement("a");
//         link.setAttribute("href", "#");
//         link.innerText = category;
//         if (categoryNav) {
//             categoryNav.appendChild(link);
//         }
//     });

//     document.body.prepend(header);
// }

// // Fonction pour créer le footer
// function createFooter() {
//     const footer = document.createElement('footer');
//     footer.classList.add('footer');

//     const footerContent = `
//         <div class="iconfooter">
//             <a href="index.html">
//                 <img src="footer/home.svg" class="iconfooter" alt="Home">
//             </a>
//             <a href="recherche.html">
//                 <img src="footer/recherche.svg" class="iconfooter" alt="Search">
//             </a>
//             <a href="compte.html">
//                 <img src="footer/compte.svg" class="iconfooter" alt="Account">
//             </a>
//         </div>
//     `;

//     footer.innerHTML = footerContent;
//     document.body.appendChild(footer);
// }
