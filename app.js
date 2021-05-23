class Media {
  constructor (title) {
    this._title= title;
    this._isCheckedOut= false;
    this._ratings= [];
  }

  get title() {
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  get ratings() {
    return this._ratings;
  }

  set isCheckedOut (checkedOut) {
    this._isCheckedOut= checkedOut;
  }

// -------Methods----------
toggleCheckOutStatus (isCheckedOut) {
  if (this._isCheckedOut === true) {
    return false;
  } else {
    return true;
  }
}

getAverangeRating(ratings) {
  const averangeRatings= (this._ratings.reduce(function(x, y) {
    return x + y;
  }) / this._ratings.length).toFixed(2);
  return this._ratings= averangeRatings;
}

addRating (ratings) {
  this._ratings.push(ratings);
}

}

class Book extends Media {
  constructor (author, title, pages) {
    super (title);
    this._author= author;
    this._pages= 0;
  }

  get author() {
    return this._author;
  }
  get pages() {
    return this._pages;
  }

}

class Movie extends Media {
  constructor (director, title, runTime) {
    super (title);
    this._director= director;
    this._runTime= 0;
  }

  get director() {
    return this._director;
  }
  get runTime() {
    return this._runTime;
  }
}

class CD extends Media {
  constructor (artist, title, songs) {
    super (title);
    this._artist= artist;
    this._songs= [];
  }

  get artist() {
    return this._artist;
  }
  get songs () {
    return this._songs;
  }
}


const historyOfEverything=new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverangeRating());

const speed= new Movie('Jan de Bont', 'Speed', 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverangeRating());

const thriller= new CD('Michael Jackson', 'Thriller', 'Wanna Be Startin Somethin');
thriller.toggleCheckOutStatus();
console.log(thriller.isCheckedOut);
thriller.addRating(5);
thriller.addRating(5);
thriller.addRating(3);
console.log(thriller.getAverangeRating());
