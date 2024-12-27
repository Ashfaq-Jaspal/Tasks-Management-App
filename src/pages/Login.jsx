import { useState } from 'react';

function Login({userHandler}) {
    const [email, setEmail] = useState(``);
    const [pass, setPass] = useState(``);
    const submitHandler = (e) => {
        setEmail(``);
        setPass(``);
        userHandler(email,pass)
        e.preventDefault();
    };
    return (
        <form
            onSubmit={(e) => {
                submitHandler(e);
            }}
            className="flex flex-col px-10 py-20 rounded-xl gap-4 border-2 border-emerald-900 items-center justify-center"
        >
            <input
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
                value={email}
                type="email"
                required
                placeholder="Enter email"
                className="text-white border-2 border-emerald-900 outline-none text-md bg-transparent px-3 py-1 rounded-full w-80"
            />
            <input
                onChange={(e) => {
                    setPass(e.target.value);
                }}
                value={pass}
                type="password"
                required
                placeholder="Enter Password"
                className="text-white border-2 border-emerald-900 outline-none text-md bg-transparent px-3 py-1 rounded-full w-80"
            />
            <button type="submit" className="px-3 py-1.5 mt-5 w-80 text-white bg-emerald-900 border-none rounded-full">
                Submit
            </button>
        </form>
    );
}

export default Login;
