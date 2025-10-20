document.addEventListener('DOMContentLoaded', () => {

    // --- MOCK DATA: SIMULATION DE BASE DE DONNÉES ---
    const MauveAccent = '#60a5fa'; // NOUVEAU: Correspond au Bleu Clair
    const BlueAccent = '#5C6BC0';  // Correspond à --tertiary-accent
    
    // Style pour le texte Bleu Clair (Net et Gras)
    const MauveTextStyle = `color: ${MauveAccent}; font-weight: 700;`;
    const BlueLinkStyle = `background-color: ${BlueAccent};`;

    const mockStories = {
        
        // --- HISTOIRES CONSERVÉES (SÉRIALISÉES) ---
        10: {
            title: "L’Absence et la Perte : Chapitre 1 - Le commencement dans la douleur (Partie 1/3)",
            excerpt: "Sa vie fut courte, marquée par l’absence et la douleur dès ses premiers jours. Elle n’a jamais connu son père, puis elle a perdu sa maman...",
            tag: "#DEUIL & RÉSILIENCE",
            content: `
                <h3 class="text-2xl font-semibold mb-3" style="color: ${BlueAccent};">Introduction : L’absence et la perte</h3>
                <p>Il y a des blessures que le temps ne ferme jamais vraiment. La perte de ma sœur en fait partie. Sa vie fut courte, marquée par l’absence et la douleur dès ses premiers jours. Elle n’a jamais connu son père, une absence silencieuse qui laisse toujours une question suspendue dans l’air. Puis, alors qu’elle avait encore besoin d’amour et de repères, elle a perdu sa maman. Deux piliers arrachés, comme si la vie voulait la mettre à l’épreuve avant même qu’elle ait la force de tenir debout seule.</p>
                
                <h3 class="text-2xl font-semibold mt-6 mb-3" style="color: ${BlueAccent};">Chapitre 1 : Le commencement dans la douleur</h3>
                <p>La vie de ma sœur a commencé dans un décor déjà marqué par le manque. Elle est venue au monde sans la présence d’un père, une absence qui a accompagné ses premiers pas comme une ombre silencieuse. Elle aurait eu besoin de son regard, de ses bras, de sa protection, mais le destin en avait décidé autrement.</p>
                <p>Heureusement, il y avait maman. Elle était son univers, son refuge, son soleil. Dans ses bras, ma sœur trouvait ce qui ressemblait à la sécurité, à l’amour inconditionnel qui fait oublier les blessures de l’absence. Mais ce bonheur fragile n’a pas duré. Trop tôt, beaucoup trop tôt, elle a dû dire adieu à celle qui était tout pour elle : sa maman.</p>
                <p>C’est là que sa vie a pris un tournant douloureux. Privée d’un père qu’elle n’avait jamais connu et d’une mère qu’elle aimait de tout son cœur, elle s’est retrouvée face à un monde froid, sans repères. Ce vide a forgé en elle une force silencieuse, mais aussi une profonde tristesse qu’aucun mot ne peut décrire.</p>
                
                <p style="${MauveTextStyle} margin-top: 30px; text-align: center; border-top: 1px solid #ccc; padding-top: 15px;">
                    La suite est disponible ! Lisez le chapitre 2.
                </p>
                <p style="padding-top: 10px; text-align: center;">
                    <a href="#single-story" data-story-id="11" class="read-story-link inline-block text-white font-bold py-2 px-4 rounded-full transition duration-300 hover:opacity-80" style="${BlueLinkStyle}">Accéder à la Partie 2</a>
                </p>
            `
        },
        11: {
            title: "L’Absence et la Perte : Chapitre 2 - Le choc et la résilience (Partie 2/3)",
            excerpt: "La nouvelle de son départ m’a transpercé comme une lame invisible. J'ai été confronté à l'incroyable force nécessaire pour survivre à la douleur la plus vive...",
            tag: "#DEUIL & RÉSILIENCE",
            content: `
                <h3 class="text-2xl font-semibold mb-3" style="color: ${BlueAccent};">Chapitre 2 : Le choc et la résilience</h3>
                <p>La nouvelle de son départ m’a transpercé comme une lame invisible. J'ai été confronté à l'incroyable force nécessaire pour survivre à la douleur la plus vive. J’avais déjà vu ma sœur lutter contre tant d’absences, tant de douleurs, mais je croyais, au fond de moi, qu’elle tiendrait, qu’elle trouverait encore la force de continuer.</p>
                <p>Quand j’ai appris qu’elle n’était plus là, le temps s’est arrêté. Ce n'était pas seulement la perte d'un proche, c'était le rappel brutal que la vie, même après les pires épreuves, peut encore nous surprendre par sa fragilité. Ce moment de choc a été un carrefour : soit je m'effondrais dans la douleur, soit je décidais que sa mémoire devait me donner la force de vivre pleinement pour nous deux.</p>
                <p>La résilience n'est pas l'absence de douleur, mais la capacité de marcher malgré elle. C'est ce que ma sœur m'a appris. </p>
                
                <p style="${MauveTextStyle} margin-top: 30px; text-align: center; border-top: 1px solid #ccc; padding-top: 15px;">
                    Lisez la conclusion sur la force de l'amour.
                </p>
                <p style="padding-top: 10px; text-align: center;">
                    <a href="#single-story" data-story-id="12" class="read-story-link inline-block text-white font-bold py-2 px-4 rounded-full transition duration-300 hover:opacity-80" style="${BlueLinkStyle}">Accéder à la Conclusion</a>
                </p>
            `
        },
        12: {
            title: "L’Absence et la Perte : L’amour qui survit à la mort (Conclusion 3/3)",
            excerpt: "Son absence m'a appris à aimer plus fort ceux qui restent, à voir chaque moment comme un cadeau, et que l'amour ne meurt jamais.",
            tag: "#DEUIL & RÉSILIENCE",
            content: `
                <h3 class="text-2xl font-semibold mb-3" style="color: ${BlueAccent};">Conclusion : L’amour qui survit à la mort</h3>
                <p>Mais peu à peu, j’ai découvert que son absence m’apprenait quelque chose. Elle m’apprenait à aimer plus fort ceux qui restent. Elle m’apprenait à voir chaque moment comme un cadeau. Elle m’apprenait que même les vies les plus courtes laissent une trace indélébile dans le cœur de ceux qui les ont aimées.</p>
                <p>Aujourd’hui encore, son absence me rappelle une vérité simple : la vie est courte, mais l’amour que l’on donne et que l’on reçoit, lui, ne meurt jamais. C'est cette mémoire, cet amour, qui nous donnent la force de continuer le voyage.</p>
                <p class="pt-4 text-center text-lg text-gray-500 italic" style="margin-top: 2rem;">Merci à l'auteure pour ce partage poignant. Votre histoire nous touche profondément.</p>
            `
        },
        
        // --- NOUVELLES HISTOIRES ---
        2: {
            title: "Le Discours de l'Indépendance : Le Poids de la Liberté",
            excerpt: "Le 30 juin 1960, Patrice Lumumba n'a pas seulement parlé au roi des Belges ; il a parlé à l'Afrique. Son discours fut un acte de bravoure qui scella son destin...",
            tag: "#POLITIQUE & HÉRITAGE",
            content: `<p>Le 30 juin 1960, Patrice Lumumba n'a pas seulement parlé au roi des Belges ; il a parlé à l'Afrique. Son discours fut un acte de bravoure qui scella son destin. En osant réclamer la dignité et la souveraineté, il a allumé un feu que ni la prison ni l'assassinat n'ont pu éteindre. Son histoire est celle d'un homme qui a préféré mourir debout que de vivre à genoux pour son peuple.</p>`
        },
        3: {
            title: "De Saul à Paul : La Révélation sur la Route de Damas",
            excerpt: "Il était le persécuteur, l'ennemi juré des premiers chrétiens. Puis, une lumière aveuglante sur une route poussiéreuse a tout changé. La transformation de Saul de Tarse...",
            tag: "#FOI & TRANSFORMATION",
            content: `<p>Il était le persécuteur, l'ennemi juré des premiers chrétiens. Puis, une lumière aveuglante sur une route poussiéreuse a tout changé. La transformation de Saul de Tarse en l'apôtre Paul est peut-être le plus grand récit de rédemption de l'histoire. Il a montré que personne n'est au-delà du changement et que la plus grande opposition peut devenir la plus grande dévotion.</p>`
        },
         4: {
            title: "Au Service des Plus Pauvres : Le Doute et la Dévotion de Mère Teresa",
            excerpt: "Elle a vu le Christ dans les 'indésirables' de Calcutta. Mais ses lettres privées révèlent un profond 'sentiment d'obscurité' et de doute...",
            tag: "#COMPASSION & SERVICE",
            content: `<p>Elle a vu le Christ dans les 'indésirables' de Calcutta. Mais ses lettres privées révèlent un profond 'sentiment d'obscurité' et de doute. Son histoire n'est pas celle d'une foi facile, mais d'un service acharné *malgré* l'absence ressentie de Dieu. Sa véritable force n'était pas son absence de doute, mais sa persévérance à servir dans cette obscurité.</p>`
        },
    };
    
    // --- LOGIQUE DE NAVIGATION et RENDER ---

    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');
    const recitsList = document.getElementById('recits-list'); // Liste complète
    const recitsMiniList = document.getElementById('recits-mini-list'); // Liste Accueil
    const mainContent = document.querySelector('main'); 

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
    
    // On affiche la page d'accueil par défaut
    activatePage('accueil');


    // Gestion de la navigation pour TOUS les liens avec la classe .nav-link (barre et CTA d'accueil)
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); 
            const targetId = link.getAttribute('href').substring(1);
            activatePage(targetId);
        });
    });

    // Fonction pour charger le contenu de l'histoire simulée
    function loadStory(id) {
        const story = mockStories[id];
        document.getElementById('single-story-title').innerHTML = story ? story.title : "Histoire non trouvée.";
        document.getElementById('single-story-content').innerHTML = story ? story.content : `<p>Désolé, cette histoire (ID: ${id}) n'a pas encore de contenu détaillé.</p>`;
    }
    
    // NOUVELLE GESTION: Clic sur la carte entière de la mini-liste OU sur le lien de la liste intégrale
    mainContent.addEventListener('click', (e) => {
        // 1. Vérifier si l'utilisateur a cliqué sur une carte de la mini-liste (carte entière)
        const miniCard = e.target.closest('.mini-clickable-card');
        if (miniCard) {
            e.preventDefault();
            const storyId = miniCard.dataset.storyId;
            loadStory(storyId);
            activatePage('single-story');
            return; 
        }
        
        // 2. Vérifier si l'utilisateur a cliqué sur un lien classique (.read-story-link ou le Récit en Vedette)
        const link = e.target.closest('.read-story-link');
        if (link) {
            e.preventDefault();
            const storyId = link.dataset.storyId;
            loadStory(storyId);
            activatePage('single-story'); // Afficher la page de l'histoire
        }
    });

    // Assurez-vous que le lien de retour fonctionne correctement
    const backLink = document.querySelector('#single-story .back-link');
    if (backLink) {
        backLink.addEventListener('click', (e) => {
            e.preventDefault();
            activatePage('recits');
        });
    }
});