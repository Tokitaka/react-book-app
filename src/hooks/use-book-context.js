import { useContext } from 'react';
import BookContext from '../context/books';

function useBookContext() {
    return useContext(BookContext);
};

export default useBookContext;