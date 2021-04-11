// Variables
const wordContainer = document.getElementById('word-container')
const word = document.getElementById('word')
let wordGender = word.getAttribute('data-gender')

const buttonMale = document.getElementById('button-male')
const buttonFemale = document.getElementById('button-female')

const plusOne = document.getElementById('plus-one')
const error = document.getElementById('error')

const rightAnswers = document.getElementById('right-answers')
let rightAnswersCounter = 0

let activeButton = false

const jsonURL =
  'https://juan-antonio-ledesma.github.io/spanish-word-gender/js/words.json'
let allWords
let copyAllWords = { words: [] }

// Get words
const getWords = () => {
  fetch(jsonURL)
    .then(response => response.json())
    .then(data => {
      allWords = data
      giveMeWord()
    })
    .catch(error => console.error(error))
}

// Give me word
const giveMeWord = () => {
  let numberOfWords = allWords.words.length

  if (numberOfWords === 0) {
    allWords = copyAllWords
    copyAllWords = { words: [] }
  }

  let randomNumber = Math.floor(Math.random() * numberOfWords)

  word.textContent = allWords.words[randomNumber].word
  wordGender = allWords.words[randomNumber].gender

  error.classList.remove('swg__error--active', 'swg__error--mini')
  word.classList.remove(
    'swg__word--he',
    'swg__word--she',
    'swg__word--normal',
    'swg__word--mini',
  )

  let numberCharacters = word.textContent.length

  if (numberCharacters >= 9) {
    word.classList.add('swg__word--mini')
    error.classList.add('swg__error--mini')
  } else {
    word.classList.add('swg__word--normal')
    error.classList.remove('swg__error--mini')
  }

  // Avoid repeated words
  allWords.words.splice(randomNumber, 1)
  copyAllWords.words.push(allWords.words[randomNumber])

  setTimeout(
    () => wordContainer.classList.remove('swg__word-container--hidden'),
    350,
  )
  setTimeout(() => (activeButton = false), 500)
}

// Select gender
buttonMale.addEventListener(
  'mousedown',
  event => selectGender(event, 'male'),
  false,
)
buttonFemale.addEventListener(
  'mousedown',
  event => selectGender(event, 'female'),
  false,
)

const selectGender = (event, gender) => {
  if (!activeButton) {
    // Disabled buttons
    activeButton = true

    // Button effect
    let target = event.target
    let rect = target.getBoundingClientRect()
    let ripple = document.createElement('span')
    ripple.className = 'swg__button-ripple'
    ripple.style.height = ripple.style.width =
      Math.max(rect.width, rect.height) + 'px'
    target.appendChild(ripple)
    let top =
      event.pageY - rect.top - ripple.offsetHeight / 2 - document.body.scrollTop
    let left =
      event.pageX -
      rect.left -
      ripple.offsetWidth / 2 -
      document.body.scrollLeft
    ripple.style.top = top + 'px'
    ripple.style.left = left + 'px'

    // Choose gender
    if (gender === 'male') {
      word.classList.add('swg__word--he')
      setTimeout(() => buttonMale.removeChild(ripple), 750)
    } else {
      word.classList.add('swg__word--she')
      setTimeout(() => buttonFemale.removeChild(ripple), 750)
    }

    // Choice result
    if (
      (gender === 'male' && wordGender === 'm') ||
      (gender === 'female' && wordGender === 'f')
    ) {
      rightAnswersCounter++
      plusOne.classList.add('swg__plus-one--active')
      setTimeout(() => plusOne.classList.remove('swg__plus-one--active'), 500)
    } else {
      rightAnswersCounter = 0
      setTimeout(() => error.classList.add('swg__error--active'), 500)
    }

    rightAnswers.textContent = rightAnswersCounter
    rightAnswers.classList.add('swg__right-answers--active')
    setTimeout(
      () => rightAnswers.classList.remove('swg__right-answers--active'),
      500,
    )

    // Give me word
    setTimeout(
      () => wordContainer.classList.add('swg__word-container--hidden'),
      1500,
    )
    setTimeout(giveMeWord, 2500)
  }
}

// Registration serviceWorker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register(
        'https://juan-antonio-ledesma.github.io/spanish-word-gender/sw.js',
      )
      .then(
        registration => {
          // Registration was successful
          console.log(
            'ServiceWorker registration successful with scope: ',
            registration.scope,
          )
        },
        err => {
          // Registration failed :(
          console.log('ServiceWorker registration failed: ', err)
        },
      )
  })
}

// Initialize Spanish Word Gender
window.onload = () => getWords()
