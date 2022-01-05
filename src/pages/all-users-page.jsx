import Table from "../components/Table";

const AllUsers = () => {
    return (
        <div className='content-wrapper'>
            <div className='row'>
                <div className='col-lg-12 grid-margin stretch-card'>
                    <Table
                        attributes={["full_name", "address","gender", "mobile", "email", "job", "salary"]}
                        records={[
                            {
                                full_name: "Ahmed Khalid Ali",
                                address: "Khartoum, Sudan",
                                gender: "male",
                                mobile: "+249999999999",
                                email: "example@hotmail.com",
                                job: "Software Engineer",
                                salary: "10000",
                            },
                            {
                                full_name: "Ahmed Khalid Ali",
                                address: "Khartoum, Sudan",
                                gender: "male",
                                mobile: "+249999999999",
                                email: "example@hotmail.com",
                                job: "Software Engineer",
                                salary: "10000",
                            },
                        ]}
                    />
                </div>
            </div>
        </div>
    );
};

export default AllUsers;
