// Écouteur d'événement pour le chargement du DOM
document.addEventListener("DOMContentLoaded", function() {
    getPopularMovies(); // Charge les films populaires par défaut
    createHeader(); // Crée le header avec les catégories
    createFooter(); // Crée le footer avec les liens

    // Gestion du formulaire de recherche
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');

    if (searchForm) {
        searchForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Empêche le rechargement de la page
            const searchTerm = searchInput.value.trim();
            if (searchTerm !== '') {
                searchMovies(searchTerm); // Recherche les films correspondant au terme saisi
            } else {
                getPopularMovies(); // Recherche les films populaires si aucun terme n'est saisi
            }
        });
    }

    // Ajout d'un gestionnaire d'événements aux liens de catégorie
    const categoryNav = document.getElementById('category-nav');
    if (categoryNav) {
        const categoryLinks = categoryNav.querySelectorAll('a');
        categoryLinks.forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault(); // Empêche le comportement par défaut du lien
                const category = this.innerText; // Récupère le texte du lien (par exemple 'Fantasy')
                filterMoviesByCategory(category); // Filtre les films par catégorie
            });
        });
    }
});

// Fonction pour obtenir les films populaires
function getPopularMovies() {
    const apiKey = '3bdbbc7774806ef322aac777bb786e18';
    const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYmRiYmM3Nzc0ODA2ZWYzMjJhYWM3NzdiYjc4NmUxOCIsIm5iZiI6MTcyMDE2NzYzNS45NDk1MDEsInN1YiI6IjY2ODY5MjdiOTc5ZDgwYjg1OTFhNmJjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n3nr8T4O4nIU5_CMmNX8KDHJbTi_JPGycyn5PwEyo9s';

    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
    .then(response => response.json())
    .then(data => {
        displayMovies(data); // Affiche les films populaires
    })
    .catch(error => {
        console.error('Erreur lors de la récupération des données :', error);
    });
}


function displayMovies(data) {
    const imgContainer = document.getElementById('img-container');
    if (imgContainer) {
        imgContainer.innerHTML = ''; // Réinitialise le contenu

        data.results.forEach(movie => {
            if (movie.poster_path) {
                const container = document.createElement('div');
                container.className = 'image-container';

                const img = document.createElement('img');
                img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
                img.alt = movie.title;
                img.className = 'movie-poster';

                // Ajoute un événement pour rediriger vers une page de détails lors du clic
                img.addEventListener('click', () => {
                    // Utiliser localStorage pour stocker les détails du film
                    localStorage.setItem('selectedMovie', JSON.stringify(movie));
                    // Rediriger vers la page de détails
<<<<<<< HEAD
                    window.location.href = 'details.html';
=======
                    window.location.href = 'showMovieDetailsSeul';
>>>>>>> 8827826 (maj)
                });

                container.appendChild(img);
                imgContainer.appendChild(container);
            }
        });
    }
}
document.addEventListener("DOMContentLoaded", function() {
<<<<<<< HEAD
    showMovieDetails(); // Appeler cette fonction lorsque la page de détails est chargée
=======
    showMovieDetailsSeul(); // Appeler cette fonction lorsque la page de détails est chargée
    showMovieDetails(); // Appeler cette fonction lorsque la page de détails est chargée
    
>>>>>>> 8827826 (maj)
});

function showMovieDetails() {
    const movieDetailsContainer = document.getElementById('movie-details');
    const movie = JSON.parse(localStorage.getItem('selectedMovie')); // Récupère les détails du film depuis localStorage

    if (movie) {
        movieDetailsContainer.innerHTML = ''; // Réinitialise le contenu

        const title = document.createElement('h3');
        title.textContent = movie.title;

        const releaseDate = document.createElement('p');
        releaseDate.textContent = `Date de sortie : ${movie.release_date}`;

        const description = document.createElement('p');
        description.textContent = movie.overview;

        const img = document.createElement('img');
        img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        img.alt = movie.title;
        img.className = 'movie-poster';

        movieDetailsContainer.appendChild(img);
        movieDetailsContainer.appendChild(title);
        movieDetailsContainer.appendChild(releaseDate);
        movieDetailsContainer.appendChild(description);

        // Ajoute une classe active pour afficher les détails
        movieDetailsContainer.classList.add('active');
    }
}


// Fonction pour afficher les détails d'un film sur la page de détails
<<<<<<< HEAD
function showMovieDetails3() {
=======
function showMovieDetailsSeul() {
>>>>>>> 8827826 (maj)
    const movieDetailsContainer = document.getElementById('movie-details');
    const movie = JSON.parse(localStorage.getItem('selectedMovie')); // Récupère les détails du film depuis localStorage

    if (movie && movieDetailsContainer) {
        movieDetailsContainer.innerHTML = ''; // Réinitialise le contenu

        const title = document.createElement('h3');
        title.textContent = movie.title;

        const releaseDate = document.createElement('p');
        releaseDate.textContent = `Date de sortie : ${movie.release_date}`;

        const description = document.createElement('p');
        description.textContent = movie.overview;

        const img = document.createElement('img');
        img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        img.alt = movie.title;
        img.className = 'movie-poster';

<<<<<<< HEAD
=======
    
>>>>>>> 8827826 (maj)
        movieDetailsContainer.appendChild(img);
        movieDetailsContainer.appendChild(title);
        movieDetailsContainer.appendChild(releaseDate);
        movieDetailsContainer.appendChild(description);

        // Ajoute une classe active pour afficher les détails
        movieDetailsContainer.classList.add('active');
    }
}

// Fonction pour créer le header
function createHeader() {
    const header = document.createElement('header');
    header.classList.add('header');

    const movieBrowser = document.createElement('div');
    movieBrowser.id = 'movie-browser';
    movieBrowser.textContent = 'Movie Browser';

    const categoryNav = document.createElement('nav');
    categoryNav.id = 'category-nav';

    const categories = ['Fantasy', 'Horror', 'Science Fiction', 'Documentary'];
    categories.forEach(category => {
        const link = document.createElement("a");
        link.setAttribute("href", "#");
        link.innerText = category;
        link.classList.add('category-link'); 
        categoryNav.appendChild(link);
    });

    header.appendChild(movieBrowser);
    header.appendChild(categoryNav);

    document.body.prepend(header); // Ajoute le header au début du body
}

// Fonction pour créer le footer
function createFooter() {
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const iconFooter = document.createElement('div');
    iconFooter.classList.add('iconfooter');

    const homeLink = createFooterLink('index.html', 'footer/home.svg', 'Home');
    const searchLink = createFooterLink('recherche.html', 'footer/recherche.svg', 'Search');
    const accountLink = createFooterLink('compte.html', 'footer/compte.svg', 'Account');

    iconFooter.appendChild(homeLink);
    iconFooter.appendChild(searchLink);
    iconFooter.appendChild(accountLink);

    footer.appendChild(iconFooter);
    document.body.appendChild(footer); // Ajoute le footer à la fin du body
}

// Fonction pour créer un lien de footer
function createFooterLink(href, src, alt) {
    const link = document.createElement('a');
    link.setAttribute('href', href);

    const img = document.createElement('img');
    img.setAttribute('src', src);
    img.setAttribute('class', 'iconfooter');
    img.setAttribute('alt', alt);

    link.appendChild(img);
    return link;
}

// Fonction pour rechercher des films
function searchMovies(query) {
    const apiKey = '3bdbbc7774806ef322aac777bb786e18';
    const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYmRiYmM3Nzc0ODA2ZWYzMjJhYWM3NzdiYjc4NmUxOCIsIm5iZiI6MTcyMDE2NzYzNS45NDk1MDEsInN1YiI6IjY2ODY5MjdiOTc5ZDgwYjg1OTFhNmJjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n3nr8T4O4nIU5_CMmNX8KDHJbTi_JPGycyn5PwEyo9s';
    
    const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}`;

    fetch(apiUrl, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
    .then(response => response.json())
    .then(data => {
        displayMovies(data); // Affiche les films correspondant à la recherche
    })
    .catch(error => {
        console.error('Erreur lors de la récupération des données :', error);
    });
}

// Fonction pour filtrer les films par catégorie
function filterMoviesByCategory(category) {
    const apiKey = '3bdbbc7774806ef322aac777bb786e18';
    const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYmRiYmM3Nzc0ODA2ZWYzMjJhYWM3NzdiYjc4NmUxOCIsIm5iZiI6MTcyMDE2NzYzNS45NDk1MDEsInN1YiI6IjY2ODY5MjdiOTc5ZDgwYjg1OTFhNmJjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n3nr8T4O4nIU5_CMmNX8KDHJbTi_JPGycyn5PwEyo9s';
    const categoryId = getCategoryID(category); // Fonction pour obtenir l'ID de catégorie en fonction du nom

    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${categoryId}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
    .then(response => response.json())
    .then(data => {
        displayMovies(data); // Affiche les films de la catégorie
    })
    .catch(error => {
        console.error('Erreur lors de la récupération des données :', error);
    });
}

// Fonction pour obtenir l'ID de catégorie en fonction du nom
function getCategoryID(category) {
    // Utilisez une table de correspondance ou une API pour obtenir l'ID de catégorie en fonction du nom
    switch (category.toLowerCase()) {
        case 'fantasy':
            return 14;
        case 'horror':
            return 27;
        case 'science fiction':
            return 878;
        case 'documentary':
            return 99;
        case 'documentary2':
            return 99;
        default:
            return ''; // Gérer les erreurs ou les catégories non prises en charge
    }
}
