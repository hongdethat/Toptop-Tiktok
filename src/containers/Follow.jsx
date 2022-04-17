import './css/Follow.css';
import { Link } from 'react-router-dom';
import { BsCheck2 } from 'react-icons/bs';
import { AvatarUser, FllowWait } from '../asset/images';

const Data = [{
	id:1,
},
{
	id:2,
},
{
	id:3,
},
{
	id:4,
},
{
	id:5,
},
{
	id:6,
},
{
	id:7,
},
{
	id:8,
},
{
	id:9,
},
{
	id:10,
},
{
	id:11,
},
{
	id:12,
}]
function Follow(){
	return(
		<div className="Body__Follows">
		    <title>Đang Follow - Xem video từ những nhà sáng tạo mà bạn follow| TópTóp</title>
		    <div className="Body__Follows__css">
                {Data.map((FollowList) => (
		        <div className="Body__Follows__form">
		            <Link to="#/" target="_blank" className="Body__Follows__Links">
		            	<div className="Body__Follows__mode">
		            	    <img src={FllowWait} alt="Video" />
		            	</div>
		            	<div className="Body__Follows__contents">
		            	    <div className="Cricle__avatar">
		            	        <img src={AvatarUser} alt="User"/>
		            	    </div>
		            	    <h5 className="Body__Follows__h5">top.top</h5>
		            	    <h6 className="Body__Follows__h6">
		            	        <span>Trần thị tóp tóp</span>
		            	        <BsCheck2 className="icon__Body__Follows"/>
		            	    </h6>
		            	    <div className="Body__Follows__btn">
		            	        <button>Follow</button>
		            	    </div>
		            	</div>
		            </Link>
		        </div>
		        ))}
		    </div>
		</div>
	);
}
export default Follow;