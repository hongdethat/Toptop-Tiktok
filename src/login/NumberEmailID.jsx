import { useNavigate, Link } from 'react-router-dom';
import './css/NumberEmailID.css';

function NumberEmailID (){
	const history = useNavigate();
	return(
		<div className="NumberEmailID__container">
		   <title>Đăng nhập bằng số điện thoại hoặc email | TópTóp</title>
		   <header>
		       <div className="NumberEmailID__Login__title">
		           Đăng nhập
		       </div>
		       <div className="NumberEmailID__back" onClick={()=> history("/Login/")}></div>
		   </header>
		   <div className="NumberEmailID__body">
		       <form>
		           <div className="NumberEmailID__body__div">
		           	    <div>Điện thoại</div>
		           	    <Link to="#/" className="NumberEmailID__Toptop">Đăng nhập bằng email hoặc Tóptóp ID</Link>
		           </div>
		       </form>
		   </div>
		</div>
	)
}
export default NumberEmailID;