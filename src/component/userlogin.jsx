import { useNavigate } from "react-router-dom";
import '../styles/userlogin.css'
const UserLogin = () => {
    let Navigate = useNavigate()
    let login = () => {
        Navigate('/user/')
    }
    return (
        <div className="userLogin">
            <div className="form_container_card">
                <h1>Login as User</h1>
                <div className="form_input">
                    <form onSubmit={login}>
                        <div className="email">
                            <img src="images/smalluser.png" alt="" />
                            <input type="email" placeholder="Email address" />
                        </div>
                        <div className="password">
                            <img src="images/security.jpg" alt="" />
                            <input type="password" placeholder="Enter Password" />
                        </div>
                        <div className="btn1">
                            <button className="btn_btn_primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
}

export default UserLogin;