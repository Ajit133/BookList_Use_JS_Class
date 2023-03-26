// Book Class
class Book{
    constructor(title,author,isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// UI class : Handle UI Taska 
class UI{
    static displayBooks(){
        const StoreBooks =[
            {
                title: 'Book One',
                author: 'John Doe',
                isbn: '343434'
            },
            {
                title:'Book Two',
                author:'Jane Doe',
                isbn:'4545457'
            }
        ];
        const books = StoreBooks;
        books.forEach((book)=> UI.addBookToList(book));


    }
    static addBookToList(book){
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;
        list.appendChild(row)
    }
}

// Event : Display Books 
document.addEventListener('DOMContentLoaded',UI.displayBooks)