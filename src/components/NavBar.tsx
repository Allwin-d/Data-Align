import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="bg-blue-700  px-4 py-4 rounded-b-md">
      <div className="flex justify justify-around">
        <Link
          className="text-white bg-red-500 px-4 py-2 rounded-lg hover:bg-red-700 focus:bg-red-700"
          to="/"
        >
          Add Client
        </Link>
        <Link
          className="text-white bg-red-500 px-4 py-2 rounded-lg hover:bg-red-700 focus:bg-red-700"
          to="/AddFunctionalArea"
        >
          Add Functional Area
        </Link>
        <Link
          className="text-white bg-red-500 px-4 py-2 rounded-lg hover:bg-red-700 focus:bg-red-700"
          to="/AddRole"
        >
          Add Role
        </Link>
        <Link
          className="text-white bg-red-500 px-4 py-2 rounded-lg hover:bg-red-700 focus:bg-red-700"
          to="/AddPermission"
        >
          Add Permission
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
