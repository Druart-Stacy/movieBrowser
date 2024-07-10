
// document.addEventListener("DOMContentLoaded", function() {
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
// });

// // document.addEventListener("DOMContentLoaded", function() {
// //     // Création du header
// //     const header = document.createElement('header');
// //     header.classList.add('header');

// //     // Création du contenu pour le header
// //     const movieBrowser = document.getElementById('movie-browser');
// //     const categoryNav = document.getElementById('category-nav');

// //     const part1 = document.createElement("span");
// //     part1.innerText = 'Movie';
// //     part1.style.color = 'orange';

// //     const part2 = document.createElement("span");
// //     part2.innerText = 'Browser';
// //     part2.style.color = 'white';

// //     if (movieBrowser) {
// //         movieBrowser.appendChild(part1);
// //         movieBrowser.appendChild(part2);
// //     }

// //     // Création des liens pour les catégories de films
// //     const categories = ['Fantasy', 'Horror', 'Science Fiction', 'Documentary'];
// //     categories.forEach(category => {
// //         const link = document.createElement("a");
// //         link.setAttribute("href", "#");
// //         link.innerText = category;
// //         if (categoryNav) {
// //             categoryNav.appendChild(link);
// //         }
// //     });

// //     // Ajouter le header au début du body
// //     document.body.prepend(header);

// //     // Création du footer
// //     const footer = document.createElement('footer');
// //     footer.classList.add('footer');

// //     // Créer un contenu pour le pied de page
// //     const footerContent = `
// //         <div class="iconfooter">
// //             <a href="index.html">
// //                 <img src="footer/home.svg" class="iconfooter" alt="Home">
// //             </a>
// //             <a href="recherche.html">
// //                 <img src="footer/recherche.svg" class="iconfooter" alt="Search">
// //             </a>
// //             <a href="compte.html">
// //                 <img src="footer/compte.svg" class="iconfooter" alt="Account">
// //             </a>
// //         </div>
// //     `;

// //     // Insérer le contenu dans le pied de page
// //     footer.innerHTML = footerContent;

// //     // Ajouter le pied de page à la fin du body
// //     document.body.appendChild(footer);
// // });
