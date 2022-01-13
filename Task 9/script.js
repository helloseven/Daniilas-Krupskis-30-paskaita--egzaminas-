/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kiru atveju false 
------------------------------------------------------------------------------------------------------ */

class Movie{
    constructor(title, director, budget){
        this.title = title;
        this.director = director;
        this.budge = budget;
    }
    wasExpensive(){
        if(this.budget > 100000000){
            return true;
        } else {
            return false;
        }
    }
}

let newMovie = new Movie('JS kursai', 'Svogunas Svogunaitis', 50000000);
console.log(newMovie.wasExpensive());
