// Import stylesheets
import './style.css';

const appDiv = document.getElementById('app');
appDiv.innerHTML;

// déclaration de la fonction fléchée 
const grammarChecker = () => {
  let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';
  let storyWords = story.split(' '); 
  let unnecessaryWord = 'literally'; 
  let misspelledWord = 'beautifull'; 
  let badWord = 'freaking'; 

// console.log(storyWords); 

// lignes de code ci-desosus 
let count = 0; 
storyWords.forEach((word) => { 
  count++; // incrémente count de 1
  console.log(word, count); // affiche le nombre de mots que contient storyWords 
});

// Utiliser la méthode filter pour filtrer le mot unnecessaryWord point 6
let filteredWords = storyWords.filter(function(word) { // la fonction de rappel prend un paramètre word 
    return word !== unnecessaryWord; // retourne 'word' s'il n'est pas égal à la variable 'unnecessaryWord' (dont la valeur est 'literally'). Le but est de supprimer 'literally'
}); 
// console.log(filteredWords.join(' ')); // affiche le texte de la variable story sans le mot 'literally'

// utilisation de la méthode .map() point 7
const useMap = storyWords.map(function(word) {
    if(word === misspelledWord) {
        return 'beautiful'
    } else {
        return word 
    } 
}); 
console.log(useMap.join(' '));

// utilisation de la méthode .findIndex() => le but est de renvoyer l'index du "gros" mot qui n'est pas désirable. 
let badWordIndex = storyWords.findIndex(word => {
    if(word === badWord) {
      return word 
    }
}); 
console.log(badWordIndex); // prints 80

// remplace freaking par really 
console.log(story.replace('freaking', 'really')); 

// vérifie si chaque word a moins ou est égal à 10 caractères
let lengthCheck = (word) => word <= 10; 
console.log(storyWords.every(lengthCheck)); 

// Vérifie s'il y a encore un mot qui est supérier à 10 caractères 
let checkMoreThanTen = storyWords.filter(word => word.length > 10); 
console.log(checkMoreThanTen);  

// remplace le mot 'breathtaking' qui est supérieur à 10 et je le remplace par 'glorius' 
console.log(story.replace('breathtaking', 'glorius')); 

// console.log(storyWords.join(''));  
}
grammarChecker(); // appel à la fonction 
