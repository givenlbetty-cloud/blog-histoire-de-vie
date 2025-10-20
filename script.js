document.addEventListener('DOMContentLoaded', () => {

    // --- DATABASE SIMULATION ---
    const MauveAccent = '#60a5fa'; // NEW: Light Blue
    const BlueAccent = '#5C6BC0';  // Corresponds to --tertiary-accent
    let mockStories = {}; // Data will be loaded from stories.json
    
    // --- LOGIQUE DE NAVIGATION et RENDER ---

    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');
    const recitsList = document.getElementById('recits-list'); // Liste complète
    const recitsMiniList = document.getElementById('recits-mini-list'); // Liste Accueil
    const mainContent = document.querySelector('main');

    // Function to fetch stories from JSON file
    async function loadStoriesData() {
        try {
            const response = await fetch('stories.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            mockStories = await response.json();
            initializeApp(); // Initialize the app after data is loaded
        } catch (error) {
            console.error("Could not load stories:", error);
        }
    }

    // Initialize the application
    function initializeApp() {
        // Initial render
        activatePage('accueil');

        // Event Listeners
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                activatePage(targetId);
            });
        });

        mainContent.addEventListener('click', (e) => {
            const miniCard = e.target.closest('.mini-clickable-card');
            if (miniCard) {
                e.preventDefault();
                const storyId = miniCard.dataset.storyId;
                loadStory(storyId);
                activatePage('single-story');
                return;
            }

            const link = e.target.closest('.read-story-link');
            if (link) {
                e.preventDefault();
                const storyId = link.dataset.storyId;
                loadStory(storyId);
                activatePage('single-story');
            }
        });

        const backLink = document.querySelector('#single-story .back-link');
        if (backLink) {
            backLink.addEventListener('click', (e) => {
                e.preventDefault();
                activatePage('recits');
            });
        }
    }

    // Fonction pour générer une carte d'histoire (compatible Tailwind)
    function createStoryCard(id, story, isMini = false) {
        const card = document.createElement('div');
        
        // Classes Tailwind pour la carte
        card.classList.add('p-6', 'rounded-xl', 'shadow-xl', 'bg-gray-800', 'border-t-4', 'transition', 'duration-300', 'hover:bg-gray-700', 'transform', 'hover:scale-[1.02]');
        
        // Détermination des couleurs
        const borderColor = MauveAccent; // NOUVEAU: Bleu Clair
        const tagColor = isMini ? BlueAccent : MauveAccent;
        const linkColor = MauveAccent; // NOUVEAU: Bleu Clair
        card.style.borderColor = borderColor;

        let contentHTML = `
            <p class="text-sm font-semibold mb-3 block" style="color: ${tagColor};">${story.tag}</p>
            <h3 class="text-xl font-bold text-white mb-3 header-title">${story.title}</h3>
            <p class="text-gray-400 mb-4 line-clamp-5">${story.excerpt}</p>
        `;

        if (isMini) {
            // REND LA CARTE ENTIÈRE CLICABLE POUR LA MINI-LISTE
            card.setAttribute('data-story-id', id);
            card.classList.add('cursor-pointer', 'mini-clickable-card'); // Classe pour le listener global
            card.innerHTML = contentHTML; 
        } else {
            // Lien <a> explicite pour la liste intégrale
            
            // CORRECTION: Logique des liens améliorée
            let linkText;
            if (id === '10') {
                linkText = "Lire le Chapitre 1 →";
            } else if (id === '11') {
                linkText = "Lire le Chapitre 2 →";
            } else if (id === '12') {
                linkText = "Lire la Conclusion →";
            } else {
                linkText = "Lire le récit →"; // Pour les IDs 2, 3, 4
            }

            contentHTML += `<a href="#single-story" data-story-id="${id}" class="read-story-link inline-block font-semibold mt-3 hover:underline" style="color: ${linkColor};">${linkText}</a>`;
            card.innerHTML = contentHTML;
        }

        return card;
    }
    
    // Rendu des cartes sur la PAGE D'ACCUEIL (Mini-Liste)
    function renderRecitsMiniList() {
        if (!recitsMiniList) return; 
        recitsMiniList.innerHTML = '';
        Object.keys(mockStories).forEach(id => {
            // On exclut l'histoire en vedette (ID 10) et ses parties (11, 12)
            if (id !== '10' && id !== '11' && id !== '12') { 
                const story = mockStories[id];
                recitsMiniList.appendChild(createStoryCard(id, story, true)); // 'true' active le mode mini
            }
        });
    }

    // Fonction pour générer dynamiquement les cartes d'histoires pour la page #recits
    function renderRecitsList() {
        if (!recitsList) return;
        recitsList.innerHTML = ''; 

        // Rendu des nouvelles histoires (2, 3, 4)
        ['2', '3', '4'].forEach(id => {
             const story = mockStories[id];
             recitsList.appendChild(createStoryCard(id, story, false));
        });
        
         // Rendu de toutes les parties de l'histoire sérialisée (10, 11, 12)
        ['10', '11', '12'].forEach(id => {
             const story = mockStories[id];
             recitsList.appendChild(createStoryCard(id, story, false));
        });
    }

    // Fonction pour activer une page et mettre à jour la navigation
    function activatePage(targetId) {
        pages.forEach(page => {
            const isActive = page.id === targetId;
            page.classList.toggle('active', isActive);
        });

        navLinks.forEach(item => {
            const linkTarget = item.getAttribute('href').substring(1);
            const isTarget = linkTarget === targetId;
            item.classList.toggle('active', isTarget);
        });

        // Appeler les fonctions de rendu appropriées
        if (targetId === 'accueil') {
            renderRecitsMiniList(); // Charge les récits sur l'accueil
        }
        if (targetId === 'recits') {
            renderRecitsList(); // Charge tous les récits
        }
        window.scrollTo(0, 0);
    }
    
    // Fonction pour charger le contenu de l'histoire simulée
    function loadStory(id) {
        const story = mockStories[id];
        document.getElementById('single-story-title').innerHTML = story ? story.title : "Histoire non trouvée.";
        document.getElementById('single-story-content').innerHTML = story ? story.content : `<p>Désolé, cette histoire (ID: ${id}) n'a pas encore de contenu détaillé.</p>`;
    }

    // Start loading the data
    loadStoriesData();
});