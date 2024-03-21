import { Outlet } from "react-router";
import NavBar from "../components/NavBar"
import Footer from "../components/Footer";


const MainLayout = () => {
  return (
    <>
      <div className="h-24">
        <NavBar />
      </div>
      <div className="min-h-[calc(100vh-310px)]">
        <Outlet />
      </div>
      <Footer/>
    </>
  );
}

export default MainLayout