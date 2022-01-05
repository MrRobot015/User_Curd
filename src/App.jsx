import "./App.css";
import Sidebar from "./components/Sidebar";
import AllUsers from "./pages/all-users-page";
import NewUser from "./pages/new-user-page";
import EditUser from "./pages/edit-user-page";
import { Routes, Route } from "react-router-dom";
import User from "./pages/single-user-page";

function App() {
    return (
        <div className='container-scroller'>
            <Sidebar />

            <Routes>
                <Route path='/' element={<AllUsers />} />
                <Route path='/new_user' element={<NewUser />} />
                <Route path='/user/:id'>
                    <Route path='/user/:id/' element={<User />} />
                    <Route path='/user/:id/edit' element={<EditUser />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
