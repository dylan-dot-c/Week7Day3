// Create a base class of GameMember and 2 children classes of Dealer, Player

// both dealer and player have:

// hand : array of 2 numbers (1-13) ex: [5, 12] which starts with 2 random numbers

// hit() : ability to add a random number [1-13] to their hand

// When a Dealer trys to hit he can only hit if he has his hand adds up to less than a total of 17 (so 16 and under)

// When a Play hits they can hit as long as their total is under 21

// Use the randomNumber function provided below to gernerate a random number 1-12

class GameMember {
    constructor() {
        this.hand = this.getStartingHand()
        console.log(this.constructor.name, this.hand)
    }

    hit() {
        this.addNumber()
    }

    addNumber() {
        let number = this.getRandomNumber()
        this.hand.push(number)
        console.log("Adding number:", number, this.constructor.name)
    }

    getTotal() {
        let sum = 0;
        for(let num of this.hand) {
            sum+= num
        }
        return sum
    }

    getStartingHand() {
        return [this.getRandomNumber(), this.getRandomNumber()]
    }

    getRandomNumber() {
        let randomNum = Math.floor(Math.random() * 13) + 1;
        return randomNum
    }
}

class Dealer extends GameMember {
    constructor() {
        super()
    }

    hit() {
        if(this.getTotal() < 17) {
            this.addNumber()
        }else {
            console.log("Total is not less than 17. Total is:", this.getTotal())
        }
    }
}

class Player extends GameMember {
    constructor() {
        super()
    }

    hit() {
        const total = this.getTotal()
        if(total < 21) {
            this.addNumber()
        }else {
            console.log("Total is not less than 21. Total is:", total)
        }
    }
}

let player = new Player()
let dealer = new Dealer()

for(let i=0; i<10; i++) {
    player.hit()
    dealer.hit()
}
console.log(player)
console.log(dealer)


