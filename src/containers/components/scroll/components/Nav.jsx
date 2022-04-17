import { AiOutlineHome } from 'react-icons/ai';
import { BsPeople } from 'react-icons/bs';
import { RiLiveLine } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import './css/Nav.css';

function Nav(){
	const navLinkClass = ({ isActive }) => {
	    return isActive ? "Linkdefault activeLink Nav__flex" : "Linkdefault Nav__flex"
	}
	return(
		<div className="Nav">
	        <NavLink to="/" className={navLinkClass}><AiOutlineHome className="Nav__icon"/><h2 className="Nav__page">Dành cho bạn</h2></NavLink>
	        <NavLink to="following" className={navLinkClass}><BsPeople className="Nav__icon"/><h2 className="Nav__page">Đang Follow</h2></NavLink>
	        <div className="Nav__flex"><RiLiveLine className="Nav__icon"/><h2 className="Nav__page">LIVE</h2></div>
		</div>
	);
}
export default Nav;