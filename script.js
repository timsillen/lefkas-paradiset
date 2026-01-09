document.addEventListener('DOMContentLoaded', () => {
    // --- 1. MÄTNING AV KNAPPKLICK (GA4) + SCROLL ---
    const exploreBtn = document.getElementById('exploreBtn');

    if (exploreBtn) {
        exploreBtn.addEventListener('click', () => {
            
            // Skicka data till Google Analytics 4
            if (typeof gtag === 'function') {
                gtag('event', 'click_explore_hero', {
                    'event_category': 'engagement',
                    'event_label': 'Utforska nu knapp'
                });
                console.log("GA4: Klick på utforska-knappen har registrerats!");
            }

            // Mjuk scroll till stränder-sektionen
            const beachSection = document.getElementById('beaches');
            if (beachSection) {
                beachSection.scrollIntoView({ 
                    behavior: 'smooth' 
                });
            }
        });
    }

    // --- 2. DINA HÄLSNINGAR BASERAT PÅ TID ---
    const headerPara = document.querySelector('.hero-content p');
    const hour = new Date().getHours();
    
    if (headerPara) {
        if (hour < 12) {
            headerPara.textContent = "God morgon! Dröm dig bort till Lefkadas stränder.";
        } else if (hour < 18) {
            headerPara.textContent = "Njut av den grekiska eftermiddagssolen.";
        } else {
            headerPara.textContent = "Planera din magiska kväll i Lefkada.";
        }
    }
});