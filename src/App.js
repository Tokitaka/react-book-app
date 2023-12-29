import { useEffect, useState } from "react";
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import axios from "axios";

function App(){
    //useState에 저장된 state는 새로고침 하면 초기화됨 -> 앱 시작 때 마다 API 호출 
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/books');
        
        setBooks(response.data);
    };

    useEffect(()=> {
        fetchBooks();
    }, []); 
    
    const editBookById = async (id, newTitle) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`,{
            title: newTitle
        });
        
        const updatedBooks = books.map((book)=>{
            if(book.id === id) {
                return {...book, ...response.data};
            }
            return book;
        });
        setBooks(updatedBooks);
    };
    
    const deleteBookById = async (id) => {
        axios.delete(`http://localhost:3001/books/${id}`);
        
        const updatedBooks = books.filter((book)=> {
            return book.id !== id;
        });
        setBooks(updatedBooks);
    };

    const createBooks = async (title) => {
        const response = await axios.post('http://localhost:3001/books', {
            title
        });
  
        const updatedBooks = [
            ...books, 
            response.data
        ];
        setBooks(updatedBooks);
    };

    return (
        <div className="app">
            <h1>Reading List</h1>
            <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
            <BookCreate onCreate={createBooks} />
        </div>
    );
}

export default App;