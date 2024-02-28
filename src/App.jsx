/* eslint-disable no-undef */
import "./index.css";
import SearchPage from "./components/SearchPage";
import GalleryPage from "./components/GalleryPage";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <SearchPage />
        <GalleryPage />
      </Router>
    </>
  );
}

export default App;
