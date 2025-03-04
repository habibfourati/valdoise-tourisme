// Smooth scrolling pour les liens internes
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animation pour le formulaire de contact
const form = document.querySelector('#contact form');
if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        
        // Simuler l'envoi du formulaire
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Envoi en cours...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            // Réinitialiser le formulaire
            this.reset();
            
            // Afficher un message de confirmation
            const confirmationMsg = document.createElement('div');
            confirmationMsg.className = 'alert alert-success';
            confirmationMsg.textContent = 'Votre message a été envoyé avec succès !';
            confirmationMsg.style.backgroundColor = '#d4edda';
            confirmationMsg.style.color = '#155724';
            confirmationMsg.style.padding = '15px';
            confirmationMsg.style.marginBottom = '20px';
            confirmationMsg.style.borderRadius = '5px';
            
            this.parentNode.insertBefore(confirmationMsg, this);
            
            // Restaurer le bouton
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            
            // Supprimer le message après 5 secondes
            setTimeout(() => {
                confirmationMsg.remove();
            }, 5000);
        }, 1500);
    });
}

// Navigation sticky avec changement de style au défilement
const nav = document.querySelector('nav');
const navHeight = nav.offsetHeight;

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        nav.style.boxShadow = 'none';
    }
});

// Animation d'apparition des cartes des sites
document.addEventListener('DOMContentLoaded', () => {
    const siteCards = document.querySelectorAll('.site-card');
    
    if ('IntersectionObserver' in window) {
        const cardObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const card = entry.target;
                    card.style.opacity = 1;
                    card.style.transform = 'translateY(0)';
                    cardObserver.unobserve(card);
                }
            });
        }, {
            threshold: 0.1
        });
        
        siteCards.forEach(card => {
            card.style.opacity = 0;
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            cardObserver.observe(card);
        });
    }
});