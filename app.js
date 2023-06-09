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
    static deleteBook(el){
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove();
        }

    }

    static clearField(){
        const title = document.querySelector('#title').value = ''
        const author = document.querySelector('#author').value = ''
        const isbn = document.querySelector('#isbn').value = ''
    }
}

// Event : Display Books 
document.addEventListener('DOMContentLoaded',UI.displayBooks)

// Event : Add a Book 
document.querySelector('#book-form').addEventListener('submit',(e)=>{
    e.preventDefault();
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;
    // validate
    if(title === ''|| author ==='' || isbn === ''){
        alert('Please fill in all fields');
    }else{
        const book = new Book(title,author,isbn);
        // console.log(book)
        UI.addBookToList(book)
        // clear fields 
        UI.clearField()
    }

    
})
// Event: Remove a book 
document.querySelector('#book-list').addEventListener('click',(e)=>{
    UI.deleteBook(e.target)
})
