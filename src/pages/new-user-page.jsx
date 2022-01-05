import UserForm from "../components/UserForm";

const NewUser = () => {
    return (
        <div className='main-panel'>
            <div className='content-wrapper'>
                <div className='row'>
                    <UserForm title={"New User"} id={0}/>
                </div>
            </div>
        </div>
    );
};

export default NewUser;
