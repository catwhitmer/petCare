import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

function NotFound() {
  return (
    <div>
      <h1>Oops!</h1>
      <p>404 - Page Not Found!</p>
      <Link to="/">
        <HomeIcon />
        Home
      </Link>
    </div>
  );
}

export default NotFound;
