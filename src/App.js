
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LandingPage from './component/Landindpage';
import AdminLogin from './component/adminLogin';
import UserLogin from './component/userlogin';
import AdminPortal from './component/adminPortal';
import UserPortal from './component/userportal';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/admin-login" element={<AdminLogin/>}/>
        <Route path="/user-login" element={<UserLogin/>}/>
       <Route path="/admin/*" element={<AdminPortal/>}/>
      <Route path='/user/*' element={<UserPortal/>}/>
       
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
