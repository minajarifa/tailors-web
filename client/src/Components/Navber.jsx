import { IoIosNotifications } from "react-icons/io";
import { Link } from "react-router-dom";
import { AuthContext } from "./Auth/AuthProvider";
import { useContext } from "react";

export default function Navber() {
    const { user ,logOut} = useContext(AuthContext); 
 
  return (
    <div id="link">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="text-xl btn btn-ghost">daisyUI</a>
        </div>
        <button className="m-5 text-2xl"><IoIosNotifications /></button>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input type="text" placeholder="Search" className="w-24 input input-bordered md:w-auto" />
          </div>
          <div className="dropdown dropdown-end">
            
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="User Avatar"
                  src={user?.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/'>Membership</Link>
              </li>
              <li>
                <Link to='/Login'>Join us</Link>
              </li>
              <li>
                <Link to='/UserDashboard/AddProduct'>Dashboard</Link>
              </li>
             
              <li>
                <Link to='/Products'>Products</Link>
              </li>
              <li><button onClick={logOut}>Logout</button></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}