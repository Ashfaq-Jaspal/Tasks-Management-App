import { useState } from 'react';
import { NavLink } from 'react-router';

function EmployeeDashBoard({ employeeData, logInPersonEmail, logInPersonPass }) {
    const data = employeeData;
    const email = logInPersonEmail;
    const password = logInPersonPass;
    const [taskColor, setTaskColor] = useState('')
    // const [newTasks, setNewTasks] = useState(0)
    // const [completeTasks, setCompleteTasks] = useState(0)
    // const [failedTasks, seFailedTasks] = useState(0)
    let activeTasks = 0;
    let NewTasks = 0;
    let completedTasks = 0;
    let failedTasks = 0;
    const logInPersonName = data.map((item, index) => {
        {
            if (item.email == email) {
                return item.name;
            }
        }
    });
    let indexOfLogInPersonTasks;
    const logInPersonTasks = data.map((item, index) => {
        {
            if (item.email == email) {
                indexOfLogInPersonTasks = index;
                return item.tasks;
            }
        }
    });
    let tasksArray = logInPersonTasks[indexOfLogInPersonTasks];
    // console.log(tasksArray);
    const logInPersonTaskStatus = tasksArray.map((item, index) => {
        {
            if (item.active) {
                activeTasks++;
            } else if (item.new) {
                NewTasks++;
            } else if (item.completed) {
                completedTasks++;
            } else if (item.failed) {
                failedTasks++;
            }
        }
        return item;
    });
    // console.log(logInPersonTaskStatus);
    // let status
    // logInPersonTaskStatus.map((item, index) => {
    //         if (item.active) {
    //             status = 'Active';
    //         } else if (item.new) {
    //             status = 'New';
    //         } else if (item.completed) {
    //             status = 'Completed';
    //         } else if (item.failed) {
    //             status = 'Failed';
    //         }
    //     })
    //     console.log(status);
    let status 
    // console.log(logInPersonTaskStatus.length);

    return (
        <div className="w-full h-screen p-10">
            <div id="greeting" className="flex items-center justify-between">
                <div>
                    <h3>Hello</h3>
                    <h1>{logInPersonName} 👋</h1>
                </div>
                <NavLink to={"/"}><button className="bg-red-700 px-2 py-1 rounded-sm">Log Out</button></NavLink>
            </div>

            <div id="Tasks Category" className="mt-10 flex flex-shrink-0 gap-5 items-center justify-between">
                <div className="bg-blue-600 flex-shrink-0 min-w-[18vw] rounded-md px-4 py-2">
                    <h1 className="text-xl">{NewTasks}</h1>
                    <h3>New Task</h3>
                </div>
                <div className="bg-green-600 flex-shrink-0 min-w-[18vw] rounded-md px-4 py-2">
                    <h1 className="text-xl">{completedTasks}</h1>
                    <h3>Completed Task</h3>
                </div>
                <div className="bg-yellow-600 flex-shrink-0 min-w-[18vw] rounded-md px-4 py-2">
                    <h1 className="text-xl">{activeTasks}</h1>
                    <h3>Active Task</h3>
                </div>
                <div className="bg-red-600 flex-shrink-0 min-w-[18vw] rounded-md px-4 py-2">
                    <h1 className="text-xl">{failedTasks}</h1>
                    <h3>Failed Task</h3>
                </div>
            </div>

            <div id="Tasks List" className=" flex justify-center overflow-auto gap-5 mt-20">
                {logInPersonTaskStatus.map((item, index) => {
                    {
                        if (item.active) {
                            status=`Active`;
                        } else if (item.new) {
                            status=`New`;
                        } else if (item.completed) {
                            status=`Completed`;
                        } else if (item.failed) {
                            status=`Failed`;
                        }
                    }
                    return (
                        <div key={index} className="w-[220px] flex-shrink-0 min-h-[250px] bg-blue-600 px-5 py-8 rounded-md">
                            <div className="flex gap-5 items-center justify-between">
                                <button className="bg-red-600 px-2 py-0.5 rounded-md">
                                    {status}
                                </button>
                                <h3>{item.taskDate}</h3>
                            </div>
                            <h1 className="text-lg font-medium mt-4">{item.taskTitle}</h1>
                            <p className="text-lg mt-8">{item.taskDescription}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default EmployeeDashBoard;
