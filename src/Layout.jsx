import Mountains from "./components/Mountains";
import Beaches from "./components/Beaches";
import Birds from "./components/Birds";
import Food from "./components/Food";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <Mountains />
      <Outlet />
      <Beaches />
      <Birds />
      <Food />
    </>
  );
};

export default Layout;
