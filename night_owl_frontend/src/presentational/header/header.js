import { Link } from "react-router-dom";

const Header = ({handleModalOpen}) =>{
  
    return(
        <nav className="header">
            <h1 className="header-title">
             <Link 
             className="header-title-anchor"
             to={"/"}>
             Night Owl
             </Link>
            </h1>
            <button 
            className="header-add-button"
            onClick={handleModalOpen}>
                Add
            </button>
        </nav>
    );
}
export default Header;