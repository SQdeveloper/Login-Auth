const Login = () => {
    return (
        <div className="text-center h-svh flex flex-col justify-center w-[350px] mx-auto">
            <h1 className="text-3xl font-bold text-orange-500">Login</h1>
            <form className="flex gap-8 flex-col mt-8 w-full mx-auto items-center" action="">
                <div className="text-start flex flex-col gap-1.5 w-full">
                    <label className="font-medium mb-2" htmlFor="">Username:</label>
                    <input className="h-8 rounded-sm pl-2 w-full border border-gray-300" type="text" placeholder="Introduce your username" />
                </div>
                <div className="text-start flex flex-col gap-1.5 w-full">
                    <label className="font-medium mt-4 mb-2" htmlFor="">Password:</label>
                    <input className="h-8 rounded-sm pl-2 w-full border border-gray-300" type="text" placeholder="Introduce your password" />
                </div>
                <button className="w-full bg-orange-500 text-white rounded-sm h-8 font-medium hover:opacity-[70%] transition-opacity">Login</button>
            </form>
        </div>
    )
};

export default Login;