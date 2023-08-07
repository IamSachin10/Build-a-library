class Media {
    constructor(title) {
        this._tittle = title;
        this._isCheckedOut = false;
        this._rating = [];
    }
    get title() {
        return this._title;
    }
    get isCheckedOut() {
        return this._isCheckedOut;
    }
    get rating() {
        return this._rating;
    }

    set isCheckedOut(value) {
        this._isCheckedOut = value;
    }

    toggleCheckedOutStatus() {
        this.isCheckedOut = !this.isCheckedOut;
    }

    getAverageRating() {
        let ratingSum = this.rating.reduce((currSum, rating) => currSum + rating, 0);
        return ratingSum / this.rating.length;
    }

    addRating(getAvgRating) {
        this.rating.push(getAvgRating);
    }
}

class Book extends Media {
    constructor(author, title, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }
    get author() {
        return this._author;

    }
    get pages() {
        return this._pages;
    }
}

class Movie extends Media {
    constructor(director, title, runTime) {
        super(title)
        this._director = director;
        this._runTime = runTime;

    }
    get director() {
        return this._director = director;
    }

    get runTime() {
        return this._runTime;
    }
}

const historyOfEverything = new Book("Bill Bryson", "A short History of Nearly", 544);

historyOfEverything.toggleCheckedOutStatus();

console.log(historyOfEverything.isCheckedOut);

historyOfEverything.addRating(4)
historyOfEverything.addRating(5)
historyOfEverything.addRating(5)
console.log(historyOfEverything.getAverageRating());


const speed = new Movie('jan de vent', 'speed', 116);
speed.toggleCheckedOutStatus();
console.log(speed.isCheckedOut);

speed.addRating(4);
speed.addRating(5);
speed.addRating(5);
console.log(speed.getAverageRating())

