import { useState } from "react";
import useBookContext from "../hooks/use-book-context";

function BookCreate(){
    const { createBooks } = useBookContext();
    const [title, setTitle] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        createBooks(title);
        setTitle('');
    };

    const handleChange = (event) => {
        setTitle(event.target.value);
    };
    
    return (
    <div className="book-create">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
        <label>Book Title</label>
        <input className="input" value={title} onChange={handleChange} />
        <button className="button">Create</button>
        </form>
    </div>
    );
    
}

export default BookCreate;