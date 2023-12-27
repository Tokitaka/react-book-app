import { useState } from "react";

function BookCreate( {onCreate} ){
    const [title, setTitle] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(title);
        setTitle('');
    };

    const handleChange = (event) => {
        setTitle(event.target.value);
    };
    return <div>
        <form onSubmit={handleSubmit}>
        <label>Book Title</label>
        <input value={title} onChange={handleChange} />
        <button>Create Title</button>
        </form>
    </div>
    
}

export default BookCreate;