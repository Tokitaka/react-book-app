import { useState, createContext, useCallback } from 'react';
import axios from 'axios';

const BookContext = createContext();

function Provider({ children }) {
        //useState에 저장된 state는 새로고침 하면 초기화됨 -> 앱 시작 때 마다 API 호출 
        const [books, setBooks] = useState([]);

        const fetchBooks = useCallback(async () => {
            const response = await axios.get('http://localhost:3001/books');
            
            setBooks(response.data);
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
        await axios.delete(`http://localhost:3001/books/${id}`);

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

    const valueToShare = {
        books, 
        fetchBooks,
        editBookById,
        deleteBookById,
        createBooks
    };

    return <BookContext.Provider value={valueToShare}>{children}</BookContext.Provider>
};

export {Provider};
export default BookContext;