import './css/Discover.css';
import { RiHashtag } from 'react-icons/ri';
import { BsMusicNoteBeamed } from 'react-icons/bs';

const Data = [{
	id: 1,
	icon: <RiHashtag/>,
	Tags: "ancungtoptop"
},
{
	id: 2,
	icon: <RiHashtag/>,
	Tags: "danhgold"
},
{
	id: 3,
	icon: <RiHashtag/>,
	Tags: "pornhub18plus"
},
{
	id: 4,
	icon: <BsMusicNoteBeamed/>,
	Tags: "Đoạn tuyệt nàng đi - Florentilo"
},
{
	id: 5,
	icon: <BsMusicNoteBeamed/>,
	Tags: "Đoạn tuyệt nàng đi - Tesla"
},
{
	id: 6,
	icon: <BsMusicNoteBeamed/>,
	Tags: "Bạn thân ơi - Bé Thủy Tiên"
},
{
	id: 7,
	icon: <RiHashtag/>,
	Tags: "xnxx"
},
{
	id: 8,
	icon: <RiHashtag/>,
	Tags: "javhdpro"
},
{
	id: 9,
	icon: <BsMusicNoteBeamed/>,
	Tags: "Bạn ơi đừng nghiện nữa - ABC"
},
{
	id: 10,
	icon: <BsMusicNoteBeamed/>,
	Tags: "HAHAHAHAHAHAHAHA - Tóp Tóp"
}]
function Discover(){
	return(
		<div className="Discover">
		    <p className="Discover__p">Khám phá</p>
		    <div className="Discover__tags">
                {Data.map((DiscoverTags) => (
		        <a href="#/" className="Discover__a" key={DiscoverTags.id}>
		        	<div className="HashTags">
		        	    {DiscoverTags.icon}
		        	    <p>{DiscoverTags.Tags}</p>
		        	</div>
		        </a>
		        ))}
		    </div>
		</div>
	);
}
export default Discover;