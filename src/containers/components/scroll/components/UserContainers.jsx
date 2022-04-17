import './css/UserContainers.css';
import { AvatarUser } from '../../../../asset/images';
import { BsCheck2 } from 'react-icons/bs';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Data = [{
	id: 1,
	img: AvatarUser,
	name_account: "top.top",
	active: "",
	name: "Trần thị Tóp Tóp"
},
{
	id: 2,
	img: AvatarUser,
	name_account: "top.top",
	active: "",
	name: "Trần thị Tóp Tóp"
},
{
	id: 3,
	img: AvatarUser,
	name_account: "top.top",
	active: "",
	name: "Trần thị Tóp Tóp"
},
{
	id: 4,
	img: AvatarUser,
	name_account: "top.top",
	active: "",
	name: "Trần thị Tóp Tóp"
},
{
	id: 5,
	img: AvatarUser,
	name_account: "top.top",
	active: "",
	name: "Trần thị Tóp Tóp"
}]
function UserContainers(){
	const [math, ismath] = useState(1);
    const [ChangeName, ischangeName] = useState("Follow");
    function FollowMe() {
	    ismath(math + 1);
	    if (math % 2 !== 0) {
	      ischangeName(<button className="UserContainers__UnFollow">Đang Follow</button>);
	    } else {
	      ischangeName(<button className="UserContainers__Follow__me">Follow</button>);
	    }
    }
	return(
		<div className="UserContainers">
		    <p className="UserContainers__p">Tài khoản được đề xuất</p>
            {Data.map((UserNav) => (
		    <div className="Hover__UserProfile">
			    <div className="UserContainers__user" key={UserNav.id}>
			    	<div className="UserContainers__img"><img src={UserNav.img} alt={UserNav.name} /></div>
			    	<span className="UserContainers__span">
			    	    <div className="UserContainers__flex">
			    	        <h4>{UserNav.name_account}</h4>
			    	        <BsCheck2 className="UserContainers__BsCheck2"/>
			    	    </div>
			    	    <p className="UserContainers__top_top__p">{UserNav.name}</p>
			    	</span>
			    </div>
			    <div className="dropdown-content">
					<span className="Dropdown__flex__Link">
						<Link to="#/" className="Dropdown__flex__ab">
							<span className="img__hover__dropdown">
								<img src={UserNav.img} alt={UserNav.name} className="img__span__drop"/>
							</span>
						</Link>
						<span onClick={FollowMe}>{ChangeName}</span>
					</span>
					<Link to="#/" className="UserContainers__Follow__me__als">
					    <span>{UserNav.name_account}</span>
					    <BsCheck2 className="UserContainers__BsCheck2"/>
					</Link>
					<Link to="#/" className="UserContainers__Follow__me__als2">
					   {UserNav.name}
					</Link>
					<p className="margin__UserContainer">
						<span className="margin__UserContainer__follower">9.99M</span>
						<span className="Margin__span__text">Follower</span>
						<span className="margin__UserContainer__follower">9.99M</span>
						<span className="Margin__span__text">Thích</span>
					</p>
				</div>
		    </div>
		    ))}
		    <div className="UserContainers__addviews">
		        <p className="UserContainers__p__addviews">Xem tất cả</p>
		    </div>
		</div>
	);
}
export default UserContainers;