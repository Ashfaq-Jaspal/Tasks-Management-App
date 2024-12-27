import { NavLink } from "react-router";

function AdminDashBoard({ employeeData }) {
    console.log(employeeData);
    const data = employeeData;
    return (
        <div className="w-full h-full p-10">
            <div id="greeting" className="flex items-center justify-between">
                <div>
                    <h3>Hello</h3>
                    <h1 className="text-2xl">Admin 👋</h1>
                </div>
                <NavLink to={"/"}><button className="bg-red-700 px-2 py-1 rounded-sm">Log Out</button></NavLink>
            </div>

            <div className="flex items-center justify-between py-1 px-5 mt-5">
                <form className="w-[45%]">
                    <label htmlFor="title">
                        <h1 className="mt-2 mb-1">Task Title</h1>
                        <input
                            className="text-white border-2 border-emerald-900 outline-none text-md bg-transparent px-3 py-1 rounded-xl w-80"
                            id="title"
                            type="text"
                        />
                    </label>
                    <label htmlFor="date">
                        <h1 className="mt-2 mb-1">Date</h1>
                        <input
                            className="text-white border-2 border-emerald-900 outline-none text-md bg-transparent px-3 py-1 rounded-xl w-80"
                            id="date"
                            type="date"
                        />
                    </label>
                    <label htmlFor="E-name">
                        <h1 className="mt-2 mb-1">Assign To</h1>
                        <input
                            className="text-white border-2 border-emerald-900 outline-none text-md bg-transparent px-3 py-1 rounded-xl w-80"
                            id="E-name"
                            type="text"
                        />
                    </label>
                    <label htmlFor="category">
                        <h1 className="mt-2 mb-1">Category</h1>
                        <input
                            className="text-white border-2 border-emerald-900 outline-none text-md bg-transparent px-3 py-1 rounded-xl w-80"
                            id="category"
                            type="text"
                        />
                    </label>
                </form>

                <div className="w-[45%] flex flex-col gap-2 px-10 py-3">
                    <h1>Description</h1>
                    <textarea
                        name="description"
                        id=""
                        cols="30"
                        rows="10"
                        className="bg-transparent p-3 border-2 border-white-500 rounded-md"
                    ></textarea>
                    <button className="bg-emerald-700 py-1 rounded-md">Create Task</button>
                </div>
            </div>
            <div className="mt-5 font-bold flex items-center justify-between bg-sky-600 px-8 py-1">
                <h1>Employee Name</h1>
                <h1>Task Title</h1>
                <h1>Task Status</h1>
            </div>

            <div className="mt-1 flex flex-col gap-1">
                {data.map((item, index) => {
                    let status;
                    return (
                        <div key={index} className="flex items-center justify-between bg-yellow-600 px-8 py-1">
                            <h1>{item.name}</h1>
                            <div className=" min-w-[54%]">
                                {item.tasks.map((item, index) => {
                                    {
                                        if (item.active) {
                                            status = 'Active';
                                        } else if (item.new) {
                                            status = 'New';
                                        } else if (item.completed) {
                                            status = 'Completed';
                                        } else if (item.failed) {
                                            status = 'Failed';
                                        }
                                    }
                                    return (
                                        <div key={index} className="flex items-center justify-between ">
                                            <li className="">{item.taskTitle}</li>
                                            <h1 className="">{status}</h1>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default AdminDashBoard;
