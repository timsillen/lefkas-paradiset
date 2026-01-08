document.addEventListener('DOMContentLoaded', () => {
    const exploreBtn = document.getElementById('exploreBtn');

    // Mjuk scroll till stränder-sektionen
    exploreBtn.addEventListener('click', () => {
        document.getElementById('beaches').scrollIntoView({ 
            behavior: 'smooth' 
        });
    });

    // En enkel hälsning baserat på tid på dagen
    const header = document.querySelector('.hero-content p');
    const hour = new Date().getHours();
    
    if (hour < 12) {
        header.textContent = "God morgon! Dröm dig bort till Lefkadas stränder.";
    } else if (hour < 18) {
        header.textContent = "Njut av den grekiska eftermiddagssolen.";
    } else {
        header.textContent = "Planera din magiska kväll i Lefkada.";
    }
});