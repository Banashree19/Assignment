import { Link } from "react-router-dom";

const Category = () => {
  return (
    <>
      <div className="filters">
        <li className="nav-item">
          <Link className="nav-link" to="/beaches">
            Beaches
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/birds">
            Birds
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/food">
            Food
          </Link>
        </li>
      </div>
    </>
  );
};

export default Category;
