import UserForm from "../components/UserForm";

const NewUser = () => {
    return (
        <div className='main-panel'>
            <div className='content-wrapper'>
                <div className='row'>
                    <UserForm
                        title={"New User"}
                        user={{
                            id: 0,
                            full_name: "",
                            address: "",
                            gender: "",
                            mobile: "",
                            email: "",
                            job: "",
                            salary: 0,
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default NewUser;
