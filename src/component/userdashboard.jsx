
import '../styles/userdashboard.css'

const UserDashboard = () => {
    return (
        <div className="userdashboard">

            <div className="container">
                <h1>Learning Lab</h1>
                <p>The mission of the Library's Learning Lab is to create an environment in which Greenwich Library staff and patrons can <br /> empower themselves with a practical understanding of current technology.  </p>
            </div>

            <div className="container2">
                <div className="content2">
                    <h1>LEARN</h1>
                    <h1> LinkedIn Learning </h1>
                    <p>LinkedIn Learning (formerly Lynda) is an online educational site <br />
                        that features thousands of courses and video tutorials where you <br />
                        can discover, complete, and track courses related to your industry <br />
                        or interests.</p>
                </div>
            </div>
            <div className="blueimg">
                <h1>Learn Something New or Get Tech Help</h1>
                <p>Register on the online calendar. For more information call (203) 622-7920.</p>
                <button>View Calender </button>
            </div>
            <div className="container3">
                <div className="content">
                    <h3>LEARN</h3>
                    <h1>Questions About the Digital Library?</h1>
                    <p>Our Digital Library <u> quick guides</u> or  <u> video tutorials </u>will help you
                        access eBooks, audiobooks, videos, music, and magazines from
                        any device.</p>

                </div>
            </div>
            <div className="container4">
                <h1>Tech Training eNewsletter</h1>
                <p>Stay up-to-date on the latest Technology programs and events by subscribing to the Library’s Tech Training eNewsletter.</p>
                <button>sign up</button>
            </div>


        </div>
    );
}

export default UserDashboard;