import { Outlet } from "react-router-dom";
import Sideber from "../Sideber";



export default function UserDashboard() {
    return (
        <div className="grid grid-cols-12 ">
            <div className="col-span-2 mt-10 ml-5">
                <Sideber/>
            </div>
            <div className="col-span-10 mt-10">
                <Outlet/>
            </div>
        </div>
    )
}