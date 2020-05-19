class Card {
  constructor(typeDeck, suit, rank) {
    this.typeDeck = typeDeck;
    this.suit = suit;
    this.rank = rank;
    this.role;
    this.name;

    switch (this.typeDeck) {
      case 'French':
      case 'American':
        switch (this.rank) {
          case 1:
            this.role = 'Ace';
            break;
          case 11:
            this.role = 'Jack';
            break;
          case 12:
            this.role = 'Queen';
            break;
          case 13:
            this.role = 'King';
            break;
          default:
            this.role = this.rank;
            break;
        }
        break;

      case 'Italian':
        switch (this.rank) {
          case 1:
            this.role = 'Ace';
            break;
          case 11:
            this.role = 'Jack';
            break;
          case 12:
            this.role = 'Cavalier';
            break;
          case 13:
            this.role = 'King';
            break;
          default:
            this.role = this.rank;
            break;
        }
        break;

      case 'Spanish':
        switch (this.rank) {
          case 1:
            this.role = 'Ace';
            break;
          case 10:
            this.role = 'Jack';
            break;
          case 11:
            this.role = 'Cavalier';
            break;
          case 12:
            this.role = 'King';
            break;
          default:
            this.role = this.rank;
            break;
        }
        break;

      case 'Mexican':
        switch (this.rank) {
          case 1:
            this.role = 'Ace';
            break;
          case 10:
            this.role = 'Jack';
            break;
          case 11:
            this.role = 'Cavalier';
            break;
          case 12:
            this.role = 'King';
            break;
          default:
            this.role = this.rank;
            break;
        }
        break;

      case 'Swiss':
      case 'German':
        switch (this.rank) {
          case 1:
            this.role = 'Ace';
            break;
          case 11:
            this.role = 'Unter';
            break;
          case 12:
            this.role = 'Ober';
            break;
          case 13:
            this.role = 'King';
            break;
          default:
            this.role = this.rank;
            break;
        }
        break;
    }

    this.name = `${this.role} of ${this.suit}`;
  }
}

class Deck {
  constructor(deck) {
    this.deck = [];
    this.typeDeck = deck;
    this.suits;
    this.numberCards;
    this.numberCardsSuit;
    this.rankStart;
    this.rankEnd;

    /*
    Types of Deck
      French or American
      Italian
      Spanish
      Mexican
      Swiss
      German
    */

    switch (this.typeDeck) {
      case 'French':
      case 'American':
        this.suits = ['Hearts', 'Tiles', 'Clovers', 'Pikes'];
        this.numberCards = 52;
        this.numberCardsSuit = 13;
        this.rankStart = 1;
        this.rankEnd = 13;
        break;

      case 'Italian':
        this.suits = ['Cups', 'Coins', 'Clubs', 'Swords'];
        this.numberCards = 52;
        this.numberCardsSuit = 13;
        this.rankStart = 1;
        this.rankEnd = 13;
        break;

      case 'Spanish':
        this.suits = ['Cups', 'Coins', 'Clubs', 'Swords'];
        this.numberCards = 48;
        this.numberCardsSuit = 12;
        this.rankStart = 1;
        this.rankEnd = 12;
        break;

      case 'Mexican':
        this.suits = ['Cups', 'Coins', 'Clubs', 'Swords'];
        this.numberCards = 40;
        this.numberCardsSuit = 10;
        this.rankStart = 1;
        this.rankEnd = 12;
        break;

      case 'Swiss':
        this.suits = ['Roses', 'Bells', 'Acorns', 'Shields'];
        this.numberCards = 36;
        this.numberCardsSuit = 9;
        this.rankStart = 5;
        this.rankEnd = 13;
        break;

      case 'German':
        this.suits = ['Hearts', 'Bells', 'Acorns', 'Leaves'];
        this.numberCards = 36;
        this.numberCardsSuit = 9;
        this.rankStart = 5;
        this.rankEnd = 13;
        break;

      default:
        this.typeDeck = 'American';
        this.suits = ['Hearts', 'Tiles', 'Clovers', 'Pikes'];
        this.numberCards = 52;
        this.numberCardsSuit = 13;
        this.rankStart = 1;
        this.rankEnd = 13;
        break;
    }

    for (let i = 0; i < this.suits.length; i++) {
      let suit = this.suits[i];

      for (let j = this.rankStart; j <= this.rankEnd; j++) {
        if (this.typeDeck === 'Mexican' && (j === 8 || j === 9)) {
        } else if (
          this.typeDeck === 'Mexican' &&
          ((j >= 1 && j <= 7) || (j >= 10 && j <= 12))
        ) {
          this.deck.push(new Card(this.typeDeck, suit, j));
        } else {
          this.deck.push(new Card(this.typeDeck, suit, j));
        }
      }
    }
  }
}

module.exports = {
  Deck,
  Card,
};
