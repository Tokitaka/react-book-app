import { useState } from "react";
import BookCreate from './components/BookCreate';

function App(){
    const [books, setBooks] = useState([]);

    const createBooks = (title) => {
        console.log("title"+ title);
    };
    return <div>
        <BookCreate onCreate={createBooks} />
    </div>
}

export default App;