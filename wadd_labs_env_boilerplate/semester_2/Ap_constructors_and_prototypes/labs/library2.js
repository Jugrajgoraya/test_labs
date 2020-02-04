class Book {
    constructor(title, authors, edition){
        this.title =title;
        this.authors = authors;
        this.edition = edition;
    }
    
}
const eloquentJS = new Book("Eloquent Javascript", ["Marijn Haverbeke"], 3);
const speakingJS = new Book("Speaking JavaScript", ["Dr. Axel Rauschmayer"], 1);
const theRustProgLang = new Book( "The Rust Programming Language", ["Steve Klabnik", "Carol Nichols"], 2 );

class Library {
    constructor(){
        this.books = [];
    }

    shelve(book) {
        this.books.push(book);
        this.books.sort((a,b) =>{
            if(a.title>b.title){
                return 1;
            }else{
                return -1;
            }
        })
    }
    
    findByTitle(string){
        let searchResults = []
        for (let book of this.books){
            if(book.title.toLowerCase().includes(string.toLowerCase())){
                searchResults.push(book);
            }
        }
        return searchResults;
    }
    
    list (){
        return this.books;
    }
}
    
const lib = new Library();
lib.shelve(eloquentJS);
lib.shelve(theRustProgLang);
lib.shelve(speakingJS);
console.log(lib.findByTitle("the"));

console.log(lib);