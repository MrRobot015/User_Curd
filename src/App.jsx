import "./App.css";
import Sidebar from "./components/Sidebar";
import AllUsers from "./pages/all-users-page";
import NewUser from "./pages/new-user-page";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className='container-scroller'>
            <Sidebar />
            <Routes>
                <Route path='/' element={<AllUsers />} />
                <Route path='/new_user' element={<NewUser />} />
            </Routes>
        </div>
    );
}

export default App;
