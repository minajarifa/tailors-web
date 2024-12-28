import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function Social() {
    return (
        <div className="flex items-center justify-center gap-10 mx-4 my-10 text-4xl">
            <button className="btn btn-outline ">Login with <FaGithub /></button>
            <button className="btn btn-outline ">Login with <FcGoogle /></button>
        </div>
    )
}
