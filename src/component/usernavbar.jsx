import '../styles/usernavbar.css'
import { Link } from "react-router-dom";
const UserNavbar = () => {
    return (
        <div className="usernavbar">
            <div className="navbar">
                <div className="library_logo">
                    <img height="40px" width="70px" src="/images/library.jpg" alt="" />
                    <h2> USER LIBRARY</h2>
                </div>
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
            <div className="navbar_links">
                <div className="nav_lists">
                    <ul>
                        <Link to="/user/" className='lis' href="">DASHBOARD</Link>
                        <Link to="/user/book-list" className='lis' href="">BOOK-LIST</Link>
                        <Link to="/ " className='lis' href="">LOG-OUT</Link>
                    </ul>
                </div>
            </div>

        </div>
    );
}

export default UserNavbar;