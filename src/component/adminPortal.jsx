import AdminNavbar from "./adminNavbar";
import AdminDasbBoard from "./adminDashboard";
import { Route, Routes } from "react-router-dom";
import BookList from "./bookList";
import UserList from "./usetList";
import ReadBook from "./readBook";
import AddBooks from "./addbook";
import AddUsers from "./addusers";


const AdminPortal = () => {

  return (
    <div className="adminportal">
      <AdminNavbar />
      <Routes>
        <Route path="/" element={<AdminDasbBoard />} />
        <Route path="/book-list" element={<BookList />} />
        <Route path="/user-list" element={<UserList />} />
        <Route path="/book-list/:id" element={<ReadBook />} />
        <Route path="/add-book" element={<AddBooks />} />
        <Route path="/add-user" element={<AddUsers />} />
      </Routes>
    </div>
  );
}

export default AdminPortal;