import { Link } from "react-router-dom";
const MenuItem = ({ icon, text, to }) => {
  return (
    <Link
      to={to}
      className="flex items-center p-2 text-gray-300 hover:bg-gray-700 rounded transition"
    >
      <span className="mr-2">{icon}</span>
      {text}
    </Link>
  );
};

export default MenuItem;
