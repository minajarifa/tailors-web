import { Link } from "react-router-dom";
export default function Navber() {
  return (
    <div id="link">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
          </div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://e7.pngegg.com/pngimages/168/827/png-clipart-computer-icons-user-profile-avatar-profile-woman-desktop-wallpaper-thumbnail.png"/>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><Link to='/'>Home</Link></li>
              <li>
                <Link to='/Home2'>Home2</Link>
              </li>
              <li><Link>Logout</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}