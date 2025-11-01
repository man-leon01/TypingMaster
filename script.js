const word = document.querySelector("#word")
const continued = document.querySelector("#continued")
const restart = document.querySelector("#restart")
const randomWord = document.querySelector("#random-word")
const timer = document.querySelector("#timer")
const notif = document.querySelector(".notif")
const end = document.querySelector(".end")
const help = document.querySelector(".help")
const helpBtn = document.querySelector("#help-btn")
const score = document.querySelector("#score")
const about = document.querySelector("#about")
const play = document.querySelector("#play")
const aboutContainer = document.querySelector(".about-container")
const tableau = [
  "Pomme", "Chien", "Maison", "Voiture", "Fleur", "Enfant", "Ecole", "Amour", "Vie", "Joie",
  "Soleil", "Plage", "Mer", "Montagne", "Rivière", "Forêt", "Oiseau", "Livre", "Musique", "Danse",
  "Fête", "Ami", "Famille", "Bonheur", "Sourire", "Rire", "Aventure", "Voyage", "Découverte", "Nouveauté",
  "Emerveillement", "Beauté", "Nature", "Fleurir", "Jardin", "Printemps", "Eté", "Automne", "Hiver",
  "Saison", "Temps", "Heure", "Minute", "Seconde", "Moment", "Instant", "Eternité", "Bonheur",
  "Paix", "Harmonie", "Amitié", "Amour", "Compassion", "Gratitude", "Joie de vivre", "Sourire",
  "Rire", "Plaisir", "Bonheur", "Félicité", "Satisfaction", "Paix intérieure", "Calme", "Sérénité",
  "Confiance", "Espoir", "Optimisme", "Positivité", "Energie", "Motivation", "Inspiration", "Créativité",
  "Imagination", "Rêve", "Réalité", "Vie", "Existence", "Expérience", "Apprentissage", "Croissance",
  "Développement", "Progrès", "Réussite", "Succès", "Bonheur", "Fierté", "Satisfaction", "Joie",
  "Paix", "Amour", "Amitié", "Famille", "Communauté", "Solidarité", "Partage", "Générosité",
  "Altruisme", "Empathie", "Compassion", "Amour", "Bonté", "Gentillesse", "Douceur", "Paix",
  "Harmonie", "Beauté", "Vérité", "Sagesse", "Connaissance", "Savoir", "Compréhension", "Intelligence"
];


let chrono = 120
let count = 0


continued.addEventListener("click", () => {
 help.classList.remove("act")
 notif.classList.remove("active")
})

helpBtn.addEventListener("click", () => {
 help.classList.add("act")
 notif.classList.add("active")
})
function intervalTimer(){ 
  const interval = setInterval(() => {
  chrono--
  timer.innerText = `Timer: ${chrono}s`
  if(chrono <= 0){
    end.classList.add("active")
    notif.classList.add("active")
    score.innerText = `Votre score est de : ${count} point(s)`
    clearInterval(interval)
  }
}, 1000)
}

end.querySelector("button").addEventListener("click", () => {
  notif.classList.remove("active")
  location.reload()
})

function renderWord(){
word.addEventListener("input", (e) => {
  if(e.target.value == tableau[random]){
    e.target.value = ""
    random = Math.floor(Math.random() * tableau.length)
    randomWord.innerText = tableau[random]
  }
})
}
restart.addEventListener("click", (e) =>{
  if(e.target.innerText == "Restart"){
    location.reload()
    return;
  }
let random = Math.floor(Math.random() * tableau.length)
randomWord.innerText = tableau[random]

  if(e.target.innerText == "Start"){
    e.target.innerText = "Restart"
    intervalTimer()
    word.addEventListener("input", (e) => {
      if(e.target.value.trim() == tableau[random]){
        e.target.value = ''
        random = Math.floor(Math.random() * tableau.length)
        randomWord.innerText = tableau[random]
        count+=10
      }
    })
  }
  
  //location.reload()
})

about.addEventListener("click", () => {
  aboutContainer.classList.add("active")
  play.style.display = "block"
  about.style.display = "none"
})

play.addEventListener("click", () => {
  aboutContainer.classList.remove("active")
  play.style.display = "none"
  about.style.display = "block"
})
