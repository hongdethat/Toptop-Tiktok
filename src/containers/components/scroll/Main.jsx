import Nav from './components/Nav';
import Follow from './components/Follow';
import UserContainers from './components/UserContainers';
import Discover from './components/Discover';
import Footer from './components/Footer';

import './Main.css';

function Main(){
	return(
		<div className="Main">
		    <div className="Mains">
		        <Nav/>
		        <Follow/>
		        <UserContainers/>
		        <Discover/>
		        <Footer/>
		    </div>
		</div>
	);
}
export default Main;