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

    // --- 2. HÄLSNING BASERAT PÅ TID PÅ DAGEN ---
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

    // --- 3. HANTERING AV NYHETSBREV + GA4 MÄTNING ---
    const newsletterForm = document.getElementById('newsletterForm');
    const newsletterMessage = document.getElementById('newsletterMessage');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Hindrar sidan från att laddas om
            
            const email = document.getElementById('emailInput').value;

            // Skicka data till Google Analytics 4 att någon anmält sig
            if (typeof gtag === 'function') {
                gtag('event', 'newsletter_signup', {
                    'event_category': 'engagement',
                    'method': 'web_form'
                });
                console.log("GA4: Nyhetsbrev-anmälan registrerad!");
            }

            // Visa ett tackmeddelande och dölj formuläret
            newsletterForm.style.display = 'none';
            newsletterMessage.textContent = `Tack! Vi har registrerat ${email}.`;
            newsletterMessage.style.display = 'block';
            newsletterMessage.style.color = '#ffcc33';
        });
    }
});