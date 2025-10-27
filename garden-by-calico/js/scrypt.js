// Carica i dati del sito
const siteData = {
    site: {
        name: "GARDEN BY CALICO",
        description: "Una collezione di dipinti floreali dove natura e arte si incontrano in un dialogo armonioso di colori e forme.",
        year: 2025,
    },
    colors: {
        sage: "#b5cbb7",
        cream: "#fdfaf6",
        blush: "#e7cfc7",
        moss: "#8da78e",
        sand: "#f0eae0",
        textDark: "#3a3a3a"
    },
    navigation: [
        { name: "Home", href: "#home" },
        { name: "La Mia Storia", href: "#storia" },
        { name: "Contatti", href: "#contatti" }
    ],
    slider: [
        {
            image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
            caption: "Campo di Girasoli"
        },
        {
            image: "https://images.unsplash.com-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1600&q=80",
            caption: "Petali di Primavera"
        },
        {
            image: "https://images.unsplash.com/photo-1473186505569-9c61870c11f9?auto=format&fit=crop&w=1600&q=80",
            caption: "Rosa Selvatica"
        }
    ],
    artworks: [
        {
            title: "Petali di Primavera",
            price: "€ 450",
            image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Rosa Selvatica",
            price: "€ 520",
            image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Campo di Girasoli",
            price: "€ 680",
            image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Tulipani al Tramonto",
            price: "€ 390",
            image: "https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Giardino Segreto",
            price: "€ 750",
            image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Loto Notturno",
            price: "€ 620",
            image: "https://images.unsplash.com/photo-1495231916356-a86217efff12?auto=format&fit=crop&w=800&q=80"
        }
    ],
    story: {
        paragraphs: [
            "Il mio viaggio nell'arte floreale è iniziato nei giardini di mia nonna, dove ho imparato a vedere la bellezza nelle piccole cose: un petalo che cade, la rugiada su una foglia, i colori che cambiano con la luce.",
            "Ogni dipinto è un omaggio alla natura e alla sua capacità di rinnovarsi. Lavoro principalmente con tecniche miste su tela, cercando di catturare non solo l'aspetto visivo dei fiori, ma anche la loro essenza emotiva.",
            "Garden by Calico nasce dal desiderio di condividere questa passione e portare un po' di serenità nelle case di chi ama l'arte e la natura."
        ]
    },
    contact: {
        email: "info@gardenbycalico.it",
        message: "Grazie per il tuo messaggio! Ti risponderò presto."
    }
};

// Inizializza il sito quando il DOM è caricato
document.addEventListener('DOMContentLoaded', function() {
    initializeSite();
    initializeSlider();
});

function initializeSite() {
    // Carica le opere d'arte
    loadArtworks();
    
    // Carica la storia
    loadStory();
    
    // Inizializza il form di contatto
    initializeContactForm();
}

function loadArtworks() {
    const artworksGrid = document.getElementById('artworks-grid');
    
    siteData.artworks.forEach(artwork => {
        const artworkCard = document.createElement('div');
        artworkCard.className = 'artwork-card';
        
        artworkCard.innerHTML = `
            <img src="${artwork.image}" alt="${artwork.title}">
            <div class="artwork-info">
                <h3>${artwork.title}</h3>
                <p class="artwork-price">${artwork.price}</p>
            </div>
        `;
        
        artworksGrid.appendChild(artworkCard);
    });
}

function loadStory() {
    const storyContent = document.getElementById('story-content');
    
    siteData.story.paragraphs.forEach(paragraph => {
        const paragraphElement = document.createElement('p');
        paragraphElement.className = 'story-paragraph';
        paragraphElement.textContent = paragraph;
        storyContent.appendChild(paragraphElement);
    });
}

function initializeSlider() {
    const slider = document.querySelector('.slider');
    let currentSlide = 0;
    
    // Rimuovi il slide di esempio
    slider.innerHTML = '';
    
    // Aggiungi tutti gli slide
    siteData.slider.forEach((slideData, index) => {
        const slide = document.createElement('div');
        slide.className = `slide ${index === 0 ? 'active' : ''}`;
        slide.innerHTML = `
            <img src="${slideData.image}" alt="${slideData.caption}">
            <div class="slide-caption">
                <h2>${slideData.caption}</h2>
            </div>
        `;
        slider.appendChild(slide);
    });
    
    // Cambia slide automaticamente ogni 5 secondi
    setInterval(() => {
        const slides = document.querySelectorAll('.slide');
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }, 5000);
}

function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Qui puoi aggiungere la logica per inviare il form
        alert(siteData.contact.message);
        contactForm.reset();
    });
}

// Smooth scrolling per i link di navigazione
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});