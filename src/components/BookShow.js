import { useState } from 'react';
import BookEdit from './BookEdit';
import useBookContext from '../hooks/use-book-context';

function BookShow({ book }){
    const { deleteBookById } = useBookContext();
    const [showEdit, setShowEdit] = useState(false);

    const handleDeleteClick = () => {
        deleteBookById(book.id);
    };

    const handleEditClick = () => {
        setShowEdit(!showEdit);
    };

    const handleSubmit = () => {
        setShowEdit(false);
    };

    let content = <h3>{book.title}</h3>;
    if (showEdit) {
        content = <BookEdit book={book} onSubmit={handleSubmit} />;
    }

    return(
        <div className="book-show">
            <img alt="bookImage" src={`https://picsum.photos/seed/${book.id}/300/200`} />
            <div className="actions">
                <button className="edit" onClick={handleEditClick}>Edit</button>
                <button className="delete" onClick={handleDeleteClick}>Delete</button>
            </div>
            <div>{content}</div>
        </div>

    );
}

export default BookShow;