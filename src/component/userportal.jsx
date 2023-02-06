import { Routes, Route } from "react-router-dom";
import UserNavbar from "./usernavbar";
import BookList from "./bookList";
import ReadBook from "./readBook";
import UserDashboard from "./userdashboard";

const UserPortal = () => {
    return (
        <div className="userportal">
            <UserNavbar />
            <Routes>
                <Route path="/" element={<UserDashboard />} />
                <Route path="/book-list" element={<BookList />} />
                <Route path="/book-list/:id" element={<ReadBook />} />
            </Routes>
        </div>
    );
}

export default UserPortal;