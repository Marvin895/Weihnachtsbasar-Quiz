// 1. Datenstruktur: Die Quiz-Frage und Antworten
const quizData = {
    question: "Was ist das typische deutsche Weihnachtsgebäck, das aus einem speziellen Hefeteig gebacken wird?",
    options: [
        "Lebkuchen", // Index 0
        "Zimtschnecke", // Index 1
        "Christstollen", // Index 2 (Die richtige Antwort)
        "Käsekuchen" // Index 3
    ],
    // Index der korrekten Antwort (hier: 2 für "Christstollen")
    correctAnswerIndex: 2 
};

// 2. DOM-Elemente abrufen
const questionElement = document.querySelector('.question');
const optionElements = document.querySelectorAll('.option');

// 3. Quiz-Inhalt in die HTML-Struktur einfügen
function loadQuiz() {
    // Frage einfügen
    questionElement.textContent = quizData.question;
    
    // Optionen einfügen
    optionElements.forEach((option, index) => {
        option.textContent = quizData.options[index];
        // Ein Attribut hinzufügen, um die Index-Zuordnung in der Logik zu erleichtern
        option.setAttribute('data-index', index); 
        // Sicherstellen, dass die Lösungs-Klasse am Anfang entfernt ist
        option.classList.remove('solution'); 
    });
}

// 4. Event-Listener für Tastatureingaben
document.addEventListener('keydown', function(event) {
    // Überprüfen, ob die gedrückte Taste die Leertaste (Space) ist
    // ' ' ist moderner, keyCode 32 ist für ältere Browser
    if (event.key === ' ' || event.keyCode === 32) {
        
        // Verhindert das Standardverhalten der Leertaste (Scrollen der Seite)
        event.preventDefault(); 
        
        // Den Index der korrekten Antwort aus den Daten holen
        const correctIndex = quizData.correctAnswerIndex;
        
        // Das DOM-Element finden, dessen data-index dem korrekten Index entspricht
        // Der :nth-child(n) Selector basiert auf 1-Index, daher +1
        const correctOptionElement = document.querySelector(`.option:nth-child(${correctIndex + 1})`);
        
        // Überprüfen, ob das Element existiert und die Klasse noch nicht hat
        if (correctOptionElement && !correctOptionElement.classList.contains('solution')) {
            // Die CSS-Klasse hinzufügen, um die grüne Umrandung anzuzeigen
            correctOptionElement.classList.add('solution');
        }
    }
});

// 5. Quiz beim Laden der Seite starten
loadQuiz();
