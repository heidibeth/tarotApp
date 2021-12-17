let cards = data.cards

function cardLookup(nameOfCard) {
  for (let i = 0; i < data.cards.length; i++) {
    if (data.cards[i].name == nameOfCard) {
      return data.cards[i]
    }
  }
}

function randomCard() {
  let randomIndex = Math.floor(Math.random() * data.cards.length);
  return data.cards[randomIndex];
}

function updateTextContent(elementId, card, cardProp) {
  let element = document.getElementById(elementId);
  element.textContent = card[cardProp];
}

function updateImageContent(card) {
  let cardImage = document.getElementById("cardPhoto");
  cardImage.innerHTML = `<img src='static/images/${card.name_short}.jpg' alt='photo of ${card.name}, center on enlarged'/>`;
  console.log(cardImage.innerHTML)
}

function showCard(card) {
  updateTextContent("description", card, "desc");
  updateTextContent("cardName", card, "name");
  updateTextContent("meaning", card, "meaning_up");
  updateImageContent(card);
  document.getElementById("selector").value = "Select a card"; // sets <select> value to "Select a card" every time a different card is displayed
}

function showRandomCard() {
  let card = randomCard();
  showCard(card);
}

// changes the icon from large and centered to small and in upper-left corner
function moveBall() {
  let ball = document.getElementById('ball')
  ball.setAttribute("class", "small");
  let reading = document.getElementById('readingDisplay');
  reading.innerHTML = 'Pull A Card';
}

let dropDown = document.getElementById('selector');

for (let i = 0; i < cards.length; i++) {
    let cardName = cards[i].name
    dropDown.innerHTML += '<option>' + cardName + '</option>'
}

dropDown.addEventListener('change', function(){
    let card = cardLookup(this.value)
    moveBall(); // added to event listener
    showCard(card);
})


let ball = document.getElementById('ball');
ball.addEventListener('click', function() { // combined event listeners
  showRandomCard()
  moveBall() // abstracted into function
});

let cardPhoto = document.getElementById('cardPhoto');

cardPhoto.addEventListener('click', function() {
  let cardName = document.getElementById('cardName').innerText;
  let card = cardLookup(cardName)
  if (this.attributes.class === undefined) {
    this.setAttribute('class', 'reversed')
    updateTextContent("meaning", card, "meaning_rev");
  } else {
    this.removeAttribute("class");
    updateTextContent("meaning", card, "meaning_up");
  }
});

