let jokeArray = ["What kind of exercise do lazy people do? Diddly-squats.",
    'What do you call a pony with a cough? A little horse!',
    "What is Forrest Gump's password? 1Forrest1.",
    "Why did the M&M go to school? He wanted to be a Smartie.",
    "What did one traffic light say to the other? Stop looking at me, I'm changing!",
    "What do you call bears with no ears? B.",
    "What's a foot long and slippery? A slipper!",
    "Why do French people eat snails? They don't like fast food!",
    "What's red and moves up and down? A tomato in an elevator!",
    "I invented a new word today: Plagiarism.",
    "What is sticky and brown? A stick!",
    "How does a rabbi make coffee? Hebrews i\"t!",
    "Rest in peace boiling water. You will be mist!",
    "How do you throw a space party? You planet!",
    "Want to hear a construction joke? Oh never mind, I'm still working on that one.",
    "Why don't scientists trust atoms? Because they make up everything!",
    "I hate Russian dolls… they're so full of themselves!",
    "Talk is cheap? Have you ever talked to a lawyer?",
    "Why did the gym close down? It just didn't work out!",
    "Two artists had an art contest. It ended in a draw!",
    "A plateau is the highest form of flattery.",
    "I have a fear of speed bumps. But I am slowly getting over it.",
    "You can only get spoiled milk from a pampered cow.",
    "What do you call a boomerang that doesn't come back? A stick!",
    "You know what I saw today? Everything I looked at.",
    "What did one plate say to his friend? Tonight, dinner's on me!",
    
    "What are a shark's two most favorite words? Man overboard!",
    "If we shouldn't eat at night, why do they put a light in the fridge?",
    "Have you ever tried eating a clock? It's really time-consuming, especially if you go for seconds.",
    "Why are ghosts such bad liars? Because they are easy to see through.",
    "It's cleaning day so naturally, I've already polished off a whole chocolate bar.",
    "What did the buffalo say when his son left for college? Bison!",
    "Here, I bought you a calendar. Your days are numbered now.",
    "Where do fish sleep? In the riverbed.",
    "What did one plate say to his friend? Tonight, dinner's on me!",
    "Where are average things manufactured? The satisfactory.",
    "I tried to sure the airport for misplacing my luggage. I lost my case.",
    "Why doesn't the sun go to college? Because it has a million degrees!",
    "I was wondering why the frisbee was getting bigger, then it hit me.",
    "I have many jokes about rich kids—sadly none of them work.",
    "What do you call a singing laptop? A Dell!",
    "Why was six afraid of seven? Because seven ate nine.",
    "Why are skeletons so calm? Because nothing gets under their skin.",
    "How do trees get online? They just log on!",
    "Some people think prison is one word…but to robbers it's the whole sentence.",
    "My girlfriend treats me like a god. She ignores my existence and only talks to me when she needs something.",
    "Where does the sheep get his hair cut? The baa baa shop!",
    "Why did the orange stop? It ran out of juice!",
    "I never make mistakes. …I thought I did once, but I was wrong.",
    "What does the man in the moon do when his hair gets too long? Eclipse it!",
    "What did 0 say to 8? Nice belt!"]

let result1;
const randomJoke = () => {
    let randomIndex = Math.floor(Math.random() * (jokeArray.length - 1))
    result1 = jokeArray[randomIndex]
    return showResultDiv.innerText = `${result1}`

}
// console.log(randomJoke())

const showResultDiv = document.getElementById("result")
const jokeBtn = document.getElementById("joke")
const clearbtn = document.getElementById("clear")


jokeBtn.onclick = () => {
    return randomJoke()
}

function clearAll(){
    return showResultDiv.innerText = ""
}
clearbtn.onclick = () => clearAll()
