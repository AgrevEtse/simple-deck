# Simple-Deck

Simple-Deck is a NodeJS package in which you can create a deck or a card in a simple way xd.

## Installation

With NPM install the library on your project.

```bash
npm i simple-deck
```

## Usage

The differents type of decks that are available are **American**, **French**, **Italian**, **Spanish**, **Mexican**, **German** and **Swiss**. The American deck and French deck are the same, same number of cards, same suits, same roles, etc. the only thing that change is the name of the type of deck, that's all.

The default deck is the American, but you can change that passing the type of deck on the parameters at the moment of instance the deck class and you should write it with the first letter in uppercase as I did previously.

The cards are objects, so the card has five properties, there are: **typeDeck**, **suit**, **rank**, **role** and **name**; the **typeDeck** is the type of deck (already mentioned: American, French, Italian, etc). The **suit** is the suit of that card in especific (it could be Hearts, Tiles, Clovers or Pikes in the case of the American or French deck, every deck has his own suits). The **rank** is the "number" of the card, like 1, 2, 3, 4, 5, etc. The **role** is exclusive from some cards, like Ace, Jack, Queen or King, if it doesn't have a role it will take the rank. And the **name** is the union between the role and the suit, example it will be *5 of pikes* or *Queen of Hearts*.

The deck is also an object, it has seven properties, there are **deck**, **typeDeck**, **suits**, **numberCards**, **numberCardsSuit**, **rankStart** and **rankEnd**; the **deck** in an array of all the cards. The **typeDeck** is, obviously, the type of deck mentioned. The **suits** is an array of all the suits of that deck, example the suits of a German Deck are Hearts, Bells, Acorns and Leaves and the array will be `['Hearts', 'Bells', 'Acorns', 'Leaves']`. The **numberCards** is the total number of cards of the deck. The **numberCardsSuit** is the total number of cards per suit. The **rankStart** is the rank in which the suit starts, because there are the German and Swiss deck that theirs suit start at the rank 6, so thats why it is a property. And the **rankEnd** is where is the rank in which the suit ends, because the Mexican deck ends at the rank 12 and not the rank 13 as the another decks.

So that's all. If theres any suggestions you could leave it on the issues on the github repository and I will read them to get a better library, because this is my firts library and I think it's good but not enough and sorry for my english that is not very good but I tried to explain my self the best I can.

#### Simple-Deck GitHub Repository
[Simple-Deck Repository](https://github.com/AgrevEtse/simple-deck "Simple-Deck Repository")

#### Simple-Deck NPM Package
[Simple-Deck NPM Package](https://www.npmjs.com/package/simple-deck "Simple-Deck NPM Package")

```javascript
const { Deck, Card } = require('simple-deck');
/* You can omit the class Card, that is only if you want to create one custom card
that will not be attached to a deck, it will be only the card. */

let customDeck = new Deck();
// or new Deck('Italian')
// or new Deck('Mexican')

console.log(customDeck);
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT License](https://choosealicense.com/licenses/mit/ 'MIT License')
