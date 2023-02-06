import { useState, useEffect } from "react";
import { useParams ,useNavigate} from "react-router-dom";
import '../styles/readbook.css'


const ReadBook = () => {
    let [books, setBooks] = useState([])
    let param = useParams()
    useEffect((id) => {
        let fetchdata = async () => {
            let responce = await fetch(`http://localhost:4000/books/${param.id}`)
            let data = await responce.json()
            setBooks(data)
        }
        fetchdata()

    })

    return (
        <div className="readbook">

            <div className="details">
                <div className="description">
                    <h1>TITLE:-{books.title}</h1>
                    <p><b>shortDescription</b>:{books.shortDescription}</p>
                    <p><b>longDescription:</b>{books.longDescription}</p>
                </div>
            </div>
        </div>
    );
}

export default ReadBook;