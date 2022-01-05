import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <>
            <nav className='sidebar sidebar-offcanvas' id='sidebar'>
                <ul className='nav'>
                    <li className='nav-item'>
                        <Link to='/' className='nav-link'>
                            <AdminPanelSettingsIcon />
                            <h4>Users Crud</h4>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/new_user' className='nav-link'>
                            <PersonAddAltIcon style={{ margin: "10px" }} />
                            <span className='menu-title'>New User</span>
                        </Link>
                    </li>{" "}
                </ul>
            </nav>
        </>
    );
};

export default Sidebar;
