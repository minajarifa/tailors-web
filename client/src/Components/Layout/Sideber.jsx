import { Link } from "react-router-dom";

export default function Sideber() {
    return (
        <div className="w-56 h-full text-white menu rounded-box dark:bg-gray-800">
            <Link className="px-6 py-2 m-5 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform rounded-lg hover:bg-gray-500 x focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80" to="/UserDashboard/MyProfile">My Profile</Link>
            
            <Link className="px-6 py-2 m-5 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform rounded-lg hover:bg-gray-500 x focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80" to="/UserDashboard/AddProduct">Add Post</Link>
            
            <Link className="px-6 py-2 m-5 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform rounded-lg hover:bg-gray-500 x focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80" to="/UserDashboard/MyProducts">My Post</Link>
            
        </div>
    )
}
