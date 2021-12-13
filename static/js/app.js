let cards = data.cards

function cardLookup(nameOfCard) {
  for (let i = 0; i < data.cards.length; i++) {
    if (data.cards[i].name == nameOfCard) {
      return data.cards[i]
    }
  }
}

// let fool = cardLookup("The Fool")
// let emperor = cardLookup("The Emperor")

// console.log(fool.meaning_up)
// console.log(emperor.meaning_rev)

function randomCard() {
  let randomIndex = Math.floor(Math.random() * data.cards.length);
  return data.cards[randomIndex];
}

// for (let i = 0; i < 5; i++) { 
//   console.log(randomCard()); 
// }

function updateTextContent(elementId, card, cardProp) {
  let element = document.getElementById(elementId);
  element.textContent = card[cardProp];
}

function updateImageContent(card) {
  let cardImage = document.getElementById("cardphoto");
  cardImage.innerHTML = `<img src='images/${card.name_short}.jpg' alt='photo of ${card.name}, center on enlarged'/>`;
  console.log(cardImage.innerHTML)
}

function showRandomCard() {
  let card = randomCard();
  updateTextContent("description", card, "desc");
  updateTextContent("cardName", card, "name");
  updateTextContent("meaning", card, "meaning_up");
  updateImageContent(card);
}

ball = document.getElementById('ball');
ball.addEventListener('click', showRandomCard);



