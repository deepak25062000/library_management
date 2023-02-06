import { Link } from "react-router-dom";
import '../styles/landpage.css'

const LandingPage = () => {
    return (
        <div className="landingPage">
            <div className="selectLoginType">
                <h1>Library Management System</h1>
                <div className="logo">
                    <div className="adminlogo">
                        <img height="100px" src="images/orange.png" alt="" />
                    </div>
                    <div className="userlogo">
                        <img height="100px" src="images/green.png" alt="" />
                    </div>
                </div>
                <div className="page">
                    <div className="admin">
                        <Link to='/admin-login' className="btn1"> Admin Login</Link>
                    </div>
                    <div className="user">
                        <Link to="/user-login" className="btn2"> User Login</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage