document.addEventListener('DOMContentLoaded', () => {

    //card option
    const cardArray = [
        {
            name: 'burger',
            img: 'images/burger.png'
        },
        {
            name: 'burger',
            img: 'images/burger.png'
        },
        {
            name: 'cake',
            img: 'images/cake.jpg'
        },
        {
            name: 'cake',
            img: 'images/cake.jpg'
        },
        {
            name: 'hamtoro',
            img: 'images/hamtoro.png'
        },
        {
            name: 'hamtoro',
            img: 'images/hamtoro.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'pusheen',
            img: 'images/pusheen.png'
        },
        {
            name: 'pusheen',
            img: 'images/pusheen.png'
        },
        {
            name: 'ramen',
            img: 'images/ramen.png'
        },
        {
            name: 'ramen',
            img: 'images/ramen.png'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = [];
    
    // board creation
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img');
            card.setAttribute('src', 'images/card.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
            
        }
    }

    createBoard();
    
    // check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match');
            cards[optionOneId].setAttribute('src', 'images/white.png');
            cards[optionTwoId].setAttribute('src', 'images/white.png');
            cardsWon.push(cardsChosen);
        } else {
            cards[optionOneId].setAttribute('src', 'images/card.png');
            cards[optionTwoId].setAttribute('src', 'images/card.png');
            alert('Sorry, try again');
        }
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length;
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Congratultations! You found them all!'
        }
    }

    // flip card
    function flipCard() {
        var cardId;
        cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }

});