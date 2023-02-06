import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/addbooks.css'

const AddBooks = () => {

    let navigate = useNavigate()


    let [title, setTitle] = useState("")
    let [authors, setAuthors] = useState("")
    let [categories, setCategories] = useState("")
    let [pageCount, setPageCount] = useState("")
    let [thumbnailUrl, setThumbnailUrl] = useState("")
    let [shortDescription, setShortDescription] = useState("")
    let [longDescription, setLongDescription] = useState("")

    let handleSubmit = (e) => {
        e.preventDefault()
        //all the data ro be posted
        let bookData = { title, authors, categories, pageCount, thumbnailUrl, shortDescription, longDescription }

        //posting to server
        fetch(' http://localhost:4000/books', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bookData)
        })
        alert('book added succefully')
        navigate('/admin/book-list/')


    }

    return (
        <div className="addbooks">
            <h1>Add  a Book</h1>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <div className="title" >
                        <input type="text" placeholder="title of the book" required value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className="authors">
                        <input type="text" placeholder="enter author name" required value={authors} onChange={(e) => setAuthors(e.target.value)} />
                    </div>
                    <div className="categories">
                        <input type="text" placeholder="enter the categories" required value={categories} onChange={(e) => setCategories(e.target.value)} />
                    </div>

                    <div className="pageCount">
                        <input type="text" placeholder="number" required value={pageCount} onChange={(e) => setPageCount(e.target.value)} />

                    </div>

                    <div className="thumbnailUrl">
                        <input type="text" placeholder="imageUrl" required value={thumbnailUrl} onChange={(e) => setThumbnailUrl(e.target.value)} />
                    </div>

                    <div className="shortDescription">
                        <textarea name="" id="" cols="30" rows="10" value={shortDescription} onChange={(e) => setShortDescription(e.target.value)}></textarea>
                    </div>

                    <div className="longDescription">
                        <textarea name="" id="" cols="30" rows="10" required value={longDescription} onChange={(e) => setLongDescription(e.target.value)}></textarea>
                    </div>

                    <button>Add Book</button>
                </form>
            </div>
        </div>
    );
}

export default AddBooks;