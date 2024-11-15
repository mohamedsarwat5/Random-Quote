


var quotes = ["“Be yourself; everyone else is already taken.” <br> ― Oscar Wilde ",
    " “I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.” <br>― Marilyn Monroe",
    "“So many books, so little time.” <br> ― Frank Zappa",
    "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.” <br> ― Bernard M. Baruch",
    "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.” <br> ― Dr. Seuss"
]

function showQuotes() {
    var randomNmber = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').innerHTML = quotes[randomNmber];
}