import { Outlet } from "react-router";
import NavBar from "../components/NavBar"


const MainLayout = () => {
  return (
    <>
      <div className="h-24">
        <NavBar />
      </div>
      <div className="min-h-[calc(100vh-117px)]">
        <Outlet />
      </div>
    </>
  );
}

export default MainLayout