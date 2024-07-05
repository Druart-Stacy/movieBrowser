import './movies.js'; // Importation de movies.js si nécessaire
import './css/style.css'; // Importation de style.css depuis le répertoire src


// index.js

// Fonction pour afficher les résultats de recherche de films
function afficherResultats(data) {
    const movieGrid = document.getElementById('movieGrid');

    if (data.results.length > 0) {
        // Effacer le contenu précédent de la grille
        movieGrid.innerHTML = '';

        // Parcourir les résultats pour afficher les films
        data.results.forEach(film => {
            // Créer un élément pour chaque film
            const movieElement = document.createElement('div');
            movieElement.classList.add('movie');

            // Créer une image personnalisée (exemple avec une image statique)
            const img = document.createElement('img');
            img.src = 'images/film-placeholder.png'; // Chemin vers votre image spécifique
            img.alt = film.title;
            movieElement.appendChild(img);

            // Ajouter le titre du film
            const title = document.createElement('h2');
            title.textContent = film.title;
            movieElement.appendChild(title);

            // Ajouter la description du film
            const overview = document.createElement('p');
            overview.textContent = film.overview;
            movieElement.appendChild(overview);

            // Ajouter la date de sortie du film
            const releaseDate = document.createElement('p');
            releaseDate.textContent = `Date de sortie: ${film.release_date}`;
            movieElement.appendChild(releaseDate);

            // Ajouter l'élément du film à la grille principale
            movieGrid.appendChild(movieElement);
        });
    } else {
        // Afficher un message si aucun résultat n'est trouvé
        movieGrid.innerHTML = '<p>Aucun résultat trouvé.</p>';
    }
}
