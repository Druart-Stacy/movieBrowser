// Importation des modules et styles
// import './layout.js';
import './movies.js';
import './css/style.css';
import './layout.js';

// // Fonction pour récupérer les données depuis l'API
// async function fetchImageData() {
//     const apiKey = '3bdbbc7774806ef322aac777bb786e18'; 
//     const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYmRiYmM3Nzc0ODA2ZWYzMjJhYWM3NzdiYjc4NmUxOCIsIm5iZiI6MTcyMDE2NzYzNS45NDk1MDEsInN1YiI6IjY2ODY5MjdiOTc5ZDgwYjg1OTFhNmJjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n3nr8T4O4nIU5_CMmNX8KDHJbTi_JPGycyn5PwEyo9s'; // Remplacez par votre jeton d'accès
    
//     try {
//         const response = await fetch('https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}`;', {
//             headers: {
//                 Authorization: `Bearer ${accessToken}`
//             }
//         });
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error('Erreur lors de la récupération des données de l\'API', error);
//         return [];
//     }
// }

// // Fonction pour créer et insérer les éléments d'image dans le DOM
// function displayImages(images) {
//     const imageContainer = document.getElementById('image-container');
//     imageContainer.innerHTML = ''; // Clear any existing content
//     images.forEach(image => {
//         const imageItem = document.createElement('div');
//         imageItem.className = 'image-item';
        
//         const imgElement = document.createElement('img');
//         imgElement.src = image.url;
//         imgElement.alt = image.description || 'Image';

//         imageItem.appendChild(imgElement);
//         imageContainer.appendChild(imageItem);
//     });
// }

// // Initialisation
// async function init() {
//     const imageData = await fetchImageData();
//     if (imageData && imageData.length > 0) {
//         displayImages(imageData);
//     } else {
//         console.log('Aucune image trouvée.');
//     }
// }

// // Appeler la fonction d'initialisation lors du chargement de la page
// document.addEventListener('DOMContentLoaded', init);
