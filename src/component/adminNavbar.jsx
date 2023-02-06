import { Link } from 'react-router-dom';
import '../styles/adminNavbar.css'
const AdminNavbar = () => {
    return (
        <div className="adminNavbar">
            <div className="navbar">
                <h2>ADMIN-PORTAL</h2>
                <div className="rightbar">
                    <div className="icons">
                        <img className='imgs1' src="/images/donet.png" alt="donet" />
                        <img className='imgs2' src="/images/licard.jpg" alt="li-card" />
                        <img className='imgs3' src="/images/account.png" alt="account" />
                        <img className='imgs4' src="/images/search.png" alt="search" />
                    </div>

                    <div className="main_links">
                        <ul>
                            <Link to="" className='main' href="">Donete</Link>
                            <Link to="" className='main' href="">Li-Card</Link>
                            <Link to=" " className='main' href="">Account</Link>
                            <Link to=" " className='main' href="">Search</Link>
                        </ul>
                    </div>
                </div>


            </div>
            <div className="navbar2">
                <div className="nav_lists">
                    <ul>
                        <Link to="/admin/" className='li' href="">DASHBOARD</Link>
                        <Link to="/admin/add-book" className='li' href="">ADD-BOOKS</Link>
                        <Link to="/admin/add-user" className='li' href="">ADD-USERS</Link>
                        <Link to="/admin/book-list" className='li' href="">BOOK-LIST</Link>
                        <Link to="/admin/user-list" className='li' href="">USER-LIST</Link>
                        <Link to="/ " className='li' href="">LOG-OUT</Link>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AdminNavbar;