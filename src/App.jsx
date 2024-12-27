import Login from './pages/Login';
import EmployeeDashBoard from './pages/EmployeeDashBoard';
import AdminDashBoard from './pages/AdminDashBoard';
import { useState } from 'react';
import { getEmployeeData, getAdminData } from './utils/constant/Data';
import { Route, Routes, useNavigate } from 'react-router';
import SignUp from './pages/SignUp';
import Error from './pages/Error';

function App() {
    const [logInPerson, setlogInPerson] = useState(null);
    const [logInPersonEmail, setlogInPersonEmail] = useState();
    const [logInPersonPass, setlogInPersonPass] = useState();
    const navigate = useNavigate();
    const adminData = getAdminData();
    const employeeData = getEmployeeData();

    function userHandler(email, pass) {

        {
            const user1 = employeeData.filter((user, index, array) => {
                return employeeData[index].email == email && employeeData[index].password == pass;
            });
            const user2 = adminData.filter((user, index, array) => {
                return adminData[index].email == email && adminData[index].password == pass;
            });
            if (user1[0] == null && user2[0] == null) {
                console.log('user does not exist');
            } else if (email == 'admin1@example.com' && pass == '123') {
                console.log('admin');
                setlogInPerson('admin');
                setlogInPersonEmail(email)
                setlogInPersonPass(pass)
                navigate(`/AdminDashBoard`);
            } else {
                console.log('Employee');
                setlogInPerson('employee');
                setlogInPersonEmail(email)
                setlogInPersonPass(pass)
                navigate(`/EmployeeDashBoard`);
            }
        }
    }
    return (
        <>
            <Routes>
                {logInPerson == null ? <Route path="/" element={<Login userHandler={userHandler} />} /> : ''}
                {logInPerson == "admin" ? <Route path='/AdminDashBoard' element={<AdminDashBoard employeeData={employeeData}/>} /> : logInPerson == "employee" ? <Route path='/EmployeeDashBoard' element={<EmployeeDashBoard employeeData={employeeData} logInPersonEmail={logInPersonEmail} logInPersonPass={logInPersonPass}/>} /> : "" }
                {/* <Route path="/AdminDashBoard" element={<AdminDashBoard />} />
                <Route path="/EmployeeDashBoard" element={<EmployeeDashBoard />} /> */}
                <Route path="/SignUp" element={<SignUp />} />
                <Route path="/" element={<Login userHandler={userHandler} />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </>
    );
}

export default App;
