import { Outlet } from "react-router-dom";
import Sideber from "../Sideber";

export default function UserDashboard() {
    return (
        <div className="grid">
            <div >
                <Outlet/>
            </div>
            <div className="">
                <Sideber/>
            </div>
        </div>
    )
}
