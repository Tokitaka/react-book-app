import { useState } from 'react';
import BookEdit from './BookEdit';

function BookShow({book, onDelete}){
    const [showEdit, setShowEdit] = useState(false);

    const handleDeleteClick = () => {
        onDelete(book.id);
    };

    const handleEditClick = () => {
        setShowEdit(!showEdit);
    };

    let content = <h3>{book.title}</h3>;
    if (showEdit) {
        content = <BookEdit />;
    }

    return(
        <div className="book-show">
            <div className="actions">
                <button className="edit" onClick={handleEditClick}>Edit</button>
                <button className="delete" onClick={handleDeleteClick}>Delete</button>
            </div>
            <div>
               {content}
            </div>
        </div>

    );
}

export default BookShow;