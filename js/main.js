/* 

- Start Hangman Game With Vanilla Javascript 

*/

let lettersArray = "abcdefghijklmnoupqrstvwxyz".split("");
let lettersContainer = document.querySelector(".letters")

// Generating All Characters In The LettersContainer
lettersArray.forEach((letter) => {

    let span = document.createElement("span")
    let SpanText = document.createTextNode(letter)
    span.append(SpanText)
    span.className = 'letter-box'

    lettersContainer.appendChild(span)

})

// Creating Object Of Words + Categories ممكن نعملها اراى كبيره و عناصرها عباره عن ارايز فرعيه و نعمل الاختيار رانددوم على عناصر الاراى الاصليه و كمان على عناصر الاراييز الفرعيه 
let wordsObject = {
    programming: ["php", "javascript", "html", "scala", "css", "python", "go", "mysql"],
    movies: ["prestige", "inception", "parasite", "intersteller", "up"],
    people: ["zewil", "albert aienthtien", "maxwell", "cleopatra", "mostafa mahmoud"],
    countries: ["syria", "palastien", "yamen", "egypt", "moroco"]
}

// Selecting Keys(Properties) In An Array
let wordsKeys = Object.keys(wordsObject);

// Selecting A Random Key Or Property
let randomKey = wordsKeys[parseInt(Math.random() * wordsKeys.length)]

// Selecting The Value Of The Random Property From The WordsObject
let randomPropety = wordsObject[randomKey];

// Selecting A Random Word From The Value(Array) Of The Random Property
let randomWorkFromProp = randomPropety[parseInt(Math.random() * randomPropety.length)]

// Appending The Random Catageory Name(One On The WordsObject Properties) Randomly 
let catagoryName = document.querySelector(".category span")
let CatText = document.createTextNode(randomKey)
catagoryName.appendChild(CatText)


// Creating The Guess Word With The empty Spans 
let LettersGuess = document.querySelector(".letters-guess")

randomWorkFromProp.split("").forEach((word) => {

    let span = document.createElement("span")
    let text = document.createTextNode(word)
    span.className = "words-span"

    if (word == " ") {
        span.classList.add("empty")
    }

    LettersGuess.appendChild(span)

})


// Selecting The Toy
let AllToy = document.querySelectorAll(".the-draw div")
let toyArray = [...AllToy]

// Splicing The The Div Of "the-man" Which Carry (Head, Body, Hands and Legs) From The Hangman Body Array
toyArray.splice(3, 1);
toyCounter = -1;

// Clicking On The All Characters And Match The Charcters With Itself In The Random Word
document.addEventListener("click", (e) => {


    if (e.target.classList.contains("letter-box")) {
        e.target.classList.add("clicked")

        // Here We Will Loop The RandomWord To Check If The Chacter We Clicked Is In The Word Or Not (If It Is We Got The Index Of The Chacter In The Word Which Is Equal To The Index Of Span Which Carry The Characters Of The RandomWord Cause Both Of Them Starts With Index 0 )
        randomWorkFromProp.split("").forEach((letter, index) => {
            if (e.target.textContent.toLowerCase() === letter) {

                // We Get The Spans Which Carry The Chacters Of The RandomWord And Use The Index Of The Correct Charcter And Push It To The innerHTML Of The Span
                let FilledRandomWord = document.querySelectorAll(".words-span")
                FilledRandomWord[index].innerHTML = letter;
                // Play The Sound Of Correct Character
                document.querySelector(".hangman-parent .good").play()


                // Here We Have To Check If All RandomWord's Spans Are Filled(Not Empty) That Is Mean He Success And Finished The Game
                let filtered = [...FilledRandomWord].filter(function(span) {
                    return span.innerHTML === ""
                })

                if (filtered.length == 0) {
                    let div = document.createElement("div")
                    let text = document.createTextNode("Thank You , Saved The Hangman Clk To Play")
                    div.className = "WellDone"
                    div.append(text)
                    div.addEventListener("click", () => { window.location.reload() })
                    document.querySelector(".Hangman-container").appendChild(div);

                    document.querySelector(".hangman-parent .enjoy").play()

                }
            }

        })


        // What If The The Character You Clicked On (It has "letter-box") Is Not In The randomWord ?? I Chosed To Bring All The Body Or HangMan Parts In An Array And Loop On Them And Appear Each Part Increasly 
        if (!randomWorkFromProp.includes(e.target.textContent.toLowerCase())) {

            // The Counter Variable Refers To The Parts In The Hangman Body Or Array
            toyCounter++;
            toyArray[toyCounter].style.opacity = "1";

            // Play The Sound Of Help
            document.querySelector(".hangman-parent .help").play()


            // Here We Need To Check If We Reach To The Last Part In The Hangman Body By Checking If The Counter Variable Is Equal To The Hangman Body Array.Length -1 ---> It Refers To The Last Part Here We Say You Lost The Game And Try Again
            if (toyCounter == toyArray.length - 1) {
                lettersContainer.style.cssText = "pointer-events:none;user-select:none"

                let div = document.createElement("div")
                div.className = "loseDive"
                let text = document.createTextNode(`Game Over W(${randomWorkFromProp}), PLAY AGAIN`)
                div.append(text)
                div.addEventListener("click", () => { window.location.reload() })
                document.querySelector(".Hangman-container").appendChild(div)
                document.querySelector(".hangman-parent .sad").play()
                return false
            }
        }

    }
});


// الحمد لله حمداً كثيراً
// الحمد لله حمداً ملئ السموات و الارض 
// الحمد لله عدد ما كان و عدد مايكون و عدد الحركات و السكون 
// الحمد لله حمداً طيباً مباركاً فيه 
// الحمد لله حمداً تطيب به النفوس
// الحمد لله حتى يبلغ الحمد منتهاه



/* End Hangman Game With Vanilla Javascript */




// الحمد لله حمداً كثيراً مباركاً فيه
// الحمد لله حمداً ملئ السموات و الارض
// الحمد لله عدد ما كان و عدد ما يكون و عدد الحركات و السكون
// الحمد لله حمداً طيباً مباركاً فيه 
// الحمد لله حتى يرضى و الحمد لله عند الرضى و الحمد لله بعد الرضى
// الحمد لله حمداً تطيب به النفوس 
// الحمد لله حتى يبلغ الحمد منتهاه
// اللهم انى استودعك ما حفظت و ما فهمت و ما قرأت و ما كتبت أمانه و وديعه عندك و أسالك ان ترضه على عند حاجتى اليه فانت حسبى و نعم الوكيل ....