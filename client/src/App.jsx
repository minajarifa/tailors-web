import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navber from "./Components/Navber";

function App() {



  return (
    <>
      <div className="">
        <div>
          <Navber/>
        </div>
        <div className="mx-32 my-10">
          <Outlet />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
