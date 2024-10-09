// Vérificateur d'année bissextile
function isLeapYear(year) {
    // Vérifie si l'année est divisible par 4
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true; // C'est une année bissextile
    } else {
        return false; // Ce n'est pas une année bissextile
    }
}

// Détermination du prix du billet de cinéma
function ticketPrice(age) {
    // Détermine le prix du billet en fonction de l'âge
    if (age <= 12) {
        return 10; // Prix pour les enfants
    } else if (age >= 13 && age <= 17) {
        return 15; // Prix pour les adolescents
    } else {
        return 20; // Prix pour les adultes
    }
}

// Fonction pour obtenir le nième nombre de Fibonacci
function fibonacci(n) {
    // Cas de base : les deux premiers nombres de Fibonacci
    if (n === 0) {
        return 0; // Le 0ème nombre
    } else if (n === 1) {
        return 1; // Le 1er nombre
    } else {
        // Appel récursif pour obtenir les deux nombres précédents
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Vérificateur de palindrome
function isPalindrome(s) {
    // Retirer les espaces et les caractères non alphanumériques, et mettre en minuscule
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Fonction récursive pour vérifier si la chaîne est un palindrome
    if (s.length <= 1) {
        return true; // Une chaîne vide ou d'un caractère est un palindrome
    }
    if (s[0] !== s[s.length - 1]) {
        return false; // Les caractères ne correspondent pas
    }
    // Appel récursif en enlevant les premiers et derniers caractères
    return isPalindrome(s.slice(1, s.length - 1));
}

// Exemple d'utilisation

// Vérification d'une année bissextile
const yearInput = parseInt(prompt("Entrez une année : "), 10);
if (isLeapYear(yearInput)) {
    console.log(`${yearInput} est une année bissextile.`);
} else {
    console.log(`${yearInput} n'est pas une année bissextile.`);
}

// Détermination du prix du billet
const ageInput = parseInt(prompt("Entrez votre âge : "), 10);
const price = ticketPrice(ageInput);
console.log(`Le prix de votre billet de cinéma est : ${price} $`);

// Obtenir le nième nombre de Fibonacci
const nInput = parseInt(prompt("Entrez un nombre pour obtenir le nième nombre de Fibonacci : "), 10);
console.log(`Le ${nInput}ème nombre de Fibonacci est : ${fibonacci(nInput)}`);

// Vérification d'un palindrome
const stringInput = prompt("Entrez une chaîne : ");
if (isPalindrome(stringInput)) {
    console.log("La chaîne est un palindrome.");
} else {
    console.log("La chaîne n'est pas un palindrome.");
}
