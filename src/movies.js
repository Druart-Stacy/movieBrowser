document.addEventListener("DOMContentLoaded", function() {
    // Création du header et du menu de navigation
    const movieBrowser = document.getElementById('movie-browser');
    const categoryNav = document.getElementById('category-nav');

    //création du footer
    const footer=document.getElementById('footer');
    /////////////////////////////////////////////////finir le footer/////////////////////////////////////////////////////////////////

    // Texte à afficher avec couleurs différentes
    const part1 = document.createElement("span");
    part1.innerText = 'Movie';
    part1.style.color = 'orange';

    const part2 = document.createElement("span");
    part2.innerText = 'Browser';
    part2.style.color = 'white';

    // Ajouter les parties au MovieBrowser
    movieBrowser.appendChild(part1);
    movieBrowser.appendChild(part2);

    // Création des liens pour les catégories de films
    const categories = ['Fantasy', 'Horror', 'Science Fiction', 'Documentaire'];
    categories.forEach(category => {
        const link = document.createElement("a");
        link.setAttribute("href", "#");
        link.innerText = category;
        categoryNav.appendChild(link);
    });

    // API
    const apiKey = '3bdbbc7774806ef322aac777bb786e18'; // Remplacez par votre clé API
    const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYmRiYmM3Nzc0ODA2ZWYzMjJhYWM3NzdiYjc4NmUxOCIsIm5iZiI6MTcyMDE2NzYzNS45NDk1MDEsInN1YiI6IjY2ODY5MjdiOTc5ZDgwYjg1OTFhNmJjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n3nr8T4O4nIU5_CMmNX8KDHJbTi_JPGycyn5PwEyo9s'; // Remplacez par votre jeton d'accès en lecture

    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');

    searchForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const query = searchInput.value;
        if (query) {
            searchMovies(query);
        }
    });

    function searchMovies(query) {
        const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}`;

        fetch(apiUrl, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur réseau : ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log(data); // Affiche les données dans la console
            afficherResultats(data);
            afficherImages(data);
        })
        .catch(error => {
            console.error('Il y a eu un problème avec l\'opération fetch :', error);
        });
    }

    function afficherResultats(data) {
        const resultDiv = document.getElementById('result');
        if (data.results.length > 0) {
            resultDiv.innerHTML = data.results.map(film => `
                <div>
                    <h2>${film.title}</h2>
                    <p>${film.overview}</p>
                    <p><strong>Date de sortie:</strong> ${film.release_date}</p>
                </div>
            `).join('');
        } else {
            resultDiv.innerHTML = '<p>Aucun résultat trouvé.</p>';
        }
    }

    function afficherImages(data) {
        const imgContainer = document.getElementById('img-container');
        imgContainer.innerHTML = ''; // Clear previous images
        data.results.forEach(film => {
            if (film.poster_path) {
                const img = document.createElement('img');
                img.src = `https://image.tmdb.org/t/p/w500${film.poster_path}`;
                img.alt = film.title;
                img.style.margin = '10px';
                img.style.width = '200px'; // Adjust size as needed
                imgContainer.appendChild(img);
            }
        });
    }
});
