import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import '../styles/bookList.css'





const BookList = () => {
    let [books, setBooks] = useState([])

    useEffect(() => {
        let fetchdata = async () => {
            let responce = await fetch(' http://localhost:4000/books')
            let data = await responce.json()
            setBooks(data)   
        }
        fetchdata()
    }, [books])

    let handleDelete = (id, title) => {
        fetch(`  http://localhost:4000/books/${id}`, {
            method: 'DELETE'
        });
        alert(`${title} has been deleted`)

    }
    let navigate = useNavigate()

    //to fetch the Route value
    let location = useLocation()

    let read = (id) => {
        if (location.pathname === '/admin/book-list') {
            navigate(`/admin/book-list/${id}`)
        } else {
            navigate(`/user/book-list/${id}`)
        }
    }



    return (

        <div className="booklist">

            <h1>NUMBER OF BOOKS AVAILABLE:{books.length}</h1>
            <div className="books_section">
                {books.map(data => (
                    <div className="book_container">
                        <div className="left">
                            <div className="image">
                                <img src={data.thumbnailUrl} alt="" />
                            </div>
                        </div>
                        <div className="right">
                            <div className="book_card">
                                <h4>Title:{data.title}</h4>
                                <h6> Authors:{data.authors.toString()}</h6>
                                <h6>PageCount:{data.pageCount}</h6>
                                <h6>category:{data.categories.toString()}</h6>
                                <button onClick={() => read(data.id)}>readmore</button>
                                {location.pathname === '/admin/book-list' && <button onClick={() => handleDelete(data.id, data.title)}>Delete</button>}

                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default BookList;






