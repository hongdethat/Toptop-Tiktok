import { LogoTopTop } from '../asset/images';
import './Logo.css';

function Logo(){
	return(
		<a href="/" className="Logo__Link"> 
		   <img src={LogoTopTop} alt="Logo" className="Logo__img"/>
		   <span className="Logo">TópTóp</span>
		</a>
	);
}
export default Logo;