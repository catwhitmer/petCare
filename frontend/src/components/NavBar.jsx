import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav-bar">
      <div className="nav-links">
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/pets">All Pets</Link>
        <Link className="link" to="/pets/new">Add Pet</Link>
      </div>
      <div className="nav-images">
        <img src="Pet1.png" className="img" alt="dog"></img>
        <img src="Pet3.png" className="img" alt="pets"></img>
        <img src="Pet6.png" className="img" alt="snake"></img>
        <img src="Pet7.png" className="img" alt="hamster"></img>
      </div>
    </div>
  );
}

export default NavBar;
