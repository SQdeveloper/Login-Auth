import { Link } from "react-router-dom";
import DefaultLayaut from "../components/DefaultLayaut";

const SignOut = () => {
    return (
        <DefaultLayaut>            
            <Link to='/' className="rounded-full bg-orange-500 px-6 py-1 mt-4 text-white">Exit</Link>
        </DefaultLayaut>
    );
};

export default SignOut;