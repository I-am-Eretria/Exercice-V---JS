// Créer un fichier JS parcourant les citations afin de les afficher


document.addEventListener("DOMContentLoaded", function () {

    // Sélectionner le conteneur des cartes et le modèle de carte
    const quotesContainer = document.querySelector(".cards");           //  Conteneur de cartes
    const cardTemplate = document.querySelector(".card");               // Modèle de carte de base


    // Parcourir chaque objet dans le tableau quotes
    quotes.forEach((quoteObj) => {


            // Cloner le modèle de carte
            const cardClone = cardTemplate.cloneNode(true);

            // Ajouter la citation et l'auteur dans le clone
            cardClone.querySelector(".quote").textContent = `“${quoteObj.quote}”`;
            cardClone.querySelector(".author").textContent = `${quoteObj.author}`;

            // Sélectionner l'icône de favori dans le clone
            const favorisIcon = cardClone.querySelector(".fa-bookmark");

        

            // Écouteur d'événement pour le clic sur l'icône de favori
            favorisIcon.addEventListener("click", () => {
                    // Basculer entre favori/non-favori
                    favorisIcon.classList.toggle("fa-solid");

                    // Enregistrer l'état du favori dans `localStorage`
                    const isNowFavorited = favorisIcon.classList.contains("fa-solid");      // isNowFavorited vérifie si la classe fa-solid est présente. Si elle est présente, la citation est en favori.
                    localStorage.setItem(favorisKey, isNowFavorited);                       // enregistrement ici dans le localStorage
                });                     
                // isNowFavorited est sauvegardée dans le localStorage sous la clef favorisKey  -> localStorage.setItem(key, value)


        // Appliquer l'état de favori depuis `localStorage` au chargement
        const favorisKey = `favori_${quoteObj.id}`;                         // Clef unique pour chaque citation 
        const isFavorited = localStorage.getItem(favorisKey) === "true";    // === : même valeur et même type / récupère état enregistré pour la clef
    
        if (isFavorited) {                                                  // Si true : citation en favori
            favorisIcon.classList.add("fa-solid");                          // classList.add("fa-solid") ajoute "fa-solid" dans la classe
        }
        //  -> va alors mettre l'icone "pleine" pour indiquer qu'elle est en favori
    
        
        // Ajouter le clone au conteneur principal
        quotesContainer.appendChild(cardClone);
    });



    // Retirer le modèle de base pour éviter un doublon
    cardTemplate.remove();
});




/*  CODE DE BASE POUR LA PARTIE FAVORIS (UNIQUEMENT)


// Sélection de l'icône bookmark
const favoris = document.querySelector(".fa-bookmark");

// Écouteur d'événement pour le clic sur l'icône bookmark
favoris.addEventListener("click", () => {
    // Toggle de la classe 'fa-solid' pour changer entre favori/non-favori
    favoris.classList.toggle("fa-solid");

    // Enregistrer l'état du favori (true si favori, false sinon)
    const isFavorited = favoris.classList.contains("fa-solid");
    localStorage.setItem("favoris", isFavorited);
});

// Fonction pour appliquer l'état favori au chargement de la page
function appliquerFavoris() {
    // Récupérer l'état de favori depuis localStorage
    const isFavorited = localStorage.getItem("favoris") === "true";  // === : même valeur et même type
    
    // Si 'isFavorited' est vrai, ajouter la classe 'fa-solid' pour l'afficher comme favori
    if (isFavorited) {
        favoris.classList.add("fa-solid");
    } else {
        favoris.classList.remove("fa-solid");
    }
}

// Appel de la fonction pour appliquer l'état favori au chargement de la page
appliquerFavoris();

*/




/* CODE DE BASE POUR LA PARTIE CARDS (UNIQUEMENT)


// Créer un fichier JS parcourant les citations afin de les afficher

document.addEventListener("DOMContentLoaded", function () {
    // Sélectionner le conteneur qui contient la structure de base des citations
    const quotesContainer = document.querySelector("body");
    const cardTemplate = document.querySelector(".cards"); // Modèle de base

    // Parcourir les citations et cloner le modèle pour chaque citation
    for (let author in quotes) {                                            //for...in : Cette boucle parcourt toutes les clés de l'objet quotes.
        if (quotes.hasOwnProperty(author)) {
            // Cloner la structure de base
            const cardClone = cardTemplate.cloneNode(true);

            // Remplir les éléments clonés avec la citation et l'auteur
            cardClone.querySelector(".quote").textContent = `“${quotes[author]}”`;  // sélectionne p.quote dans le clone pour y insérer le texte de la citation correspondant à l'auteur actuel
            cardClone.querySelector(".author").textContent = author;                // sélectionne le paragraphe p.author dans le clone et on y insère le nom de l’auteur actuel

            // Ajouter le clone au conteneur principal
            quotesContainer.appendChild(cardClone);
            //appendChild : Cette méthode ajoute chaque cardClone (c'est-à-dire une nouvelle carte citation) en tant qu’enfant de quotesContainer (le body dans ce cas), ce qui les affiche les uns après les autres dans la page.
        }
    }

    // Retirer le modèle de base initial pour éviter un doublon
    cardTemplate.remove();
});

*/
